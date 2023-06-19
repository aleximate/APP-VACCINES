package com.project.AppRegistroVacunas.Controllers;

import com.project.AppRegistroVacunas.Models.Vaccines;
import com.project.AppRegistroVacunas.Services.VaccinesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/vaccines/v0")
public class VaccinesController {
    @Autowired
    private VaccinesService vaccinesService;

    public VaccinesController(VaccinesService vaccinesService){
        this.vaccinesService = vaccinesService;
    }
    @GetMapping("/vaccines")
    public List<Vaccines> findAll(){
        return vaccinesService.findAll();
    }

    @PostMapping("/vaccines")
    @ResponseBody
    public String addVaccines( @RequestBody Vaccines vaccines){
        return vaccinesService.addVaccines(vaccines);
    }

    @GetMapping("/vaccines/{id}")
    @ResponseBody
    public Vaccines findId(@PathVariable int id){
        return vaccinesService.findById(id);
    }

    @PutMapping("/vaccines/{id}")
    @ResponseBody
    public String update (@RequestBody Vaccines vaccines,@PathVariable int id){
        return vaccinesService.updateVaccines(vaccines,id);
    }
    @DeleteMapping("/vaccines/{id}")
    @ResponseBody
    public String deleteVaccines(@PathVariable int id){
        return vaccinesService.deleteVaccines(id);
    }


}



















