package com.project.AppRegistroVacunas.Services;


import com.project.AppRegistroVacunas.Models.VaccinationCenter;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public interface VaccinationCenterService {

    List<VaccinationCenter> findAll();
    String addVaccinationCenter (VaccinationCenter vaccinationCenter);
    VaccinationCenter findById(int id);
    String updateVaccinationCenter (VaccinationCenter vaccinationCenter, int id);
    String deleteVaccinationCenter (int id);
}
