import asyncio
import websockets
import pyaudio
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch  
from http.server import HTTPServer, BaseHTTPRequestHandler
import logging
import asyncio
import aiohttp
import json

# Can be further quantised to be made smaller for a faster inference
model_id = "meta-llama/Meta-Llama-3-8B-Instruct"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)
# uses the text of the audio to run the llama3 model and infer summary and the quiz
def generate_summary_quiz(text):
    messages1 = [
    {"role": "system", "content": "You are a text summarizer. Take the text and note important names, scenes and locations and output a concise summary."},
    {"role" : "user", "content": text}
    ]
    messages2 = [
    {"role": "system", "content": "You are a quiz creator. You find intricate details in the text and creator quiz around it. You will return 2 options and 1 right answer too. Here is the format: question: question, option1: option1, option2 : option2, correct: correct"},
    {"role" : "user", "content": text}
    ]
    input_ids = tokenizer.apply_chat_template(
    messages1,
    add_generation_prompt=True,
    return_tensors="pt"
    ).to(model.device)

    terminators = [
    tokenizer.eos_token_id,
    tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]

    outputs = model.generate(
    input_ids,
    max_new_tokens=256,
    eos_token_id=terminators,
    do_sample=True,
    temperature=0.6,
    top_p=0.9,
)
    response = outputs[0][input_ids.shape[-1]:]
    summary = tokenizer.decode(response, skip_special_tokens=True)
    input_ids = tokenizer.apply_chat_template(
    messages2,
    add_generation_prompt=True,
    return_tensors="pt"
    ).to(model.device)

    terminators = [
    tokenizer.eos_token_id,
    tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]

    outputs = model.generate(
    input_ids,
    max_new_tokens=256,
    eos_token_id=terminators,
    do_sample=True,
    temperature=0.6,
    top_p=0.9,
)
    response = outputs[0][input_ids.shape[-1]:]
    quizQuery = tokenizer.decode(response, skip_special_tokens=True)
    return {'response': response, 'quiz': quizQuery}
    


# returns the audio stream and runs the generate summary function
async def generate_and_return_data():
    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
    stream.start_stream()

    uri = f"wss://api.assemblyai.com/v2/realtime/ws?key={'1ec76858e0894bcba28fd14f4bc891d7'}"
    async with websockets.connect(uri) as websocket:
        timestamp = 0
        while True:
            chunk = stream.read(1024)
            await websocket.send(chunk)
            result = await websocket.recv()
            print(result)
            timestamp += 300  # Increment timestamp by 5 minutes (300 seconds)
            if timestamp % 300 == 0:  # Check if 5 minutes have passed
                # Collect transcriptions for the past 5 minutes
                collected_text = ""
                for _ in range(12):  # Adjust based on your needs
                    chunk = stream.read(1024)
                    collected_text += result  # Assuming result contains transcribed text
                summary = generate_summary_quiz(collected_text)
                return json.dumps(summary)

async def handle_request(request):
    response = await generate_and_return_data()
    return aiohttp.web.Response(text=response, content_type='application/json')

async def main():
    app = aiohttp.web.Application()
    app.router.add_get('/', handle_request)
    runner = aiohttp.web.AppRunner(app)
    await runner.setup()
    site = aiohttp.web.TCPSite(runner, 'localhost', 8080)
    await site.start()
    logging.info("Server started at http://localhost:8080/")
    try:
        await asyncio.Future()  # Run forever
    except KeyboardInterrupt:
        pass
    finally:
        await site.stop()
        await runner.cleanup()

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())


# this file can be hosted easily using the following command
# NGROK_AUTHTOKEN=2gKcqtZ8qKckgR2V350AyImG9r5_6xJ6UsAbh2d3ff85ZtDMv python example.py