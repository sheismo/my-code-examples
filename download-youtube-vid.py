from pytube import Youtube

DOWNLOAD_FOLDER = "/Users/Zainab/Desktop"
video_url = "https://www.youtube.com/watch?v==ff_0hypwIPA"
video_obj = Youtube(video_url)

stream = video_obj.streams.get_highest_resolution()
stream.download(DOWNLOAD_FOLDER)
