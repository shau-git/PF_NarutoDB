async function fetch_name(name,target) {
     
    let reqOptions = {
        method: 'GET',
        url: `https://dattebayo-api.onrender.com/${target}/${id}`,
        headers: {
            accept: 'application/json'
        }
    };
   
    // Wait for the API response to complete
    //let response = await axios.request(reqOptions);
    let response;
    try{
        response  = await axios.request(reqOptions);
    } catch {
        alert('No character found! Try inputing the exact name.');
        return;
    } 
    
    let data = response.data; // Get the first character's data

    return new Promise((resolve, reject) => {
        resolve(data)      
    }) ;
}
