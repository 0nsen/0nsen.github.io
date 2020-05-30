window.onload = function() {
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var video = document.querySelector("video");

    //  Draws the current frame of the video every 50 milliseconds
    video.addEventListener('play', function() {
        window.setInterval(function() {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            LenaJS.filterImage(document.querySelector("#canvas-right"), LenaJS["canny"], document.querySelector("#canvas-left"));
        }, 50);
    }, false);
}