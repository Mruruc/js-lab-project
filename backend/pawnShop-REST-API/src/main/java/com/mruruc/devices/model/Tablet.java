package com.mruruc.devices.model;

import com.mruruc.account.Account;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue(value = "Tablet")
public class Tablet extends ElectronicDevice {
    private boolean isMakePhoneCall;

    public Tablet() {}

    public Tablet(Long IMEI,String manufacturer, Double priceOfPledge, Account account, boolean isMakePhoneCall) {
        super(IMEI,manufacturer, priceOfPledge,account);
        this.isMakePhoneCall = isMakePhoneCall;
    }
    public Tablet(Long IMEI, String manufacturer, Double priceOfPledge,boolean isMakePhoneCall) {
        super(IMEI, manufacturer, priceOfPledge);
        this.isMakePhoneCall = isMakePhoneCall;
    }

    public boolean isMakePhoneCall() {
        return isMakePhoneCall;
    }

    public void setMakePhoneCall(boolean makePhoneCall) {
        isMakePhoneCall = makePhoneCall;
    }

    @Override
    public String toString() {
        return "Tablet{" +
                ", IMEI=" + getIMEI() +
                ", manufacturer='" + getManufacturer() + '\'' +
                ", priceOfPledge=" + getPriceOfPledge() +
                ", allowedSale=" + isAllowedSale() +
                ", sold=" + isSold() +
                ", isMakePhoneCall=" + isMakePhoneCall +
                '}';
    }
}
