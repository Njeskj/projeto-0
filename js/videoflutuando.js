const video = document.getElementById("sliding-video");
let x = 0;
let y = 0;
let dx = 1;
let dy = 1;

function moveVideo() {
    const maxX = window.innerWidth - video.offsetWidth;
    const maxY = window.innerHeight - video.offsetHeight;

    x += dx;
    y += dy;

    if (x < 0 || x > maxX) {
        dx = -dx;
    }

    if (y < 0 || y > maxY) {
        dy = -dy;
    }

    video.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(moveVideo);
}

moveVideo();
