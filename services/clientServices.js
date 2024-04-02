
const url='http://localhost:8080/api/register';

export async function saveClient(client) {
    const clientJson = JSON.stringify(client);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: clientJson 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const account = await response.json(); // Parse the JSON response body
        return account; // Return the account object
    } catch (error) {
        console.error("There was an error!", error);
    }
}




 function removeClient(){}

 function updateClient(){}

 function getClients(){}

// deprecated :)
function generateId(){
    return (Math.random()*100).toFixed(0);
}

