const akaAll = 'https://narutodb.xyz/api/akatsuki?limit=44'

document.querySelector('.draw-btn').addEventListener('click', () => {
    //let id =  Math.floor(Math.random() * character.length) //0 <= x < 1430
   
    fetch1(akaAll,'akatsuki').then(character => {
                                                let id =  Math.floor(Math.random() * character.length)
                                                document.getElementById('profile-container').innerHTML = displayDrewCard(character[id])
                                            })
                            .then(() => removeProfileContainerClass())                      
})
