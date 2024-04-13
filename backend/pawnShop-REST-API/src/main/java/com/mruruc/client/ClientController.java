package com.mruruc.client;


import com.mruruc.account.Account;
import com.mruruc.account.AccountDTO;
import com.mruruc.account.AccountService;
import com.mruruc.user.User;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api")
public class ClientController {
    private ClientService clientService;
    private AccountService accountService;

    @Autowired
    public ClientController(ClientService clientService,AccountService accountService) {
        this.clientService = clientService;
        this.accountService=accountService;
    }

    @GetMapping
    public List<Client> getClients(){
        return clientService.getAll();
    }
    @GetMapping("/accounts")
    public List<Account> getAccounts(){
        return accountService.getAllAccounts();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping(path = "/register", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AccountDTO> register(@RequestBody Client client) {
       Client savedClient= clientService.saveClient(client);
        Account account = accountService.createAccount(new Account(0.0, savedClient));
        return new ResponseEntity<>
                (new AccountDTO(account.getAccountId(),account.getClient().getFirstName(),account.getBalance()),
                        HttpStatus.CREATED);
    }


    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping(path = "/login",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<AccountDTO> login(@RequestBody User user){
        Client client=clientService.getClientByEmail(user);
        AccountDTO accountDTO= accountService.getAccount(client);
        return new ResponseEntity<>(accountDTO,HttpStatus.OK);
    }

    @CrossOrigin(origins ="http://127.0.0.1:5500",allowCredentials = "true")
    @PostMapping("/logout")
    public ResponseEntity<Map<String,String>> logOut(HttpServletRequest request) {
      request.getSession().invalidate();
      Map<String, String> response=new HashMap<>();
      response.put("message","Logged out successfully");
      return ResponseEntity.ok(response);
    }


}
