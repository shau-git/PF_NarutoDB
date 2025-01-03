const images = [
    "./imgRemedy/index/Naruto-1.png",

    //"https://www.pngall.com/wp-content/uploads/13/Naruto-Background-PNG.png",
    "./imgRemedy/index/Naruto-2.png",

    //"https://www.pngall.com/wp-content/uploads/13/Naruto-PNG-Clipart.png",
    "./imgRemedy/index/Naruto-3.png",

    //"https://www.pngall.com/wp-content/uploads/13/Naruto.png",
    "./imgRemedy/index/Naruto-4.png",

    //"https://www.pngall.com/wp-content/uploads/15/Naruto-Sage-Mode-Background-PNG.png",
    "./imgRemedy/index/Naruto-5.png",

    //"https://www.pngall.com/wp-content/uploads/14/Naruto-Baryon-Mode-PNG-Clipart.png",
    "./imgRemedy/index/Naruto-6.png",

    //"https://www.pngall.com/wp-content/uploads/13/Naruto-PNG-Photo.png"
    "./imgRemedy/index/Naruto-7.png"
]



//when clicking 'change image' button
let clickCount = 0;
document.querySelector('.change-img-btn').addEventListener('click', () => {
    stopSongs()
    document.getElementById('change-img-btn').play()
    clickCount += 1;
    if (clickCount > 6) {
        clickCount = 0
    }

    document.querySelector('.naruto-img').src= images[clickCount]
})



//when clicking the image
document.querySelector('.naruto-img').addEventListener('click', () => {
    stopSongs()
    document.getElementById('switching').play()
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white'
    } else {
        document.body.style.backgroundColor = 'black'
    }
})


// fucntion to stop the song when clicking another audio button
const sounds =['change-img-btn', 'switching','dattebayo','kagebunshin','fuuton','oodama']
function stopSongs() {
    sounds.forEach( sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}



//when clicking 'NARUTO BD' , reason i = 2 is because in the sounds variable above i only want the 'dattebayo' onwards
// i just mix all the soundsID into one list 
let i = 2;
document.getElementsByClassName('title')[0].addEventListener('click', ()=> {
    stopSongs()
    if (i === sounds.length) {
        i = 2;
    }
    document.getElementById(`${sounds[i]}`).play()
    i++
})