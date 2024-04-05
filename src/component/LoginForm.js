import { createForm,createInput,createLabel} from "../lib/dom-helper.js";

function loginForm(){
    const form=createForm();

    const userNameLabel=createLabel({forAttrValue:'userName',labelInnerText:'User Name'});
    form.appendChild(userNameLabel);
    form.appendChild(document.createElement('br'));
    const userNameInput=createInput([{name:'type',value:'text'},{name:'id',value:'userName'},{name:'name',value:'userName'}]);
    form.appendChild(userNameInput);

    form.appendChild(document.createElement('br'));

    const passwordLabel=createLabel({forAttrValue:'password',labelInnerText:'Password'});
    form.appendChild(passwordLabel);
    form.appendChild(document.createElement('br'));
    const passwordInput=createInput([{name:'type',value:'password'},{name:'id',value:'password'},{name:'name',value:'password'}]);
    form.appendChild(passwordInput);

    form.appendChild(document.createElement('br'));

    const submit=createInput([{name:'type',value:'submit'},{name:'value',value:'Log in'}]);
    form.appendChild(submit);
    
    return form;
}

export default loginForm;