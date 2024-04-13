
import footer from "../component/Footer.js";
import {login} from '../services/loginService.js';
import { creatEElement } from "../lib/dom-helper.js";
import User from "../model/User.js";
import loginRegisterHeader from "../component/LoginRegisterHeader.js";
import loginForm from "../component/LoginForm.js"; 



// root
const root=document.getElementById('rootLogin');

//header
const header=loginRegisterHeader();
root.appendChild(header);

//main
const main=creatEElement('main',null,'main');
root.appendChild(main);

const registerLink=creatEElement('a','Need an account? Register now',null,null,{name:'href',value:'./register.html'});
main.appendChild(registerLink);

const form=loginForm();
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
       getAccount ? 
       window.location.href =`./app/index.html?accountId=${getAccount.accountId}&clientName=${getAccount.clientName}&balance=${getAccount.balance}`
        : null;

    }catch(error){
        removeErrorMessage();
        const p=creatEElement('p',`${error.message}`,'error');
        root.appendChild(p);
    }
});



//footer
root.appendChild(footer());