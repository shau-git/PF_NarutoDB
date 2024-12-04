function displayDrewCard(character) {
    let profile = `<div class="image">`;
    if (remedyImg[character['id']]) {
        if (remedyImg[character['id']].length === 2){    
            profile += `<img src="${remedyImg[character['id']][0]}" alt="${character['name']}img 1">
                    <img src="${remedyImg[character['id']][1]}" alt="${character['name']}img 2">`
            
        }else {
        profile += `<img src="${remedyImg[character['id']]}" alt="${character['name']}">`
        }
        
    }
    else{
        if (character['images'].length > 1) {
            profile += `<img src="${character["images"][0]}" alt="${character['name']}img 1">
                    <img src="${character["images"][1]}" alt="${character['name']}img 2">`
        } else {
            profile += `<img src="${character["images"]}" alt="${character['name']}">`
            }
    }
    profile += `</div><h2 class="name">${character['name']}</h2>
                <div class="id"><strong>id:&nbsp;</strong>${character['id']}</div>`
    return profile
}




const profileContainer = document.getElementById('profile-container');
function removeProfileContainerClass() {
    if (document.getElementsByClassName('profile-container')) {
        profileContainer.classList.remove("profile-container");
        profileContainer.classList.add("drewProfile-container");
    }
}