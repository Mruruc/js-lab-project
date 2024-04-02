import { createForm, createInput, createLabel } from "../lib/dom-helper.js";

function register(){
    const form=createForm([{name:'autocomplete',value:'On'}]);

    const label=createLabel({forAttrValue:'firstName',labelInnerText:'First Name'});
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
    const input=createInput([{name:'type',value:'text'},{name:'id',value:'firstName'},{name:'name',value:'firstName'}]);
    form.appendChild(input);

    form.appendChild(document.createElement('br'));

    const lastNameLabel=createLabel({forAttrValue:'lastName',labelInnerText:'Last Name'});
    form.appendChild(lastNameLabel);
    form.appendChild(document.createElement('br'));
    const lastNameInput=createInput([{name:'type',value:'text'},{name:'id',value:'lastName'},{name:'name',value:'lastName'}]);
    form.appendChild(lastNameInput);

    form.appendChild(document.createElement('br'));

    const dobLabel=createLabel({forAttrValue:'dob',labelInnerText:'Date Of Birth'});
    form.appendChild(dobLabel);
    form.appendChild(document.createElement('br'));
    const dobInput=createInput([{name:'type',value:'date'},{name:'id',value:'dob'},{name:'name',value:'dateOfBirth'}]);
    form.appendChild(dobInput);

    form.appendChild(document.createElement('br'));

    const emailLabel=createLabel({forAttrValue:'email',labelInnerText:'Email'});
    form.appendChild(emailLabel);
    form.appendChild(document.createElement('br'));
    const emailInput=createInput([{name:'type',value:'email'},{name:'id',value:'email'},{name:'name',value:'email'}]);
    form.appendChild(emailInput);

    form.appendChild(document.createElement('br'));

    const phoneLabel=createLabel({forAttrValue:'phone',labelInnerText:'Phone'});
    form.appendChild(phoneLabel);
    form.appendChild(document.createElement('br'));
    const phoneInput=createInput([{name:'type',value:'phone'},{name:'id',value:'phone'},{name:'name',value:'phone'}]);
    form.appendChild(phoneInput);

    form.appendChild(document.createElement('br'));

    const passwordLabel=createLabel({forAttrValue:'password',labelInnerText:'Password'});
    form.appendChild(passwordLabel);
    form.appendChild(document.createElement('br'));
    const passwordInput=createInput([{name:'type',value:'password'},{name:'id',value:'password'},{name:'name',value:'password'}]);
    form.appendChild(passwordInput);

    form.appendChild(document.createElement('br'));
    const submit=createInput([{name:'type',value:'submit'},{name:'value',value:'Register'}]);
    form.appendChild(submit);

    return form;
}


export default register;