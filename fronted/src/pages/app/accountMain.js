import { creatEElement, createTable} from "../../lib/dom-helper.js";
import { newDeviceForm } from "./newDeviceForm.js";
import { getDevices,addDevice, getDevicesByAccountId } from "../../services/accountService.js";
import Tablet from '../../model/devices/Tablet.js'
import Phone from '../../model/devices/Phone.js'


const accountMain=async(account)=>{
    // main 
    const main=creatEElement('main',null,'account-main');

    // leftDiv
    const leftDiv=creatEElement('div',null,'left-div');

    const greetUser=creatEElement('h1',`Hello ${account.clientName}👋`);
    leftDiv.appendChild(greetUser);

    const bal=creatEElement('p',`Your Balance: ${account.balance}.0 PLN`,'balance');
    leftDiv.appendChild(bal);
    
    //new device
    const addDeviceBtn=creatEElement('button','Add Device','add-device-btn');
    leftDiv.appendChild(addDeviceBtn);

    addDeviceBtn.addEventListener('click',()=>{
        leftDiv.removeChild(addDeviceBtn);
        const form=newDeviceForm();
        leftDiv.appendChild(form);

        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            const formData=new FormData(event.target);
            let device=constructDevice(formData.get('deviceType'), formData.get('IMEI'),formData.get('manufacturer'),formData.get('priceOfPledge'));
            
            device && addDevice({...device,type:formData.get('deviceType')},account.accountId);
        
            leftDiv.removeChild(form);
            leftDiv.appendChild(addDeviceBtn);
        });
    });

    main.appendChild(leftDiv);


    // right div
    const rightDiv=creatEElement('div',null,'right-div');
    //tables
    getDevicesByAccountId(account.accountId)
    .then((data)=>{
        //table of the phones
        const phone=tableOfElectronicDevice(data.phones,'Phones');
        rightDiv.appendChild(phone);
        //table of the tablets
        const tablet=tableOfElectronicDevice(data.tablets,'Tablets');
        rightDiv.appendChild(tablet);
    })
    .catch((err)=>{
        console.error(err);
    });

    main.appendChild(rightDiv);


    return main;
}

function tableOfElectronicDevice(data,h3Header){
    const main=creatEElement('div');
    main.appendChild(creatEElement('h3',h3Header));
    
    const headerPhone = data.length > 0 ? Object.keys(data[0]) : [];
    const tableOfPhone=createTable(headerPhone,data);
    main.appendChild(tableOfPhone);
    
    return main;
}

function constructDevice(deviceType,IMEI,manufacturer,priceOfPledge){
    let device;
    switch(deviceType){
        case 'Phone':device=new Phone(IMEI,manufacturer,priceOfPledge,true);
        break;
        case 'Tablet': device=new Tablet( IMEI,manufacturer,priceOfPledge,false);
        break;
    }
    return device;
}

export default accountMain;


