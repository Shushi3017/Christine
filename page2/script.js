    const audio = document.getElementById('bg-audio');
        const audioBtn = document.getElementById('audio-toggle');
        const audioIcon = document.getElementById('audio-icon');
        const overlay = document.getElementById('start-overlay');
        let isPlaying = false;

        // Function to start audio as soon as possible
        function startExperience() {
            audio.play().then(() => {
                isPlaying = true;
                audioBtn.classList.add('is-playing');
                audioIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
            }).catch(e => console.log("Audio play failed:", e));

            overlay.style.opacity = '0';
            setTimeout(() => overlay.style.display = 'none', 1000);
        }

        function toggleAudio() {
            if (isPlaying) {
                audio.pause();
                audioIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>';
                audioBtn.classList.remove('is-playing');
            } else {
                audio.play();
                audioIcon.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
                audioBtn.classList.add('is-playing');
            }
            isPlaying = !isPlaying;
        }

        audioBtn.addEventListener('click', toggleAudio);

        // Name Swap logic
        const names = ["Casingal", "Maganda", "Your best girl and you deserve flowers", "Aking Tahanan", "Forever and Always", "My Everything", "The One I Love", "My Heart's Desire"];
        let nIdx = 0;
        setInterval(() => {
            const el = document.getElementById('surname');
            if (el) {
                el.classList.add('surname-out');
                setTimeout(() => {
                    nIdx = (nIdx + 1) % names.length;
                    el.innerText = names[nIdx];
                    el.classList.remove('surname-out');
                }, 500);
            }
        }, 5000);

        // Scroll Observers
        const obs = new IntersectionObserver((es) => {
            es.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.scroll-fade').forEach(el => obs.observe(el));

        // Memory Interaction
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.memory-container').forEach((container) => {
                const frame = container.querySelector('.picture-frame');
                const rect = container.getBoundingClientRect();
                const scrollPercent = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));

                if (rect.top <= 0 && rect.bottom >= 0) {
                    frame.style.width = (100 - (scrollPercent * 30)) + 'vw';
                    frame.style.height = (100 - (scrollPercent * 40)) + 'vh';
                    frame.style.borderRadius = (scrollPercent * 40) + 'px';
                    if (scrollPercent > 0.6) frame.classList.add('letter-active');
                    else frame.classList.remove('letter-active');
                }
            });
        });

        // Proposal Logic
        let noMoves = 0;
        const noBtn = document.getElementById('noBtn');
        const yesBtn = document.getElementById('yesBtn');

        function handleNoMove() {
            noMoves++;
            const x = Math.random() * 300 - 150;
            const y = Math.random() * 300 - 150;
            noBtn.style.position = 'absolute';
            noBtn.style.transform = `translate(${x}px, ${y}px)`;
            if (noMoves >= 3) {
                yesBtn.style.transform = `scale(${1 + (noMoves * 0.15)})`;
            }
        }

        function handleYesClick() {
            alert("Mahal na mahal kita, Christine! ❤️");
        }

        // Global Hearts
        setInterval(() => {
            const h = document.createElement('div');
            h.innerHTML = '♥';
            h.className = 'heart-particle pointer-events-none';
            h.style.left = Math.random() * 100 + '%';
            h.style.setProperty('--d', (Math.random() * 8 + 4) + 's');
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 10000);
        }, 1500);