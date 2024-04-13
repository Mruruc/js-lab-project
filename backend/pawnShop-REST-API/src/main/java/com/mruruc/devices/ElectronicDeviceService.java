package com.mruruc.devices;

import com.mruruc.devices.model.ElectronicDevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElectronicDeviceService {
    private ElectronicDeviceRepository repository;

    @Autowired
    public ElectronicDeviceService(ElectronicDeviceRepository repository) {
        this.repository = repository;

    }

    public List<ElectronicDevice> getAll(){
        return repository.findAll();
    }

    public List<ElectronicDevice> getDevices(Long accountId){
        return repository.findAllByAccount_AccountId(accountId);
    }

    public void addNewDevice(ElectronicDevice device){
        repository.save(device);
    }

}
