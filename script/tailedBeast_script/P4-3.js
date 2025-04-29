const tailedBeasts = 'https://dattebayo-api.onrender.com/tailed-beasts'

document.querySelector('.draw-btn').addEventListener('click', () => {
   
    fetch1(tailedBeasts,'tailed-beasts').then(character =>  {
                                                            let id =  Math.floor(Math.random() * character.length)
                                                            document.getElementById('profile-container').innerHTML = displayDrewCard(character[id])
                                                        })
                                        .then(() => removeProfileContainerClass())                      
    })
