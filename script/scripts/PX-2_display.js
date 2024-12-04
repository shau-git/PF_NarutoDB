


function sending(obj) {
    
    let html = ``
    let profile = ``
    let isList =` `
    
       
    profile = `<div class="profile-container" data-char-id="${obj['id']}">`
        
    if (remedyImg[obj['id']]) {
        if (remedyImg[obj['id']].length === 2){    
            profile += `<img src="${remedyImg[obj['id']][0]}" alt="${obj['name']}img 1">
                    <img src="${remedyImg[obj['id']][1]}" alt="${obj['name']}img 2">`
            
        }else {
        profile += `<img src="${remedyImg[obj['id']]}" alt="${obj['name']}">`
        }
        
    }
    else{
        if (obj['images'].length > 1) {
            profile += `<img src="${obj["images"][0]}" alt="${obj['name']}img 1">
                    <img src="${obj["images"][1]}" alt="${obj['name']}img 2">`
        } else {
            profile += `<img src="${obj["images"]}" alt="${obj['name']}">`
            }
        } 
    
    profile += `<h2>${obj['name']}</h2>`;

    for (let datas in obj) {
        if (Array.isArray(obj[datas])) { // jutsu: [ 'Shadow Arms' ]
            if (datas === 'images') {
                continue;  
            } else {
                isList =`<div class="section"><h3>${datas}</h3><ol class="ol">`
                for(let i in obj[datas]) {
                    isList += `<li>${obj[datas][i]}</li>`
                    }  
                isList += `</ol></div>`
                profile += isList
                isList = ``
                continue;   
            }           
        }
        else if (typeof obj[datas] === 'object' && obj[datas] !== null) {
            profile += `<div class="section"><h3>${datas}</h3></div>`;
            for (let keys in obj[datas]) {
                if (typeof obj[datas][keys] === 'object') {
                    profile += `<div class="section"><h3>${keys}</h3></div>`  
                    loopObject(obj,datas,keys)                    
                } else {
                    /*console.log(obj[index][datas][keys])*/
                    profile += `<div class="section"><span>${keys}:</span>&nbsp;${obj[datas][keys]}</div>`;
                }        
            } 
        }
        else  {
            if (datas === 'name') {
                continue
            } else {
                profile += `<div class="section-id"><strong>${datas}:</strong> ${obj[datas]} </div>`;
            }
        } 
    }
    profile += `</div>` 
    html += profile
    return html
       
    function loopObject(obj, datas, keys) {

    if (Array.isArray(obj[datas][keys])) {
        isList = `<div class="section"><ol class="ol">`
        for(let i in obj[datas][keys]) {
            isList += `<li>${obj[datas][keys][i]}</li>`
            }       
        isList += `</ol></div>`
        profile += isList;
        isList = ``;
    }    
    else if (typeof obj[datas][keys] === 'object' && obj[datas][keys] !== null) {
        
        for (let key in obj[datas][keys]) {
            if (typeof obj[datas][keys][key] === 'object') {
                
                loopObject(obj[datas][keys][key])
            } else {
            
                profile += `<div class="section"><span>${key}:</span> &nbsp; ${obj[datas][keys][key]}</div>`
            }        
        } 
    } else {
            profile += `<div class="section">${obj[datas][keys]}</div>`
        }
         //console.log(html)
    
    }
   
};





//display (search bar)

const userInput = document.querySelector('.search input');
function clickSearchIcon(target) {
    document.querySelector('.search svg').addEventListener('click', () => {
        if (userInput.value) {
            fetch_name(userInput.value,target).then(character => {;
                                                    try {
                                                       // console.log(character)
                                                        let found = sending(character)
                                                        document.querySelector('.container').innerHTML = found
                                                    } catch {
                                                        return
                                                    }})
                                              .then(() => remedyImg2())
        }
    })
}


//function when clicking 'Enter' in the search bar
function enterSeacrhIcon(target){
    document.querySelector('.search').addEventListener('keyup', (event) => {
        if (userInput.value && event.key === 'Enter') {
            fetch_name(userInput.value,target).then(character => {;
                                                    try {
                                                       // console.log(character)
                                                        let found = sending(character)
                                                        document.querySelector('.container').innerHTML = found
                                                    } catch {
                                                        return
                                                    }})
                                              .then(() => remedyImg2())
        }
    })
}

// function to clear the searchbar when clicking 'x'
function clearSearchBar() {
    document.querySelector('.search span').addEventListener('click', () => {
        document.querySelector('.search input').value = ''
    })
}
