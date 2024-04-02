import Account from "../model/Account.js";
import Client from "../model/Client.js";
import User from "../model/User.js";
import Phone from "../model/devices/Phone.js";
import Tablet from "../model/devices/Tablet.js";

export const users=[
    new User('john_doe@gmail.com','password',1)
];
export const clients=[
    new Client(1,'John','Doe',new Date(),'john_doe@gmail.com','+48456123789')
];

export const devices=[
    new Phone(672364724,'Apple',1299.99,true),
    new Phone(476698661,'Xiaomi',899.99,false),
    new Tablet(267467642,'Apple',456.33,true),
    new Tablet(643276763,'Samsung',333.33,false)
];

export const accounts=[
    new Account(12400,1,1860.65,devices)
];
