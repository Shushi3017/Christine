onload = () => {
  document.body.classList.remove("container");
};
// Function to start music
function playMusic() {
    const music = document.getElementById('bg-audio');
    music.play().then(() => {
        // Music started successfully
        console.log("Music playing");
        // Remove listeners once it starts playing
        window.removeEventListener('click', playMusic);
        window.removeEventListener('scroll', playMusic);
        window.removeEventListener('touchstart', playMusic);
    }).catch((error) => {
        // Autoplay was prevented
        console.log("Playback failed:", error);
    });
}

// Listen for any user interaction to trigger the music
window.addEventListener('click', playMusic);
window.addEventListener('scroll', playMusic);
window.addEventListener('touchstart', playMusic);