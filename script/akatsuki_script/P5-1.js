
//import {fetch1,printObject} from '../scripts/render.js'

const akaAll = 'https://narutodb.xyz/api/akatsuki?limit=44'
fetch1(akaAll,'akatsuki').then(character => {
                                                const html = printObject(character)
                                                document.querySelector('.container').innerHTML = html      
                            })
                            .then(() => console.log('completed'));