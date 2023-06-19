package com.project.AppRegistroVacunas.ServiceImpl;

import com.project.AppRegistroVacunas.Models.Vaccines;
import com.project.AppRegistroVacunas.Repositories.VaccinesRepository;
import com.project.AppRegistroVacunas.Services.VaccinesService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class VaccinesServiceImpl implements VaccinesService {

    @Autowired
    VaccinesRepository vaccinesRepository;

    @Override
    public List<Vaccines> findAll(){
        return vaccinesRepository.findAll();
    }

    @Override
    @Transactional
    public String addVaccines(Vaccines vaccines) {
        String name=vaccines.getName();
        String madeIn=vaccines.getMadeIn();
        String madeBy=vaccines.getMadeBy();
        String againstTo=vaccines.getAgainstTo();
        Date creationDate=vaccines.getCreationDate();
        Date dueDate=vaccines.getDueDate();

        vaccinesRepository.addVaccines(name,madeIn,madeBy,againstTo,creationDate,dueDate);

        try {
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

    @Override
    public Vaccines findById(int id) {
        return  vaccinesRepository.findById(id);
    }


    @Override
    @Transactional
    public String updateVaccines(Vaccines vaccines, int id) {
        String name=vaccines.getName();
        String madeIn=vaccines.getMadeIn();
        String madeBy=vaccines.getMadeBy();
        String againstTo=vaccines.getAgainstTo();
        Date creationDate=vaccines.getCreationDate();
        Date dueDate=vaccines.getDueDate();

        vaccinesRepository.updateVaccine(id,name,madeIn,madeBy,againstTo,creationDate,dueDate);
        try {
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

    @Override
    @Transactional
    public String deleteVaccines(int id) {
        vaccinesRepository.deleteVaccine(id);
        try {
            return "was removed successful";
        }catch (Error e){
            return e.getMessage();
        }
    }

}
