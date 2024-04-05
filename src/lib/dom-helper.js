  export function creatEElement(elementName,innerTEXT,className,id,attribute){
    const element=document.createElement(elementName);
    if(innerTEXT){
        element.appendChild(document.createTextNode(innerTEXT));
    }
    if(className){
        element.className=className;
    }
    if(id){
        element.id=id;
    }
    if(attribute){
        element.setAttribute(attribute.name,attribute.value);
    }
    return element;
}


 export function createForm(attributes){
    const form=document.createElement('form');
    if(attributes){
        for(let attribute of attributes){
            form.setAttribute(attribute.name,attribute.value);
        }
    }
    return form;
}


 export function createLabel({forAttrValue,labelInnerText}){
    const label=document.createElement('label');
    label.setAttribute('for',forAttrValue);
    label.appendChild(document.createTextNode(labelInnerText));
    return label;
}

 export function createInput(attributes){
    const input=document.createElement('input');
    for(let attribute of attributes){
        input.setAttribute(attribute.name,attribute.value);
    }
    input.setAttribute('required','');
    return input;
}

 export function createTable(headers,electronicDevices) {
    //table
    const table=document.createElement('table');
    // thead
    const thead=document.createElement('thead');
    const tableRowHeader=tableRow();
    thead.appendChild(tableRowHeader);
    for(let header of headers){
        let th=createHeader(header);
        tableRowHeader.appendChild(th);
    }
    table.appendChild(thead);

    // tbody
    const tbody=document.createElement('tbody');
    for(let device of electronicDevices){
        let tr=tableRow();
        for(let prop in device){
            let td=document.createElement('td');
            td.appendChild(document.createTextNode(device[prop]));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    return table;
}

export function createSelectTag(attributes,options){
    const select=document.createElement('select');

    for(const attribute of attributes){
        select.setAttribute(attribute.name,attribute.value);
    }

    for(let option of options){
       select.appendChild(createOption(option));
    }
    return select;
}

function createOption(value){
    const option=document.createElement('option');
    option.setAttribute('value',value);
    option.appendChild(document.createTextNode(value));
    return option;
}

function tableRow(){
    return document.createElement('tr');
}

function createHeader(header){
    let th=document.createElement('th');
    th.appendChild(document.createTextNode(header));
    return th;
}

