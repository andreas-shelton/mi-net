// lots of guidance and base code for this section from chatgpt 

document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    const playlist = [
        "audio/01.mp3",
        "audio/02.mp3",
        "audio/03.mp3",
        "audio/04.mp3",
        "audio/05.mp3",
        "audio/07.mp3",
        "audio/08.mp3",
        "audio/09.mp3",
        "audio/10.mp3",
        "audio/11.mp3",
        "audio/12.mp3",
        "audio/13.mp3",
        "audio/14.mp3",
        "audio/15.mp3",
        "audio/16.mp3",
        "audio/17.mp3",
        "audio/18.mp3",
        "audio/19.mp3",
        "audio/20.mp3",
        "audio/21.mp3",
        "audio/22.mp3",
        "audio/23.mp3",
        "audio/24.mp3"
    ];

    let currentSongIndex = parseInt(localStorage.getItem("currentSongIndex")) || 0;
    let currentTime = parseFloat(localStorage.getItem("currentTime")) || 0;

    function playSong() {
        audioSource.src = playlist[currentSongIndex];
        audioPlayer.load();
        audioPlayer.play();
    }

    window.onload = () => {
        playSong();
    };

    audioPlayer.addEventListener("ended", () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        localStorage.setItem("currentSongIndex", currentSongIndex); playSong();
    });

  audioPlayer.addEventListener("timeupdate", () => { localStorage.setItem("currentTime", audioPlayer.currentTime);
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("currentTime", audioPlayer.currentTime); 
});

});
