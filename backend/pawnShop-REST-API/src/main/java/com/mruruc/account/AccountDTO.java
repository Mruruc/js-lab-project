package com.mruruc.account;

public class AccountDTO {
    private Long accountId;
    private String clientName;
    private Double balance;

    public AccountDTO(){}
    public AccountDTO(Long accountId,String clientName, Double balance) {
        this.accountId=accountId;
        this.clientName = clientName;
        this.balance = balance;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    @Override
    public String toString() {
        return "AccountDTO{" +
                "accountId=" + accountId +
                ", clientName='" + clientName + '\'' +
                ", balance=" + balance +
                '}';
    }
}
