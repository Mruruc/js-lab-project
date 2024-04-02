
export async function getData(accountId){
    const url=`http://localhost:8080/api/device/${accountId}`;
    const request=new Request(url,{
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    }
   });
   try{
    const result=await fetch(request);

    if(result.status === 200){
        const data=await result.json();
        return data;
    }

    throw new Error(`HTTP error! status: ${response.status}`);

   }catch(err){
    throw new Error(err.message);
   }
}


export async function addDevice(device,accountId){
    const jsonDevice=JSON.stringify(device);

    const url=`http://localhost:8080/api/device/${accountId}`;
    const request=new Request(url,{
    method:'post',
    headers:{
        'Content-Type':'application/json'
    },
    body:jsonDevice
    }
   );
   try{
    const result=await fetch(request);

    if(result.status === 200){
        const data=await result.json();
        return data;
    }
    
    throw new Error(`HTTP error! status: ${result.status}`);

   }catch(err){
    throw new Error(err.message);
   }

}