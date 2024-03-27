let songs = [
    {songName: "let me love you", filePath: "songs/Let Me Love You.mp3", coverPath: "images/let me love you image.jpg"},
    {songName: "after dark", filePath: "songs/After Dark.mp3", coverPath: "images/after dark image.jpg"},
    {songName: "dandelions", filePath: "songs/Dandelions.mp3", coverPath: "images/dandelions image.jpg"},
    {songName: "despacito", filePath: "songs/Despacito.mp3", coverPath: "images/Despacito image.jpg"},
    {songName: "infinity", filePath: "songs/infinity.mp3", coverPath: "images/infinity image.jpg"},
    {songName: "into your arms", filePath: "songs/Into Your Arms.mp3", coverPath: "images/into your arms image.jpg"},
    {songName: "love me like you do", filePath: "songs/Love Me Like You Do.mp3", coverPath: "images/love me like you do image.jpg"},
    {songName: "mary on a cross", filePath: "songs/Mary On A Cross.mp3", coverPath: "images/mary on a cross image.jpg"},
    {songName: "night changes", filePath: "songs/Night Changes.mp3", coverPath: "images/night changes image.jpg"},
    {songName: "shape of you", filePath: "songs/Shape of You.mp3", coverPath: "images/shape of you image.jpg"},
]

let audioElement = new Audio('songs/Let Me Love You.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        index = e.target.id;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})