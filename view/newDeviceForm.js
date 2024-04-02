import { creatEElement, createForm, createInput, createLabel, createSelectTag } from "../lib/dom-helper.js";

export function newDeviceForm(){
    const form=createForm([{name:'autocomplete',value:'On'}]);

    const isTabletOrPhoneLabel=createLabel({forAttrValue:'isPhoneOrTablet',labelInnerText:'Is Phone Or Tablet ?'});
    form.appendChild(isTabletOrPhoneLabel);
    form.appendChild(document.createElement('br'));
    const select=createSelectTag([{name:'name',value:'deviceType'},{name:'id',value:'isPhoneOrTablet'}],['Phone','Tablet']);
    form.appendChild(select);
    form.appendChild(document.createElement('br'));


    function removve(element1,element2){
        form.removeChild(element1);
        form.removeChild(element2);
    }
    
    function test(forAttributeValue,labelValue,nameValue){
        const referenceNode=select.nextSibling;
       
        const labelElement=document.querySelector(`label[for='${forAttributeValue}']`);
        const inputElement=document.getElementById(forAttributeValue);

        form.insertBefore(document.createElement('br'),referenceNode);
    
        const label=createLabel({forAttrValue: forAttributeValue,labelInnerText:labelValue});
        form.insertBefore(label,referenceNode);
        
        form.insertBefore(document.createElement('br'),referenceNode);
        
        const input=createInput([{name:'type',value:'text'},{name:'id',value:forAttributeValue},{name:'name',value:nameValue}]);
        form.insertBefore(input,referenceNode);

       
    }
     test('5G','is Support 5G ?','isSupport5G') ;
    select.addEventListener('change',()=>{
        let flag = select.value;

        flag == 'Tablet' && test('isMakePhoneCall','is Make Phone Call ?','isMakePhoneCall');
      //  flag == 'Phone' &&  test('5G','is Support 5G ?','isSupport5G') ;
        

        //if (flag == 'Tablet') test('isMakePhoneCall', 'is Make Phone Call ?', 'isMakePhoneCall');
       // else if (flag == 'Phone') test('5G', 'is Support 5G ?', 'isSupport5G');
                           
    });

    const imeiLabel=createLabel({forAttrValue:'imei',labelInnerText:'IMEI'});
    form.appendChild(imeiLabel);
    form.appendChild(document.createElement('br'));
    const imeiInput=createInput([{name:'type',value:'text'},{name:'id',value:'imei'},{name:'name',value:'IMEI'}]);
    form.appendChild(imeiInput);
    form.appendChild(document.createElement('br'));

    const manufacturerLabel=createLabel({forAttrValue:'manufacturer',labelInnerText:'Manufacturer'});
    form.appendChild(manufacturerLabel);
    form.appendChild(document.createElement('br'));
    const manufacturerInput=createInput([{name:'type',value:'text'},{name:'id',value:'manufacturer'},{name:'name',value:'manufacturer'}]);
    form.appendChild(manufacturerInput);
    form.appendChild(document.createElement('br'));

    const priceOfPledgeLabel=createLabel({forAttrValue:'priceOfPledge',labelInnerText:'Price Of Pledge'});
    form.appendChild(priceOfPledgeLabel);
    form.appendChild(document.createElement('br'));
    const priceOfPledgeInput=createInput([{name:'type',value:'money'},{name:'id',value:'priceOfPledge'},{name:'name',value:'priceOfPledge'}]);
    form.appendChild(priceOfPledgeInput);
    form.appendChild(document.createElement('br'));


    const submit=createInput([{name:'type',value:'submit'},{name:'value',value:'Add'}]);
    form.appendChild(submit);
    form.appendChild(document.createElement('br'));

    return form;
}