// Function to start music
function playMusic() {
    const music = document.getElementById('bgMusic');
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
///login page script

  const VALID_PASS = "02/17/2026";

        function togglePassword() {
            const pwd = document.getElementById('password');
            const icon = document.getElementById('eye-icon');
            if (pwd.type === 'password') {
                pwd.type = 'text';
                icon.innerHTML = '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>';
            } else {
                pwd.type = 'password';
                icon.innerHTML = '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>';
            }
        }

        document.getElementById('login-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const pass = document.getElementById('password').value;
            const btn = document.getElementById('submit-btn');
            const btnText = document.getElementById('btn-text');
            const errMsg = document.getElementById('error-message');

            errMsg.classList.add('hidden-element');

            if (pass !== VALID_PASS) {
                errMsg.classList.remove('hidden-element');
                return;
            }

            // Loading state
            btn.disabled = true;
            btnText.innerText = "Verifying...";

            setTimeout(() => {
                document.getElementById('login-container').classList.add('hidden-element');
                document.getElementById('success-screen').classList.remove('hidden-element');
            }, 1200);
        });