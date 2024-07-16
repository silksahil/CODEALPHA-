const playBtn = document.querySelector(".fa-play");
const frwdBtn = document.querySelector(".fa-forward");
const bckBtn = document.querySelector(".fa-backward");
const audio = document.querySelector(".song");
const progressBar = document.getElementById("progress");
const rplyBtn = document.querySelector(".fa-repeat");
const volumeBtn = document.querySelector(".fa-volume-high");
const songTitle = document.querySelector(".title");
const description = document.querySelector(".about");
const songImg = document.querySelector(".song-image img");

const songs = [
  {
    title: "Maan Meri Jaan",
    album: "Album, New Life",
    img: "assests/imgs/1.jpeg",
    src: "assests/audios/1.mp3",
  },
  {
    title: "PABLO",
    album: "Album, New Life",
    img: "assests/imgs/2.jpeg",
    src: "assests/audios/2.mp3",
  },
  {
    title: "Tu Aake Dekhle",
    album: "Album, Carnival",
    img: "assests/imgs/3.jpeg",
    src: "assests/audios/3.mp3",
  },
];
let currentIndex = 0;

const loadSong = (index) => {
  const song = songs[index];
  audio.src = song.src;
  songImg.src = song.img;
  songTitle.textContent = song.title;
  description.textContent = song.album;
  audio.load();
};

const playSong = () => {
  audio.play();
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');
};

const pauseSong = () => {
  audio.pause();
  playBtn.classList.remove('fa-pause');
  playBtn.classList.add('fa-play');
};

loadSong(currentIndex);

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

progressBar.addEventListener('input', () => {
  const seekTime = (progressBar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});

rplyBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  rplyBtn.classList.toggle('active');
  audio.currentTime = 0;

});

volumeBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  volumeBtn.classList.toggle('fa-volume-mute');
});

bckBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  playSong();
});

frwdBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  playSong();
});

audio.addEventListener('ended', () => {
  if (!audio.loop) {
    currentIndex = (currentIndex + 1) % songs.length;
    loadSong(currentIndex);
    playSong();
  }
});
