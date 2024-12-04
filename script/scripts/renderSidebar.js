/*
import {remedyImg2} from '../scripts/remedy.js'
import {remedyImg,sidebarData} from '../scripts/data.js'
import {fetch1,printObject} from '../scripts/render.js'
*/



document.querySelector('.toggle-btn').addEventListener('click', () => {
    //document.querySelector('.sidebar').style.display = 'none'
    document.querySelector('.search-btn').style.backgroundColor = 'red'
})
 



//hamburger
function openSidebar(){
    const sidebar = document.querySelector('.sidebar');
   sidebar.style.display = 'block'
}


// function when clicking dropdown button in sidebar(will show list of characters)
function toggleSubMenu(button) {
    if(button.nextElementSibling.style.display === 'block') {
        button.nextElementSibling.style.display = 'none';
        button.classList.toggle('rotate')
    } else {
        button.nextElementSibling.style.display = 'block';
        button.classList.toggle('rotate')
    }
}




function closeSidebar() {
    document.querySelector('.sidebar').style.display = 'none'
}





function renderSidebar(data) {
    let button = ``;
    let render = ``
    
    for (let i in sidebarData) {
        button += `<button class="dropdown-btn" onclick="toggleSubMenu(this)">
                        <span>${sidebarData[i][0]}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
                    </button>`
        
        if (Number(i) === 17 || Number(i)=== 24) {
            button += `<ul class="sub-menu">
                        <li>NA</li>
                        </ul>`
            
        } else {   
            button += addLi(data,sidebarData[i][1], sidebarData[i][2])
            //console.log(button)
        }
    }
    document.querySelector('ul').innerHTML += button;
    

    //if no characters found set the list to NA
    const submenu = document.querySelectorAll('.sub-menu');
     submenu.forEach(li => {
        if (!li.innerHTML) {
            li.innerHTML = '<li>NA</li>'
        }
     })

}



function addLi(data, start, end) {
    let submenu = `<ul class="sub-menu">`
    data.forEach( character => {
       
        
        for (let i = start; i <= end; i++) {
            //console.log(i)
            if (character['id'] === i) {
                submenu += `<li class="character-${i}" data-char-id=${i} onclick="display(${i})">${character['name']}</li>`
            } 
        }
    })
   // console.log(submenu)
    submenu += `</ul>`
    return submenu || `<ul class="sub-menu"><li>NA</li></ul>`
}





