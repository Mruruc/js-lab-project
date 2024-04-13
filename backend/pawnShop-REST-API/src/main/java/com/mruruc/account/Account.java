package com.mruruc.account;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mruruc.client.Client;
import com.mruruc.devices.model.ElectronicDevice;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "account_id_generator")
    @SequenceGenerator(name = "account_id_generator",allocationSize = 1)
    private Long accountId;
    private Double balance;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="client_id",unique = true,nullable = false)
    @JsonIgnore
    private Client client;
    @OneToMany(mappedBy = "account")
    private List<ElectronicDevice> devices;

    public Account(){}
    public Account(Double balance, Client client) {
        this.balance = balance;
        this.client = client;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountId=" + accountId +
                ", balance=" + balance +
                ", client=" + client +
                '}';
    }
}
