package com.project.AppRegistroVacunas.Controllers;

import com.project.AppRegistroVacunas.Models.Persons;
import com.project.AppRegistroVacunas.Models.VaccinationCenter;
import com.project.AppRegistroVacunas.Services.VaccinationCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/api/vaccinationCenter/v0")
public class VaccinationCenterController {

    @Autowired
    private VaccinationCenterService vaccinationCenterService;

    public VaccinationCenterController (VaccinationCenterService vaccinationCenterService ){
        this.vaccinationCenterService = vaccinationCenterService;
    }

    @GetMapping("/vaccinationCenter")
    public  List<VaccinationCenter> findAll(){

        return vaccinationCenterService.findAll();
    }

    @PostMapping("/vaccinationCenter")
    @ResponseBody
    public String save (@RequestBody VaccinationCenter vaccinationCenter){
        return vaccinationCenterService.addVaccinationCenter(vaccinationCenter);
    }
    @GetMapping("/vaccinationCenter/{id}")
    @ResponseBody
    public VaccinationCenter findID(@PathVariable int id){
        return vaccinationCenterService.findById(id);
    }

    @PutMapping("/vaccinationCenter/{id}")
    @ResponseBody
    public String update(@RequestBody VaccinationCenter vaccinationCenter, @PathVariable int id){
        return vaccinationCenterService.updateVaccinationCenter(vaccinationCenter,id);
    }

    @DeleteMapping("/vaccinationCenter/{id}")
    @ResponseBody
    public String update(@PathVariable int id){

        return vaccinationCenterService.deleteVaccinationCenter(id);
    }


}
