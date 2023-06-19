package com.project.AppRegistroVacunas.Controllers;


import com.project.AppRegistroVacunas.Models.Persons;
import com.project.AppRegistroVacunas.Repositories.PersonRepository;
import com.project.AppRegistroVacunas.Services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons/v0")
public class PersonController {

    @Autowired
     private PersonService personService;

    public PersonController(PersonService personService) {

        this.personService = personService;
    }


    @GetMapping("/persons")
    public List<Persons> findAll(){
        return personService.findAll();
    }

    @PostMapping("/persons")
    @ResponseBody
    public String save(@RequestBody Persons persons){

     return personService.addPerson(persons);
    }

    @GetMapping("/persons/{dni}")
    @ResponseBody
    public Persons findId(@PathVariable String dni){

        return personService.findById(dni);
    }


    @PutMapping("/persons/{dni}")
    @ResponseBody
    public String update(@RequestBody Persons persons,@PathVariable String dni){
        return personService.updatePerson(persons,dni);
    }

    @DeleteMapping("/persons/{dni}")
    @ResponseBody
    public String update(@PathVariable String dni){
        return personService.deletePerson(dni);
    }




}
