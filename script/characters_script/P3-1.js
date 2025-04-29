/*import {remedyImg2} from '../scripts/remedy.js'
import {remedyImg} from '../scripts/data.js'
import {fetch1,printObject} from '../scripts/render.js'*/


//https://dattebayo-api.onrender.com/characters?limit=3000
//https://narutodb.xyz/api/character?limit=1430


//to get the chracter id
//https://dattebayo-api.onrender.com/characters/142

const allChar = 'https://dattebayo-api.onrender.com/characters?limit=1430'
fetch1(allChar,'characters').then(character => {
                                                character.sort((a, b) => a.id - b.id) // sort the sequence by id                                                
                                                const html = printObject(character)  //render.js
                                                document.querySelector('.container').innerHTML = html      
                            })
                            .then(() =>remedyImg2()) //remedy.js
                            .then(() => console.log('completed'));

                           
                            
const soundsId = ['music-1','music-2','music-3','music-4','music-5']                           
                            

                            
