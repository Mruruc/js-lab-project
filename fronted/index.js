import footer from "./src/component/Footer.js";
import homePageHeader from "./src/component/HomePageHeader.js";
import homePageMain from "./src/component/HomePageMain.js";

const root=document.getElementById('root');

//header
const header=homePageHeader();
root.appendChild(header);

//main

homePageMain()
.then((main)=>{
    root.appendChild(main);
})
.catch((err)=>{
    console.log(err.message);
})


// footer
root.appendChild(footer());


