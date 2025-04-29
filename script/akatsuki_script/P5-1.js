//import {fetch1,printObject} from '../scripts/render.js'
//'https://narutodb.xyz/api/akatsuki?limit=44'

const akaAll = 'https://dattebayo-api.onrender.com/akatsuki?limit=44'

fetch1(akaAll,'akatsuki').then(character => {
                                                character.sort((a, b) => a.id - b.id) // sort the sequence by id     
                                                const html = printObject(character) ////render.js
                                                document.querySelector('.container').innerHTML = html      
                            })
                            .then(() => console.log('completed'));