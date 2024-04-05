import ElectronicDevice from "./ElectronicDevice.js";

class Phone extends ElectronicDevice{

    constructor(IMEI,manufacturer,priceOfPledge,isSupport5G=true){
        super(IMEI,manufacturer,priceOfPledge);
        this.isSupport5G=isSupport5G ;//? 'Yes' : 'No';
    }

    calculateSellingPrice(){
        const result=this.isSupport5G ? this.priceOfPledge * 1.2 : this.priceOfPledge * 1.1;
        return Math.round(result).toFixed(2);
    }
}
export default Phone;