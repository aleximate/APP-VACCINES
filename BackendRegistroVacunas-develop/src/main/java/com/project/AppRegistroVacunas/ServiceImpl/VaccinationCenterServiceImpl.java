package com.project.AppRegistroVacunas.ServiceImpl;

import com.project.AppRegistroVacunas.Models.VaccinationCenter;
import com.project.AppRegistroVacunas.Repositories.VaccinationCenterReposi;
import com.project.AppRegistroVacunas.Services.VaccinationCenterService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class VaccinationCenterServiceImpl implements VaccinationCenterService {
    @Autowired
    VaccinationCenterReposi vaccinationCenterReposi;

    @Override
    public List<VaccinationCenter> findAll() {

        return vaccinationCenterReposi.findAll();
    }

    @Override
    @Transactional
    public String addVaccinationCenter(VaccinationCenter vaccinationCenter) {
        String name=vaccinationCenter.getName();
        String address=vaccinationCenter.getAddress();

        vaccinationCenterReposi.addVaccinationCenter(name,address);

        try{
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

    @Override
    public VaccinationCenter findById(int id) {

        return vaccinationCenterReposi.findById(id);
    }

    @Override
    @Transactional
    public String updateVaccinationCenter(VaccinationCenter vaccinationCenter,int id) {
        String name=vaccinationCenter.getName();
        String address=vaccinationCenter.getAddress();

        vaccinationCenterReposi.updateVaccinationCenter(id,name,address);

        try{
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

    @Override
    @Transactional
    public String deleteVaccinationCenter(int id) {

        vaccinationCenterReposi.deleteVaccinationCenter(id);
        try {
            return "was removed successful";
        }catch (Error e){
            return e.getMessage();
        }
    }
}














