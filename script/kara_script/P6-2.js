//'https://narutodb.xyz/api/kara?limit=32';

//render sidebar
const allKara = 'https://dattebayo-api.onrender.com/kara?limit=32'
const target = 'kara';

fetch1(allKara,target).then(character => renderSidebar(character))


//display
function display(id) {
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