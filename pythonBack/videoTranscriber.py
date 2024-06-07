from twitchrealtimehandler import (TwitchAudioGrabber,
                                   TwitchImageGrabber)
import numpy as np

audio_grabber = TwitchAudioGrabber(
    twitch_url="https://www.twitch.tv/compass_cs2",
    blocking=True,  # wait until a segment is available
    segment_length=2,  # segment length in seconds
    rate=16000,  # sampling rate of the audio
    channels=2,  # number of channels
    dtype=np.int16  # quality of the audio could be [np.int16, np.int32, np.float32, np.float64]
    )

audio_segment = audio_grabber.grab()
audio_segment.
