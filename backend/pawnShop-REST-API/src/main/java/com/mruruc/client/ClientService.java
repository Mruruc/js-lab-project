package com.mruruc.client;

import com.mruruc.exception.EmailAddressAlreadyExist;
import com.mruruc.exception.UserNotFoundException;
import com.mruruc.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    private ClientRepository clientRepository;

    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    public Client saveClient(Client client){
       try{
           return clientRepository.save(client);
       }catch (DataIntegrityViolationException ex){
          throw new EmailAddressAlreadyExist("Provided email address is already exists! "+client.getEmail());
       }
    }

    public Client getClientByEmail(User user){
        Optional<Client> clientByEmail = clientRepository
                .findClientByEmail(user.getUserName());

        if(clientByEmail.isPresent()){
            if (user.getPassword().equals(clientByEmail.get().getPassword())){
                return clientByEmail.get();
            }
            throw new UserNotFoundException("Incorrect Password!");
        }
         throw new UserNotFoundException("Incorrect User Name!");
    }

    public List<Client> getAll(){
        return clientRepository.findAll();
    }


}
