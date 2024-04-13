package com.mruruc.devices.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.mruruc.account.Account;
import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "device_type",length = 10)
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = JsonTypeInfo.As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Phone.class,name="Phone"),
        @JsonSubTypes.Type(value = Tablet.class,name="Tablet")
})
public abstract class ElectronicDevice {
    @Id
    private Long IMEI;
    private String manufacturer;
    private Double priceOfPledge;

    private boolean isAllowedSale;
    private boolean isSold;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id",nullable = false)
    @JsonIgnore
    private Account account;

    public ElectronicDevice(){}

    public ElectronicDevice(Long IMEI, String manufacturer, Double priceOfPledge) {
        this.IMEI = IMEI;
        this.manufacturer = manufacturer;
        this.priceOfPledge = priceOfPledge;
        this.isAllowedSale = false;
        this.isSold = false;
    }

    public ElectronicDevice(Long IMEI,String manufacturer, Double priceOfPledge,Account account) {
        this.IMEI=IMEI;
        this.manufacturer = manufacturer;
        this.priceOfPledge = priceOfPledge;
        this.isAllowedSale = false;
        this.isSold = false;
        this.account=account;
    }

    @JsonProperty("IMEI")
    public Long getIMEI() {
        return IMEI;
    }

    @JsonProperty("IMEI")
    public void setIMEI(Long IMEI) {
        this.IMEI = IMEI;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public Double getPriceOfPledge() {
        return priceOfPledge;
    }

    public void setPriceOfPledge(Double priceOfPledge) {
        this.priceOfPledge = priceOfPledge;
    }

    public boolean isAllowedSale() {
        return isAllowedSale;
    }

    public void setAllowedSale(boolean allowedSale) {
        isAllowedSale = allowedSale;
    }

    public boolean isSold() {
        return isSold;
    }

    public void setSold(boolean sold) {
        isSold = sold;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
