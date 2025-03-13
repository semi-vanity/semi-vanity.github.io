let isOpen = false;

function toggleMessage() {
    const flap = document.querySelector('.flap');
    const message = document.querySelector('.message-container');

    if (!isOpen) {
        flap.style.transform = 'translateX(-50%) rotateX(180deg)'; // Open flap upwards
        message.style.transform = 'translateX(-50%) scale(1)'; // Show message
    } else {
        flap.style.transform = 'translateX(-50%) rotateX(0deg)'; // Close flap downward
        message.style.transform = 'translateX(-50%) scale(0)'; // Hide message
    }

    isOpen = !isOpen;
}

function createConfetti() {
    const envelope = document.querySelector('.envelope');
    const envelopeRect = envelope.getBoundingClientRect(); // Get envelope position

    const centerX = envelopeRect.left + envelopeRect.width / 2;
    const centerY = envelopeRect.top + envelopeRect.height / 2;

    for (let i = 0; i < 30; i++) { // Adjust number of confetti pieces
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Start from center of the envelope
        confetti.style.left = `${centerX}px`;
        confetti.style.top = `${centerY}px`;

        // Random size (rectangular)
        confetti.style.width = `${5 + Math.random() * 10}px`;
        confetti.style.height = `${2 + Math.random() * 5}px`;

        // Random colors for variety
        const colors = ['#f94144', '#f3722c', '#f8961e', '#43aa8b', '#577590'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);

        // Random circular explosion effect
        const angle = Math.random() * 2 * Math.PI; // Random direction
        const distance = Math.random() * 200 + 50; // How far confetti flies

        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;

        setTimeout(() => {
            confetti.style.transform = `translate(${endX}px, ${endY}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.opacity = 0;
        }, 100);

        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 2000);
    }
}