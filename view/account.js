import { creatEElement, createTable } from "../lib/dom-helper.js";
import createFooter from "../lib/footer.js";
import { addDevice, getData } from "../services/accountService.js";
import { newDeviceForm } from "./newDeviceForm.js";
import Phone from "../model/devices/Phone.js";
import Tablet from "../model/devices/Tablet.js";

async function account(account={clientName:'',accountId:0,balance:0.0}){
    
    //main
    const root=document.getElementById('rootAccount');
    //header
    const header=creatEElement('header',null,'header');
    root.appendChild(header);

    const logo=creatEElement('h2','PawnShop','logo');
    header.appendChild(logo);
    
    const logOutBtn=creatEElement('button','Log out','log-out-btn');
    header.appendChild(logOutBtn);
    logOutBtn.addEventListener('click',()=>{

    });

    // main 
    const main=creatEElement('main',null,'account-main');

    // leftDiv
    const leftDiv=creatEElement('div',null,'left-div');

    const greetUser=creatEElement('h1',`Hello ${account.clientName}👋`);
    leftDiv.appendChild(greetUser);

    const bal=creatEElement('p',`Your Balance: ${account.balance}.0 PLN`,'balance');
    leftDiv.appendChild(bal);
    


    const addDeviceBtn=creatEElement('button','Add Device','add-device-btn');
    leftDiv.appendChild(addDeviceBtn);
    addDeviceBtn.addEventListener('click',()=>{
        leftDiv.removeChild(addDeviceBtn);
        const form=newDeviceForm();
        leftDiv.appendChild(form);

        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            const formData=new FormData(event.target);
            let device;
            switch(formData.get('deviceType')){
                case 'Phone':device=new Phone(
                    formData.get('IMEI'),
                    formData.get('manufacturer'),
                    formData.get('priceOfPledge'),
                    true
                );
                break;
                case 'Tablet': device=new Tablet(
                    formData.get('IMEI'),
                    formData.get('manufacturer'),
                    formData.get('priceOfPledge'),
                    false
                );
                break;
            }
            device && addDevice({...device,type:formData.get('deviceType')},accountId);
            
            leftDiv.removeChild(form);
            leftDiv.appendChild(addDeviceBtn);
        });
    });

    main.appendChild(leftDiv);

    //tables
    const rightDiv=creatEElement('div',null,'right-div');
    try{
        //table of the phones
        const data=await getData(accountId)
        const phone=tableOfElectronicDevice(data.phones,'Phones');
        rightDiv.appendChild(phone);
        //table of the tablets
        const tablet=tableOfElectronicDevice(data.tablets,'Tablets');
        rightDiv.appendChild(tablet);
    }catch(err){
        console.log(err.message);
    }

    //rightDiv.appendChild(creatEElement('div','hello'));


    main.appendChild(rightDiv);

    root.appendChild(main);

    const footer=createFooter();
    root.appendChild(footer);

    return root;
}

function tableOfElectronicDevice(data,h3Header){
    const main=creatEElement('div');
    main.appendChild(creatEElement('h3',h3Header));
    
    const headerPhone = data.length > 0 ? Object.keys(data[0]) : [];
    const tableOfPhone=createTable(headerPhone,data);
    main.appendChild(tableOfPhone);
    
    return main;
}


const searchParam=new URLSearchParams(window.location.search);
const clientName=searchParam.get('clientName');
const balance=searchParam.get('balance');
const accountId=searchParam.get('accountId');

account({clientName,accountId,balance});