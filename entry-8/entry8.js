document.addEventListener('DOMContentLoaded', function () {
    const backgroundNoise = document.getElementById('backgroundNoise');
    const song = document.getElementById('song');
    const playButton = document.getElementById('playButton');
  
    playButton.addEventListener('click', function () {
      // Toggle between playing background noise and the song
      if (backgroundNoise.paused) {
        backgroundNoise.play();
        song.pause();
      } else {
        backgroundNoise.pause();
        song.currentTime = 0; // Reset song to the beginning
        song.play();
      }
    });
  });
  