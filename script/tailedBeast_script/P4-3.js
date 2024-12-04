const tailedBeasts = 'https://narutodb.xyz/api/tailed-beast'

document.querySelector('.draw-btn').addEventListener('click', () => {
   
    fetch1(tailedBeasts,'tailedBeasts').then(character =>  {
                                                            let id =  Math.floor(Math.random() * character.length)
                                                            document.getElementById('profile-container').innerHTML = displayDrewCard(character[id])
                                                        })
                                        .then(() => removeProfileContainerClass())                      
    })
