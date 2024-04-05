import { creatEElement } from "../lib/dom-helper.js";


const loginRegisterHeader=()=>{
    //header

    const header=creatEElement('header',null,'header');

    const logo=creatEElement('h2','PawnShop','logo');
    header.appendChild(logo);

    logo.addEventListener('click',()=>{
        window.location.href='./index.html';
    });

    return header;
}

export default loginRegisterHeader;