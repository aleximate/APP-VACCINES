package com.project.AppRegistroVacunas.Services;

import com.project.AppRegistroVacunas.Models.Persons;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface PersonService {

    List<Persons> findAll();
    String addPerson(Persons persons);
    Persons findById(String dni);
    String updatePerson(Persons persons, String dni);
    String deletePerson(String dni);
}
