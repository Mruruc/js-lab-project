package com.mruruc.client;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mruruc.account.Account;
import jakarta.persistence.*;

import java.time.LocalDate;
@Entity
@Table(name="clients",uniqueConstraints = {
        @UniqueConstraint(name = "uniqueEmail",columnNames = "email")
})
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,generator = "client_id_generator")
    @SequenceGenerator(name = "client_id_generator",allocationSize = 1)
    private Long clientId;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    @Column(nullable = false,unique = true)
    private String email;
    private String phone;
    @Column(nullable = false)
    private String password;
    @OneToOne(mappedBy = "client",fetch = FetchType.LAZY)
    @JsonIgnore
    private Account account;

    public Client(){}
    public Client(String firstName, String lastName,
                  LocalDate dob, String email, String phone,
                  String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    @Override
    public String toString() {
        return "Client{" +
                "clientId=" + clientId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
