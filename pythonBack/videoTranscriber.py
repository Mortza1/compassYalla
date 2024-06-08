import asyncio
import websockets
import pyaudio
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch  

model_id = "meta-llama/Meta-Llama-3-8B-Instruct"

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

messages = [
    {"role": "system", "content": "You are a text summarizer. Take the text and note important names, scenes and locations and output a concise summary."},
]

input_ids = tokenizer.apply_chat_template(
    messages,
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
print(tokenizer.decode(response, skip_special_tokens=True))


async def listen_for_audio(api_key):
    p = pyaudio.PyAudio()
    stream = p.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)
    stream.start_stream()

    uri = f"wss://api.assemblyai.com/v2/realtime/ws?key={api_key}"
    async with websockets.connect(uri) as websocket:
        timestamp = 0
        while True:
            chunk = stream.read(1024)
            await websocket.send(chunk)
            result = await websocket.recv()
            print(result)
            timestamp += 300  # Increment timestamp by 5 minutes (300 seconds)
            if timestamp % 300 == 0:  # Check if 5 minutes have passed
                # Generate summary here
                pass

asyncio.get_event_loop().run_until_complete(listen_for_audio('YOUR_API_KEY'))
