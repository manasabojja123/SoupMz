console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
masterSongName.innerText = "";

let songs = [
    {songName: "oyy", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "yedhane koyyake", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "sanam re", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Baarish", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Balam pichikari", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Ishq wala love", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "jab tak", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "zeene laga huu", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "shershaah sad", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "phir kabhi", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "manwa lage", filePath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "phir bhi tumki chahungi", filePath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "phir kabhi", filePath: "songs/13.mp3", coverPath: "covers/13.jpg"},
    {songName: "Rateein lambiya", filePath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Ranja", filePath: "songs/15.mp3", coverPath: "covers/15.jpg"},
    {songName: "Agar tum saath hoo", filePath: "songs/16.mp3", coverPath: "covers/16.jpg"},
    {songName: "Humari adhuri kahani", filePath: "songs/17.mp3", coverPath: "covers/17.jpg"},
    {songName: "Tujhe kitna chahane lagahum", filePath: "songs/18.mp3", coverPath: "covers/18.jpg"},
    {songName: "subhanallah", filePath: "songs/19.mp3", coverPath: "covers/19.jpg"},
    {songName: "sonu ki tite", filePath: "songs/20.mp3", coverPath: "covers/20.jpg"},
    {songName: "Thodi der", filePath: "songs/21.mp3", coverPath: "covers/21.jpg"},
    {songName: "Thu jaane na", filePath: "songs/22.mp3", coverPath: "covers/22.jpg"},
    {songName: "Manohara", filePath: "songs/23.mp3", coverPath: "covers/23.jpg"},
    {songName: "Rab ne banadi jodi", filePath: "songs/24.mp3", coverPath: "covers/24.jpg"},
    {songName: "sanam re", filePath: "songs/25.mp3", coverPath: "covers/25.jpg"},
    {songName: "chogada tera", filePath: "songs/26.mp3", coverPath: "covers/26.jpg"},
    {songName: "oka maru", filePath: "songs/27.mp3", coverPath: "covers/27.jpg"},
    {songName: "Rooba Rooba", filePath: "songs/28.mp3", coverPath: "covers/28.jpg"},
    {songName: "Adi nanne chera vache", filePath: "songs/29.mp3", coverPath: "covers/29.jpg"},
    {songName: "chlipi kallalona", filePath: "songs/30.mp3", coverPath: "covers/30.jpg"},
    {songName: "orugalluke pilla", filePath: "songs/31.mp3", coverPath: "covers/31.jpg"},
    {songName: "om shanti shanti", filePath: "songs/32.mp3", coverPath: "covers/32.jpg"},
    {songName: "chakkara chinnoda", filePath: "songs/33.mp3", coverPath: "covers/33.jpg"},
    {songName: "attharintiki", filePath: "songs/34.mp3", coverPath: "covers/34.jpg"},
    {songName: "Emindi e vela", filePath: "songs/35.mp3", coverPath: "covers/35.jpg"},
    {songName: "chilipiga choostav", filePath: "songs/36.mp3", coverPath: "covers/36.jpg"},
    {songName: "Nallone pongenu narmada", filePath: "songs/37.mp3", coverPath: "covers/37.jpg"},
    {songName: "cheppave chirugali", filePath: "songs/38.mp3", coverPath: "covers/38.jpg"},
    {songName: "paruvam vanaga", filePath: "songs/39.mp3", coverPath: "covers/39.jpg"},
    {songName: "Na vayasaku vanthane vese", filePath: "songs/40.mp3", coverPath: "covers/40.jpg"},
    {songName: "anukoledu yenadu", filePath: "songs/41.mp3", coverPath: "covers/41.jpg"},
    {songName: "I waiting for u babe", filePath: "songs/42.mp3", coverPath: "covers/42.jpg"},
    {songName: "Nenu nuvvantu", filePath: "songs/43.mp3", coverPath: "covers/43.jpg"},
]




songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    songIndex = (songIndex + 1) % songs.length; // Ensure song index wraps around
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length; // Ensure song index wraps around
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
audioElement.addEventListener('ended', () => {
    // This code block will be executed when a song has ended

    songIndex = (songIndex + 1) % songs.length;
    // Increment the song index and use the modulo operator to wrap around to the beginning when needed. 
    // This ensures that after the last song, it will go back to the first song.

    audioElement.src = songs[songIndex].filePath;
    // Set the audio source to the file path of the next song.

    masterSongName.innerText = songs[songIndex].songName;
    // Update the displayed song name to the name of the next song.

    audioElement.currentTime = 0;
    // Reset the current time of the audio to the beginning, so the next song starts from the beginning.

    audioElement.play();
    // Start playing the next song.

    // This will automatically transition to the next song after the current song ends.
});
