import { logout } from "../services/loginService.js";
import { creatEElement } from "../lib/dom-helper.js";

const appHeader=()=>{

    const header=creatEElement('header',null,'header');

    const logo=creatEElement('h2','PawnShop','logo');
    header.appendChild(logo);

    logo.addEventListener('click',()=>{
        window.location.href="../index.html";
    });
    
    //log out button
    const logOutBtn=creatEElement('button','Log out','log-out-btn');
    header.appendChild(logOutBtn);
    // log out
    logOutBtn.addEventListener('click',async()=>{
        try{
            const result=await logout();
            window.location.href="../index.html";
        }
        catch(err){
            throw new Error(err);

        }
    });

    return header;

}


export default appHeader;