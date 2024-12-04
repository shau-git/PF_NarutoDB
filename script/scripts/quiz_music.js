function sound(id) {
    stopSongs(soundsId)
    document.getElementById(id).play()
}

function stopSongs() {
    soundsId.forEach( sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}