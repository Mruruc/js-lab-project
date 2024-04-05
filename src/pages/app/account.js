
import footer from '../../component/Footer.js';
import appHeader from "../../component/AppHeader.js";
import accountMain from "./accountMain.js";

async function account(accountData={clientName:'',accountId:0,balance:0.0}){
    
    //root
    const root=document.getElementById('rootAccount');

    //header
    const header=appHeader();
    root.appendChild(header);


    //main
    accountMain(accountData)
    .then((main)=>{
        root.appendChild(main);
    })
    .catch((err)=>{
        console.error(err);
    });

    //footer
    root.appendChild(footer());

    return root;
}



const searchParam=new URLSearchParams(window.location.search);

account({
    clientName:searchParam.get('clientName'),
    accountId:searchParam.get('accountId'),
    balance:searchParam.get('balance')
});