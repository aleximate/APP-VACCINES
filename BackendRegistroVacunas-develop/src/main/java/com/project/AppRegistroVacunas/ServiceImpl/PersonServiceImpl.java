package com.project.AppRegistroVacunas.ServiceImpl;

import com.project.AppRegistroVacunas.Models.Persons;
import com.project.AppRegistroVacunas.Repositories.PersonRepository;
import com.project.AppRegistroVacunas.Services.PersonService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
@Service
public class PersonServiceImpl implements PersonService {
    @Autowired
    PersonRepository personRepository;

    @Override
    public List<Persons> findAll() {

        return personRepository.findAll();
    }

    @Override
    @Transactional
    public String addPerson(Persons persons) {
        String dni=persons.getDni();
        String name=persons.getName();
        String lastname=persons.getLastname();
        String email=persons.getEmail();
        String job=persons.getJob();
       Date birthday=persons.getBirthday();
       String nationality=persons.getNationality();
        char sex=persons.getSex();
        personRepository.addPerson(dni,name,lastname,email,job,birthday,nationality,sex);

        try {
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }

    }


    @Override
    public Persons findById(String dni){

        return personRepository.findById(dni);
    }

    @Override
    @Transactional
    public String updatePerson(Persons persons, String dni) {
        String name=persons.getName();
        String lastname=persons.getLastname();
        String email=persons.getEmail();
        String job=persons.getJob();
        Date birthday=persons.getBirthday();
        String nationality=persons.getNationality();
        char sex=persons.getSex();
       personRepository.updatePerson(dni,name,lastname,email,job,birthday,nationality,sex);
        try {
            return "the operation was successful";
        }catch (Error e){
            return e.getMessage();
        }

    }

    @Override
    @Transactional
    public String deletePerson(String dni) {

        personRepository.deletePerson(dni);
        try {
            return "was removed successful";
        }catch (Error e){
            return e.getMessage();
        }

    }


}
