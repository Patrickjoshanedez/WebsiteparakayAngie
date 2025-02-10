document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Yang, it's been a year already,",  
        "Yet, I still remember everything like it was yesterday.",  
        "Last Valentine's Day was special,",  
        "Because you were there too.",  
        "Malayo man tayo",  
        "Your presence was always enough.",  
        "And even though makasalanan ako,",  
        "Even though I'm not perfect,",  
        "You're still here.",  
        "Despite the challenges of time and distance,",  
        "I know you're busy, and has a lot of things going on,",
        "You still make time for me.",  
        "And for that, I'm truly grateful.",
        "Words can't express how much you mean to me Yang,",
        "They say Valentines is a day for love,",
        "And I say.",
        "Happy Valentine's Day, Hakdog!",
        "Regards Patrick Josh Añedez",
        "To you miss Angie Flores",
        "Now I'll ask",
        "This might sound childish",
        "but..."
    ];

    const messageContainer = document.querySelector('.message-container');
    const responseContainer = document.querySelector('.response-container');
    const responseImage = document.getElementById('response-image');
    const responseText = document.getElementById('response-text');
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const hearts = document.querySelectorAll('.heart');

    let messageIndex = 0;
    let noButtonClickCount = 0;
    
    function showMessage() {
        if (messageIndex >= messages.length) {
            responseContainer.style.display = 'flex';
            return;
        }

        const messageElement = document.createElement('h1');
        messageElement.classList.add('message');
        messageElement.textContent = messages[messageIndex];
        messageContainer.appendChild(messageElement);

        setTimeout(() => messageElement.style.opacity = 1, 100);
        
        setTimeout(() => {
            messageElement.style.opacity = 0;
            setTimeout(() => {
                messageContainer.removeChild(messageElement);
                messageIndex++;
                showMessage();
            }, 2000);
        }, 4000);
    }

    function animateHearts() {
        hearts.forEach(heart => {
            setTimeout(() => {
                heart.style.top = `${Math.random() * 100}%`;
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.opacity = 1;
                setTimeout(() => heart.style.opacity = 0, 2000);
            }, Math.random() * 5000);
        });
        setTimeout(animateHearts, 5000);
    }

    noButton.addEventListener('click', () => {
        noButtonClickCount++;
        switch (noButtonClickCount) {
            case 1:
                responseText.innerHTML = 'Alam ko na di pa tayo bati but pleaseee';
                responseImage.src = 'img/last2.gif'; // Change to the new image path
                break;
            case 2:
                responseText.innerHTML = 'sige na baaa : (';
                responseImage.src = 'img/last3.gif'; // Change to the new image path
                break;
            case 3:
                responseText.innerHTML = 'Yang namannnn';
                responseImage.src = 'img/last4.gif'; // Change to the new image path
                break;
            case 4:
                responseText.innerHTML = 'ayun wala ka nang no choice WAHAHAHA';
                responseImage.src = 'img/last5.gif'; // Change to the new image path
                noButton.style.display = 'none'; // Hide the No button after 5 clicks
                break;
        }
        yesButton.classList.add('bigger'); // Make the Yes button bigger
    });

    showMessage();
    animateHearts();
});