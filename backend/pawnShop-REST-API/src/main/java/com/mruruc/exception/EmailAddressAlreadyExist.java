package com.mruruc.exception;

public class EmailAddressAlreadyExist extends RuntimeException {
    public EmailAddressAlreadyExist(String message) {
        super(message);
    }
}
