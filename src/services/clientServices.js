
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
            const errorData=await response.json();
            throw new Error(`${errorData.message}: ${response.status}`);
        }

        const account = await response.json(); // Parse the JSON response body
        return account; // Return the account object
    } catch (error) {
        throw error;
    }
}




 function removeClient(){}

 function updateClient(){}

 function getClients(){}

// deprecated :)
function generateId(){
    return (Math.random()*100).toFixed(0);
}

