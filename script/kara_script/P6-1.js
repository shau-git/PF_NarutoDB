/*
import {remedyImg2} from '../scripts/remedy.js'
import {remedyImg} from '../scripts/data.js'
import {fetch1,printObject} from '../scripts/render.js'
*/


const allKara = 'https://narutodb.xyz/api/kara?limit=32'
fetch1(allKara,'kara').then(character => {
                                        const html = printObject(character)
                                        /*if (character[6]['jutsu'].status === 404) {
                                            console.log('calling remedy')
                                        }*/
                                        document.querySelector('.container').innerHTML = html      
                            })
                            .then(() => console.log('completed'));