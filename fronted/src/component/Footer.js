import { creatEElement } from "../lib/dom-helper.js";

const footer=()=>{
    const footer=document.createElement('footer');

    const a=creatEElement('a','©Mr.Uruc',null,null,{name:'href',value:'https://github.com/Mruruc'});
    a.style.color='black';
    footer.appendChild(a);

    footer.style.position='fixed';
    footer.style.bottom=0;
    footer.style.left=0;
    footer.style.right=0;
    footer.style.height='2rem';
    footer.style.textAlign='center';
    footer.style.paddingTop='7px';
    footer.style.backgroundColor='#b4b7b4';

    return footer;
}

export default footer;