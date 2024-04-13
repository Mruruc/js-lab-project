import ElectronicDevice from "./ElectronicDevice.js";

class Tablet extends ElectronicDevice{
    constructor(IMEI,manufacturer,priceOfPledge,isMakePhoneCall){
        super(IMEI,manufacturer,priceOfPledge);
        this.isMakePhoneCall=isMakePhoneCall;//? 'Yes': 'No';
    }

    calculateSellingPrice(){
        return this.isMakePhoneCall ? this.priceOfPledge * 1.4 : this.priceOfPledge * 1.3;
    }
}

export default Tablet;

