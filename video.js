const songs = [
    {
        title:"Song 1",
        file:"song1.mp3"
    },
    {
        title:"Song 2",
        file:"song2.mp3"
    },
    {
        title:"Song 3",
        file:"song3.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("songTitle");

function loadSong(){

    audio.src = songs[currentSong].file;

    title.textContent =
    songs[currentSong].title;
}

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong();
    audio.play();
}

function prevSong(){

    currentSong--;

    if(currentSong < 0){
        currentSong =
        songs.length - 1;
    }

    loadSong();
    audio.play();
}

audio.addEventListener("ended", nextSong);

loadSong();