async function fetch_id(id,target) {
     
    let reqOptions = {
        method: 'GET',
        url: `https://narutodb.xyz/api/${target}/${id}`,
        headers: {
            accept: 'application/json'
        }
    };
   
    // Wait for the API response to complete
    let response = await axios.request(reqOptions);
    
    if (!response) {
        console.log('invalid');
        return;
    }

    let data = response.data; // Get the first character's data

    return new Promise((resolve, reject) => {
        resolve(data)
    }) ;
}