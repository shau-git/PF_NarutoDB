/*import {remedyImg2} from '../scripts/remedy.js'
import {remedyImg} from '../scripts/data.js'
import {fetch1,printObject} from '../scripts/render.js'*/





const allChar = 'https://narutodb.xyz/api/character?limit=1430'
fetch1(allChar,'characters').then(character => {
                                                const html = printObject(character)
                                                document.querySelector('.container').innerHTML = html      
                            })
                            .then(() =>remedyImg2())
                            .then(() => console.log('completed'));

                           
                            
const soundsId = ['music-1','music-2','music-3','music-4','music-5']                           
                            

                            
