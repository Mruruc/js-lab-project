package com.mruruc.account;

import com.mruruc.client.Client;
import com.mruruc.exception.AccountNotFoundExceptions;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    private AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> getAllAccounts(){
        return accountRepository.findAll();
    }
    public Account createAccount(Account account){
       return accountRepository.save(account);
    }

    public  AccountDTO getAccount(Client client){
        Optional<Account> account=accountRepository.findAccountByClient(client);
        if(account.isPresent()) {
            return new AccountDTO(account.get().getAccountId(), client.getFirstName(), account.get().getBalance());
        }
        throw new AccountNotFoundExceptions("Account Not Found!");
    }

    public Optional<Account> getAccountById(Long accountId){
        return accountRepository.findById(accountId);
    }

}
