package com.project.AppRegistroVacunas.ServiceImpl;


import com.project.AppRegistroVacunas.Models.VaccineDetail;
import com.project.AppRegistroVacunas.Repositories.VaccineDetailReposi;
import com.project.AppRegistroVacunas.Services.VaccineDetailService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class VaccineDetailServiceImpl implements VaccineDetailService {
    @Autowired
    VaccineDetailReposi vaccineDetailReposi;
    @Override
    public List<VaccineDetail> findAll(){
        return vaccineDetailReposi.findAll();
    }

    @Override
    @Transactional
    public String addVaccineDetail(VaccineDetail vaccineDetail) {
        Date date=vaccineDetail.getDate();
        String place=vaccineDetail.getPlace();

        vaccineDetailReposi.addVaccineDetail(date,place);
        try{
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

    @Override
    public VaccineDetail findById(int id) {
        return vaccineDetailReposi.findById(id);
    }

    @Override
    @Transactional
    public String updateVaccineDetail(VaccineDetail vaccineDetail, int id) {
        Date date=vaccineDetail.getDate();
        String place=vaccineDetail.getPlace();

        vaccineDetailReposi.updateVaccineDetail(id,date,place);
        try{
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }

    }

    @Override
    @Transactional
    public String deleteVaccineDetail(int id) {
        vaccineDetailReposi.deleteVaccineDetail(id);
        try {
            return "was removed successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

}
