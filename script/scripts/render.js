//import {remedyImg} from './data.js'
console.log('start')


function printObject(obj) {
    //key is the index
   
    let html = ``
    let profile = ``
    let isList = ` `

    for (let index in obj) {
       
        profile = `<div class="profile-container" data-char-id="${obj[index]['id']}">`
            
        // make sure the remedyImg(data.js) run first
        if (remedyImg[obj[index]['id']]) {
            if (remedyImg[obj[index]['id']].length === 2){    
                profile += `<img src="${remedyImg[obj[index]['id']][0]}" alt="${obj[index]['name']}img 1">
                        <img src="${remedyImg[obj[index]['id']][1]}" alt="${obj[index]['name']}img 2">`
                
            }else {
            profile += `<img src="${remedyImg[obj[index]['id']]}" alt="${obj[index]['name']}">`
            }
            
        }
        else{
            if (obj[index]['images'].length > 1) {
                profile += `<img src="${obj[index]["images"][0]}" alt="${obj[index]['name']}img 1">
                        <img src="${obj[index]["images"][1]}" alt="${obj[index]['name']}img 2">`
            } else {
                profile += `<img src="${obj[index]["images"]}" alt="${obj[index]['name']}">`
                }
            } 
        
        profile += `<h2>${obj[index]['name']}</h2>`;

        for (let datas in obj[index]) {
            if (Array.isArray(obj[index][datas])) { // jutsu: [ 'Shadow Arms' ]
                if (datas === 'images') {
                    continue;  
                } else {
                    isList =`<div><strong>${datas}</strong></div><ol class="ol">`
                    for(let i in obj[index][datas]) {
                        isList += `<li>${obj[index][datas][i]}</li>`
                        }  
                    isList += `</ol>`
                    profile += isList
                    isList = ``
                    continue;   
                }           
            }
            else if (typeof obj[index][datas] === 'object' && obj[index][datas] !== null) {
                profile += `<div class="info"><strong>${datas}</strong></div>`;
                for (let keys in obj[index][datas]) {
                    if (typeof obj[index][datas][keys] === 'object') {
                        profile += `<div class="info"><strong>${keys}</strong></div>`
                        loopObject(obj,index,datas,keys)                    //////////<=========
                    } else {
                        /*console.log(obj[index][datas][keys])*/
                        profile += `<div class="info">${keys}:&nbsp;${obj[index][datas][keys]}</div>`;
                    }        
                } 
            }
            else  {
                if (datas === 'name') {
                    continue
                } else {
                    profile += `<div class="info"><strong>${datas}:</strong> ${obj[index][datas]}</div>`;
                }
            } 
        }
        profile += `</div>` 
        html += profile
    }
       // profile =  ``
       function loopObject(obj, index, datas, keys) {
    
        if (Array.isArray(obj[index][datas][keys])) {
            isList = `<ol class="ol">`
            for(let i in obj[index][datas][keys]) {
                isList += `<li>${obj[index][datas][keys][i]}</li>`
                }       
            isList += `</ol>`
            profile += isList;
            isList = ``;
        }    
        else if (typeof obj[index][datas][keys] === 'object' && obj[index][datas][keys] !== null) {
            
            for (let key in obj[index][datas][keys]) {
                if (typeof obj[index][datas][keys][key] === 'object') {
                    
                    loopObject(obj[index][datas][keys][key])
                } else {
                
                    profile += `<div class="info">${key}: &nbsp; ${obj[index][datas][keys][key]}</div>`
                }        
            } 
        } else {
                profile += `<div class="info">${obj[index][datas][keys]} line 134</div>`
            }
        }
        //console.log(html)
        return html
    };




