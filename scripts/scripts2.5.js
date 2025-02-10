document.addEventListener("DOMContentLoaded", function() {
    const rotateMessage = document.getElementById("rotateMessage");
    const videoContainer = document.getElementById("videoContainer");
    const videoElement = document.getElementById("videoElement");
    const playButton = document.getElementById("playButton");
    const replayButton = document.getElementById("replayButton");
    const fullscreenButton = document.getElementById("fullscreenButton");

    function checkOrientation() {
        if (window.innerHeight > window.innerWidth) {
            rotateMessage.style.display = "block";
            videoContainer.style.display = "none";
        } else {
            rotateMessage.style.display = "none";
            videoContainer.style.display = "block";
        }
    }

    window.addEventListener("resize", checkOrientation);
    checkOrientation();

    playButton.addEventListener("click", function() {
        videoElement.play();
    });

    replayButton.addEventListener("click", function() {
        videoElement.currentTime = 0;
        videoElement.play();
    });

    fullscreenButton.addEventListener("click", function() {
        if (videoElement.requestFullscreen) {
            videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
            videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
            videoElement.msRequestFullscreen();
        }
    });
});