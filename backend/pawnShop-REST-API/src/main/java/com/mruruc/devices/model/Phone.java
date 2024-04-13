package com.mruruc.devices.model;

import com.mruruc.account.Account;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue(value ="Phone")
public class Phone extends ElectronicDevice {
    private boolean isSupport5G;

    public Phone(){}
    public Phone(Long IMEI,String manufacturer, Double priceOfPledge, Account account, boolean isSupport5G) {
        super(IMEI,manufacturer, priceOfPledge,account);
        this.isSupport5G = isSupport5G;
    }
    public Phone(Long IMEI, String manufacturer, Double priceOfPledge,boolean isSupport5G) {
        super(IMEI, manufacturer, priceOfPledge);
        this.isSupport5G = isSupport5G;
    }

    public boolean isSupport5G() {
        return isSupport5G;
    }

    public void setSupport5G(boolean support5G) {
        isSupport5G = support5G;
    }


    @Override
    public String toString() {
        return "Phone{" +
                "  IMEI=" + getIMEI() +
                ", manufacturer='" + getManufacturer() + '\'' +
                ", priceOfPledge=" + getPriceOfPledge() +
                ", allowedSale=" + isAllowedSale() +
                ", sold=" + isSold() +
                ", isSupport5G=" + isSupport5G +
                '}';
    }


}
