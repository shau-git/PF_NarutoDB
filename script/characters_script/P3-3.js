const allChar = 'https://narutodb.xyz/api/character?limit=1430'

document.querySelector('.draw-btn').addEventListener('click', () => {
    let id =  Math.floor(Math.random() *  1430) //0 <= x < 1430
   
    fetch1(allChar,'characters').then(character =>  document.getElementById('profile-container').innerHTML = displayDrewCard(character[id]))
                        .then(() => removeProfileContainerClass())                      
})
