package com.mruruc.devices;

import com.mruruc.account.Account;
import com.mruruc.account.AccountService;
import com.mruruc.devices.model.ElectronicDevice;
import com.mruruc.devices.model.Phone;
import com.mruruc.devices.model.Tablet;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/device")
public class ElectronicDeviceController {
    private ElectronicDeviceService service;
    private AccountService accountService;
    public ElectronicDeviceController(ElectronicDeviceService service,AccountService accountService){
        this.service=service;
        this.accountService=accountService;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping(path= "/",produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String,List<ElectronicDevice>> getAllDevices(){
        List<ElectronicDevice> devices = service.getAll();
        List<ElectronicDevice> phones = new ArrayList<>();
        List<ElectronicDevice> tablets = new ArrayList<>();

        for (ElectronicDevice device : devices) {
            if (device instanceof Phone) {
                phones.add(device);
            } else if (device instanceof Tablet) {
                tablets.add(device);
            }
        }

        Map<String, List<ElectronicDevice>> map = new HashMap<>();
        map.put("phones", phones);
        map.put("tablets", tablets);

        return map;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping(path= "/{accountId}",produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String,List<ElectronicDevice>> getAllByAccountId(@PathVariable Long accountId){
        List<ElectronicDevice> devices = service.getDevices(accountId);
        List<ElectronicDevice> phones = new ArrayList<>();
        List<ElectronicDevice> tablets = new ArrayList<>();

        for (ElectronicDevice device : devices) {
            if (device instanceof Phone) {
                phones.add(device);
            } else if (device instanceof Tablet) {
                tablets.add(device);
            }
        }

        Map<String, List<ElectronicDevice>> map = new HashMap<>();
        map.put("phones", phones);
        map.put("tablets", tablets);

        return map;
    }



    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping(path = "/{accountId}",consumes = MediaType.APPLICATION_JSON_VALUE)
    public HttpStatus addDevice(@PathVariable Long accountId , @RequestBody ElectronicDevice electronicDevice){
        Optional<Account> account=accountService.getAccountById(accountId);
        electronicDevice.setAccount(account.get());
        service.addNewDevice(electronicDevice);
        return HttpStatus.CREATED;
    }
}
