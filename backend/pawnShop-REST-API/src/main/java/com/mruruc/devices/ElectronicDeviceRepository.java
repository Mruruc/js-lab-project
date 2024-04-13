package com.mruruc.devices;

import com.mruruc.devices.model.ElectronicDevice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElectronicDeviceRepository extends JpaRepository<ElectronicDevice,Long> {

    List<ElectronicDevice> findAllByAccount_AccountId(Long accountId);


}
