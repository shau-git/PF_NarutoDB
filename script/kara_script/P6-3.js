const allKara = 'https://narutodb.xyz/api/kara?limit=32'

document.querySelector('.draw-btn').addEventListener('click', () => {
    let id =  Math.floor(Math.random() *  1430) //0 <= x < 1430
   
    fetch1(allKara,'kara').then(character =>  {
                                            let id =  Math.floor(Math.random() * character.length)
                                            document.getElementById('profile-container').innerHTML = displayDrewCard(character[id])
                                        })
                        .then(() => removeProfileContainerClass())                      
    })
