import { creatEElement, createTable} from "../lib/dom-helper.js"
import { getDevices } from "../services/accountService.js";


const homePageMain=async()=>{
    //main
    const main=creatEElement('main',null,'main');


    const container=creatEElement('div',null,'container');
    main.appendChild(container);

    getDevices()
    .then((devices)=>{
        // left table Phones
        const phonesTable=tableOfElectronicDevice(devices.phones,'Phones');
        container.appendChild(phonesTable);
    
        // right table tablets
        const tabletsPhone=tableOfElectronicDevice(devices.tablets,'Tablets');
        container.appendChild(tabletsPhone);

        const err= document.querySelector('.error');
    })
    .catch((err)=>{
        container.appendChild( creatEElement('p',err.message,'error'));
    });

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


export default homePageMain;