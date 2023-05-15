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
    song.pause()
  }else{
    playMusic.classList.add('fa-play')
    playMusic.classList.remove('fa-pause')
    song.play()
  }
}

if(song.play()){
  setInterval(()=>{
    progress.value = song.currentTime
  }, 500)
}

progress.onchange = ()=>{
  song.play()
  song.currentTime = progress.value
  playMusic.classList.add('fa-play')
  playMusic.classList.remove('fa-pause')

}