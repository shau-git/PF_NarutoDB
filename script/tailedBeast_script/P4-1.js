
/*import {remedyImg2} from '../scripts/remedy.js'
import {remedyImg} from '../scripts/data.js'
import {fetch1,printObject} from '../scripts/render.js'
*/

//'https://narutodb.xyz/api/tailed-beast' //'tailedBeasts'
const tailedBeasts = 'https://dattebayo-api.onrender.com/tailed-beasts?12'

fetch1(tailedBeasts,'tailed-beasts').then(character => {                                                   
                                                const html = printObject(character)
                                                /*if (character[6]['jutsu'].status === 404) {
                                                    console.log('calling remedy')
                                                }*/
                                                document.querySelector('.container').innerHTML = html      
                            })
                            .then(() => document.querySelector('[data-char-id="771"] li').innerHTML = `<img src="https://static.wikia.nocookie.net/naruto/images/0/0a/Nibi_mural.png">Matatabi's wall mural inside the Falls of Truth.`)
                            .then(() => console.log('completed'));