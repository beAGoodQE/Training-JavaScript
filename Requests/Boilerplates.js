// fetch GET

//.then() has 2 callback functions, 1 to handle resolved promise, 1 for error
fetch('http://api-to-call.com/endpoint').then(response => { // sends request
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!'); // handles error
}, networkError => console.log(networkError.message) // handles error
).then(jsonResponse => { //handles success...

});

// fetch POST

fetch('http://api-to-call.com/endpoint', {  // sends request
    method: 'POST',                         // sends request
    body: JSON.stringify({id: '200'})       // sends request
}).then(response => {
    if (response.ok) {                      // converts response object to JSON
        return response.json();
    }
    throw new Error('Request failed!');     // handles errors
}, networkError => console.log(networkError.message)
).then(jsonResponse => {                    // handles success
    // code to execute jsonResponse
});

// async await GET

const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint'); // sends request

        if (response.ok) {                                  // handles response if successful
            const jsonResponse = await response.json();     // same
            // Code to execute with jsonResponse    
        }
        throw new Error('Request Failed!');                 // handles reponse if failed
        } catch (error) {
            console.log(error);
        }
}

// async await POST

const getData2 = async () => {
    try { // sends request
        const response = await fetch('https://api-to-call.com/endpoint', {
            method : 'POST',
            body : JSON.stringify({id : 200})
        })

        if (response.ok) {                                  // handles response if successful
            const jsonResponse = await response.json();     // same
            // Code to execute with jsonResponse    
        }
        throw new Error('Request Failed!');                 // handles reponse if failed
        } catch (error) {
            console.log(error);
        }
}