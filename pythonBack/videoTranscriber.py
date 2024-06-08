import os
from moviepy.editor import *
from transformers import pipeline

def extract_audio_and_transcribe(video_path):
    # Load the video
    clip = VideoFileClip(video_path)
    
    # Extract audio from the video
    audio_clip = clip.audio
    audio_filename = "temp_audio.wav"
    audio_clip.write_audiofile(audio_filename)
    
    # Function to split audio and transcribe
    def process_audio_segment(segment_start, segment_end):
        # Extract segment
        start_time = int(segment_start * 1000)  # Convert to milliseconds
        end_time = int(segment_end * 1000)  # Convert to milliseconds
        audio_clip.subclip(start_time, end_time).write_audiofile(f"segment_{start_time}_{end_time}.flac")
        
        # Transcribe the segment
        transcription = pipe(f"segment_{start_time}_{end_time}.flac")
        print(transcription)
        
        # Delete the temporary audio file
        os.remove(f"segment_{start_time}_{end_time}.flac")
    
    # Calculate segments
    total_duration = len(audio_clip)
    num_segments = int(total_duration / 600)  # Assuming 10 minutes per segment
    
    # Process each segment
    for i in range(num_segments):
        start_time = i * 600  # Start time of the segment (in seconds)
        end_time = start_time + 600  # End time of the segment (in seconds)
        process_audio_segment(start_time, end_time)

if __name__ == "__main__":
    video_path = "path_to_your_video.mp4"  # Replace with your video path
    pipe = pipeline("automatic-speech-recognition", model="openai/whisper-large-v3")
    extract_audio_and_transcribe(video_path)
