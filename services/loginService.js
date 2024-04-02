
const url='http://localhost:8080/api/login';


async function login(user) {
    const userJson = JSON.stringify(user.toSerializableObject());
    console.log(userJson);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: userJson
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

export default login;