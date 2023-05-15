const playMusic = document.querySelector('.click')
const progress = document.querySelector('#progress')
const song = document.querySelector('#song')

song.onloadedmetedata = ()=>{
  progress.max = song.duration;
  progress.value = song.currentTime
}

function playPause(){
  if(playMusic.classList.contains('fa-play')){
    playMusic.classList.add('fa-pause')
    playMusic.classList.remove('fa-play')
    song.Pause
  }else{
    playMusic.classList.add('fa-play')
    playMusic.classList.remove('fa-pause')
    song.Play
  }
}

