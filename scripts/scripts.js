function showLove() {
    for (let i = 0; i < 7; i++) {
        setTimeout(() => {
            let balloon = document.createElement("img");
            balloon.src = "img/baloon.gif"; // Ensure this path points to the correct image location in your project directory
            balloon.alt = "Heart Balloon";
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 100 + "vw";
            document.body.appendChild(balloon);
            let startTime = Date.now();
            function removeBalloon() {
                if (Date.now() - startTime >= 5000) {
                    balloon.remove();
                } else {
                    requestAnimationFrame(removeBalloon);
                }
            }
            requestAnimationFrame(removeBalloon);
        }, Math.random() * 2000); // Random delay between 0 and 2000 milliseconds
    }
}

document.querySelector('.btn-custom').addEventListener('click', function() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            let heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000); // Adjust the time as needed
        }, i * 200); // Delay each heart creation by 200ms
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const messageContainer = document.querySelector('.message-container');
    const bubbleContainer = document.querySelector('.bubble-container');

    const messages = [
        "Yang, it's been a year na pala",
        "I still remember it like it was yesterday"
    ];

    let currentMessageIndex = 0;

    function showMessage(index) {
        if (index >= messages.length) {
            showBubbles();
            return;
        }

        const messageElement = document.createElement('h1');
        messageElement.classList.add('message');
        messageElement.textContent = messages[index];
        messageContainer.appendChild(messageElement);

        setTimeout(() => {
            messageElement.style.opacity = 1;
        }, 100);

        setTimeout(() => {
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageContainer.removeChild(messageElement);
                showMessage(index + 1);
            }, 2000);
        }, 4000);
    }

    function showBubbles() {
        const images = ['img1.jpg', 'img2.jpg', 'img3.jpg']; // Replace with your image paths
        images.forEach(src => {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            const img = document.createElement('img');
            img.src = src;
            bubble.appendChild(img);
            bubbleContainer.appendChild(bubble);
        });
        bubbleContainer.style.opacity = 1;
    }

    showMessage(currentMessageIndex);
});
