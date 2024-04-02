class User{
    #userId;
    #userName;
    #password;
   // #clientId

    constructor(userId,userName,password){
        this.#userId=userId;
        this.#userName=userName;
        this.#password=password;
       // this.#clientId=clientId;
    }
    getUserId(){
        return this.#userId;
    }

    getUserName(){
        return this.#userName;
    }

    getPassword(){
        return this.#password;
    }

    setUserId(userId){
        this.#userId=userId;
    }

    setUserName(userName){
        this.#userName=userName;
    }

    setPassword(password){
        this.#password=password;
    }

    /*
    getClientId(){
        return this.#clientId;
    }

    setClientId(clientId){
        this.#clientId=clientId;
    }
    clientId=${this.#clientId}\n 
    */

    toSerializableObject(){
        return {
            userId: this.#userId,
            userName: this.#userName,
            password: this.#password
        };
    }
    
    getUser(){
        return `User={\n userId=${this.#userId}\n userName=${this.#userName}\n password=${this.#password}\n}`;
    }

}
export default User;