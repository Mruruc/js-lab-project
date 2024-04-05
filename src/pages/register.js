import footer from "../component/Footer.js";
import loginRegisterHeader from "../component/LoginRegisterHeader.js";
import { creatEElement } from "../lib/dom-helper.js";
import Client from '../model/Client.js';
import {saveClient} from '../services/clientServices.js';
import register from "../component/RegisterForm.js";


// root
const root=document.getElementById('rootRegister');

// header
const header=loginRegisterHeader();
root.append(header);


//main
const main=creatEElement('main',null,'main');
root.appendChild(main);

//login link
const loginLink=creatEElement('a','Already have an account? Log in',null,null,{name:'href',value:'./login.html'});
main.appendChild(loginLink);

// form
const form=register();
main.appendChild(form);

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const formData=new FormData(event.target);
    const client=new Client(formData.get('firstName'),formData.get('lastName'),
        formData.get('dateOfBirth'),formData.get('email'),formData.get('phone'),formData.get('password')
    );
    const removeErrorMessage=()=>document.querySelector('.error') &&  document.querySelector('.error').remove();

    
    saveClient(client)
    .then((getAccount)=>{
        window.location.href =`./app/index.html?accountId=${getAccount.accountId}&clientName=${getAccount.clientName}&balance=${getAccount.balance}`;
    }).catch((err)=>{
        removeErrorMessage();
        main.appendChild(creatEElement('p',err.message,'error'));
    });
});


root.appendChild(footer());