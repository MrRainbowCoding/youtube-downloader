const fs = require("fs");
const ytdl = require("ytdl-core");
const readline = require("readline");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");

if (process.platform === "win32") {
  ffmpeg.setFfmpegPath(ffmpegPath.replace("app.asar", "app.asar.unpacked"));
} else {
  ffmpeg.setFfmpegPath(ffmpegPath);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the YouTube video URL: ", function(videoUrl) {
  rl.question("Enter the file name to save the audio: ", function(fileName) {
    fileName = fileName + ".mp3";
    ytdl(videoUrl, { filter: 'audioonly', quality: 'highestaudio' })
      .pipe(fs.createWriteStream("temp.mp4"))
      .on("finish", () => {
        ffmpeg()
          .input("temp.mp4")
          .outputOptions("-vn", "-acodec", "libmp3lame", "-qscale:a", "3")
          .output(fileName)
          .on("end", () => {
            console.log("Audio downloaded successfully");
            fs.unlink("temp.mp4", (err) => {
              if (err) throw err;
              console.log("Temporary file deleted");
              rl.close();
            });
          })
          .run();
      });
  });
});
