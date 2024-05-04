const userVideo = document.getElementById("user-video");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const socket = new io();
let mediaRecorder;

const state = { media: null };

startButton.addEventListener("click", () => {
    mediaRecorder = new MediaRecorder(state.media, {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
        framerate: 25,
    });

    mediaRecorder.ondataavailable = (e) => {
        console.log("binary stream", e.data);
        socket.emit('binarystream',e.data)
    };

    mediaRecorder.start(25);
});

stopButton.addEventListener("click", () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
    }
});

window.addEventListener("load", async (e) => {
    const media = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
    });
    state.media = media;
    userVideo.srcObject = media;
});
