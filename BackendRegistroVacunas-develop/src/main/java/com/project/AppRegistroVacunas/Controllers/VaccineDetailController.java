package com.project.AppRegistroVacunas.Controllers;

import com.project.AppRegistroVacunas.Models.VaccineDetail;
import com.project.AppRegistroVacunas.Services.VaccinationCenterService;
import com.project.AppRegistroVacunas.Services.VaccineDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/VaccineDetail/v0")
public class VaccineDetailController {
    @Autowired
    private VaccineDetailService vaccineDetailService;

    public VaccineDetailController (VaccineDetailService vaccineDetailService){
        this.vaccineDetailService = vaccineDetailService;
    }
    @GetMapping("/vaccineDetail")
    public List<VaccineDetail> findAll(){
        return vaccineDetailService.findAll();
    }
    @PostMapping("/vaccineDetail")
    @ResponseBody
    public String save (@RequestBody VaccineDetail vaccineDetail){
        return vaccineDetailService.addVaccineDetail(vaccineDetail);
    }
    @GetMapping("/vaccineDetail/{id}")
    @ResponseBody
    public  VaccineDetail findID(@PathVariable int id){
        return vaccineDetailService.findById(id);
    }
    @PutMapping("/vaccineDetail/{id}")
    @ResponseBody
    public String update (@RequestBody VaccineDetail vaccineDetail, @PathVariable int id){
        return vaccineDetailService.updateVaccineDetail(vaccineDetail,id);
    }
    @DeleteMapping ("/vaccineDetail/{id}")
    @ResponseBody
    public String update(@PathVariable int id){
        return vaccineDetailService.deleteVaccineDetail(id);
    }

}






