//'https://narutodb.xyz/api/character?limit=1430'; //this link is dead
//render sidebar
const allChar = 'https://dattebayo-api.onrender.com/characters?limit=1430'

const target = 'characters';
fetch1(allChar,target).then(character => {
    character.sort((a, b) => a.id - b.id) // sort the sequence by id 
    renderSidebar(character)//renderSidebar.js
}) 



//display
function display(id) {
    //console.log(id)
    fetch_id(id,target).then(character => {//console.log(character); //the character's node                               
                                document.querySelector('.container').innerHTML = sending(character) //PX-2_display.js
                            })
                    .then(() =>remedyImg2()) //remedy.js               
    }


//all 3 funcs from PX-2_display.js
//display the character(search bar)
clickSearchIcon(target) 
enterSeacrhIcon(target) 

//clear the display when clicking 'x'
clearSearchBar()