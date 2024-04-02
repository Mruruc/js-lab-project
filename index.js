import { creatEElement } from "./lib/dom-helper.js";
import createFooter from './lib/footer.js';
import register from "./view/register.js";
import Client from "./model/Client.js";
import { saveClient } from "./services/clientServices.js";
import loginForm from "./view/login.js";
import login from "./services/loginService.js";
import User from "./model/User.js";

const root=document.getElementById('root');

//header

const header=creatEElement('header',null,'header');

const logo=creatEElement('h2','PawnShop','logo');
header.appendChild(logo);

const home=creatEElement('h4');
home.appendChild(creatEElement('a','Home',null,null,{name:'href',value:'./index.html'}));
header.appendChild(home);

//register button
const registerButton=creatEElement('button','Register','btn');
header.appendChild(registerButton);

// Login button
const loginButton=creatEElement('button','Log in','btn');
header.appendChild(loginButton);

root.appendChild(header);


//main
const main=creatEElement('main',null,'main');
//main.appendChild(creatEElement('div','Main Page'));
root.appendChild(main);

// clear form function
let form;
const clearForm=()=>form &&  main.removeChild(form);


// register form:
registerButton.addEventListener('click',function(){
    clearForm();
    form=register();
    main.appendChild(form);
    form.addEventListener('submit',async(event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);
        const client=new Client(
            formData.get('firstName'),formData.get('lastName'),
            formData.get('dateOfBirth'),
            formData.get('email'),formData.get('phone'),formData.get('password')
        );
       
        const getAccount=await saveClient(client);
        window.location.href =`./view/account.html?accountId=${getAccount.accountId}&clientName=${getAccount.clientName}&balance=${getAccount.balance}`;
    });
});



//login form
loginButton.addEventListener('click',()=>{
    clearForm();
    form=loginForm();
    main.appendChild(form);

    form.addEventListener('submit',async (event)=>{
        event.preventDefault();
        const formData=new FormData(event.target);

        const removeErrorMessage=()=>document.querySelector('.error') &&  document.querySelector('.error').remove();
        
        try{
            const getAccount= await login(
                new User(null,formData.get('userName'),formData.get('password'))
            );
            removeErrorMessage();
            window.location.href =`./view/account.html?accountId=${getAccount.accountId}&clientName=${getAccount.clientName}&balance=${getAccount.balance}`;
        }catch(error){
            const p=creatEElement('p',`${error.message}`,'error');
            root.appendChild(p);
        }
    });
});


// footer
const footer=createFooter();
root.appendChild(footer);


