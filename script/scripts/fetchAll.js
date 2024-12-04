async function fetch1(link,key) {
    
    let reqOptions = {
        method: 'GET',
        url: link,
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

    let data = response.data[key]; // Get the first character's data

    return new Promise((resolve, reject) => {
        resolve(data)
    }) ;
}

// Use async/await to handle th