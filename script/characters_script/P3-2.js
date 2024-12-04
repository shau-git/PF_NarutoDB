
//render sidebar
const allChar = 'https://narutodb.xyz/api/character?limit=1430';
const target = 'character';
fetch1(allChar,target +'s').then(character => renderSidebar(character))



//display
function display(id) {
    //console.log(id)
    fetch_id(id,target).then(character => {//console.log(character); //the character's node
                                document.querySelector('.container').innerHTML = sending(character)
                            })
                    .then(() =>remedyImg2())
                    //.then(() => console.log('completed'));
    }



//display the character(search bar)
clickSearchIcon(target)
enterSeacrhIcon(target)

//clear the display when clicking 'x'
clearSearchBar()