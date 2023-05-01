# YouTube Audio Downloader

This Node.js script allows you to download the audio from a YouTube video in MP3 format.

## Prerequisites

- Node.js installed on your computer
- `@ffmpeg-installer/ffmpeg` package

## Installation

1. Clone or download the script from the repository
2. Run `npm install` to install the required packages

## Usage

1. Open a terminal and navigate to the directory where the script is located
2. Run `node index.js` to start the script
3. Enter the YouTube video URL when prompted
4. Enter the file name to save the audio when prompted (do not include the file extension, it will be automatically set to `.mp3`)
5. Wait for the audio to be downloaded and converted to MP3 format
6. Find the downloaded audio file in the same directory as the script

## Notes

- The script requires the `ffmpeg` library to be installed as a system library on your computer.
- On Windows, the script requires a special configuration to run `ffmpeg` due to Electron packaging.
- The temporary `.mp4` file used during the conversion process will be deleted automatically after the audio file is created.
