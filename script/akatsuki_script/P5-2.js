//render sidebar
const akaAll = 'https://narutodb.xyz/api/akatsuki?limit=44';
const target = 'akatsuki';

fetch1(akaAll,target).then(character => renderSidebar(character))


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