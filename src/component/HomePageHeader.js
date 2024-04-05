import { creatEElement } from "../lib/dom-helper.js";

const homePageHeader=()=>{
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

    // register form:
    registerButton.addEventListener('click',function(){
       window.location.href="./register.html";
    });

    // Login button
    const loginButton=creatEElement('button','Log in','btn');
    header.appendChild(loginButton);

    loginButton.addEventListener('click',()=>{
        window.location.href='./login.html';
    });

    return header;
}

export default homePageHeader;