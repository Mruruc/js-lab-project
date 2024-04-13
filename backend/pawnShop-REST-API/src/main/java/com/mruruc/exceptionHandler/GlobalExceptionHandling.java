package com.mruruc.exceptionHandler;

import com.mruruc.exception.EmailAddressAlreadyExist;
import com.mruruc.exception.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandling {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlerForUserNotFoundAndIncorrectPassword(UserNotFoundException ex){
        ErrorResponse errorResponse=
                new ErrorResponse(HttpStatus.UNAUTHORIZED, ex.getMessage(), LocalDateTime.now());

        return new ResponseEntity<>(errorResponse,HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(EmailAddressAlreadyExist.class)
    public ResponseEntity<ErrorResponse> handlerForDuplicateEmailAddress(EmailAddressAlreadyExist ex){
        ErrorResponse errorResponse=
                new ErrorResponse(HttpStatus.BAD_REQUEST, ex.getMessage(), LocalDateTime.now());

        return new ResponseEntity<>(errorResponse,HttpStatus.BAD_REQUEST);
    }
}
