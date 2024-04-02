
class ElectronicDevice{

    constructor(IMEI,manufacturer,priceOfPledge){
        this.IMEI=IMEI;
        this.manufacturer=manufacturer;
        this.priceOfPledge=priceOfPledge;
        //this.isAllowedSale=false;
        //this.isSold=false;
    }

    calculateSellingPrice(){
        return 0.0;
    }

}

export default ElectronicDevice;