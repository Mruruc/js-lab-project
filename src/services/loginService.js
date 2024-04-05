

export async function login(user) {
    const url='http://localhost:8080/api/login';
    const userJson = JSON.stringify(user.toSerializableObject());

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: userJson
        });
        
        if (!response.ok) {
            const errorData=await response.json();
            throw new Error(`${errorData.message} ${response.status}`);
        }
      
        const account = await response.json();
        return account; 

    } catch (error) {
        throw error;
    }
}



export async function logout(){

    const url='http://localhost:8080/api/logout';
    const request=new Request(url,{
        method:'POST',
        credentials:'include'
    });

   try{
        const result=await fetch(request);
        if(result.ok){
            const data=await result.json();
            return data;
        }
        throw new Error(`Error:${result.status}`);
   }catch(err){
        throw new Error(err);
   }
}