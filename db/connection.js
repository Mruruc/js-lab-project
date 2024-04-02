const { Client }=require("pg");





const connection=new Client(config);

    async function establishConnection(){
       try{
          const con=await connection.connect();
       }catch(err){
        console.log('Database connection error: '+err);
        throw err;
       }

    }

    async function insertInto(input){
        await establishConnection();

        try{
          let result;
          switch(input.constructor.name){
            case 'Client': result=await insertIntoClient(input);
              break;
            case 'Account': result=await insertIntoAccount(input);
              break;
            default:
              throw new Error("UnSupported Operation.");  
          }

          return result;
        }
        catch(err){
            console.log('Query execution error!: '+ err);
        }
        finally{
          await closeConnection();
        }
    }

    async function closeConnection(){
      try{
        await connection.end();
        console.log('Connection Successfully Closed! ');
      }catch(err){
        console.log('Connection did not close!'+err);
      }
    }

    async function insertIntoAccount(account){
      const query=` 
      INSERT INTO accounts(client_id,balance)
      VALUES($1,$2)
      `;
     const result= await connection.query(query,[account.clientId,account.getBalance()]);
     return result.rows;
    }

    // takes the client object and save it to db.
    async function insertIntoClient(client){
      const query = `
      INSERT INTO clients(first_name, last_name, date_of_birth, email, phone)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING client_id;`;
      const result= await connection.query(query,
                   [client.firstName,client.lastName,client.dateOfBirth,client.email,client.phone]);
      return result.rows[0].client_id;         
    }

    module.exports=insertInto;