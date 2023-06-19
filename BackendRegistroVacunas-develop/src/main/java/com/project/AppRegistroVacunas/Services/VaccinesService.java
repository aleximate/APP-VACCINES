package com.project.AppRegistroVacunas.Services;

import com.project.AppRegistroVacunas.Models.Vaccines;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface VaccinesService {

    List<Vaccines> findAll();
    String addVaccines (Vaccines vaccines);
    Vaccines findById(int id);
    String updateVaccines(Vaccines vaccines, int id);
    String deleteVaccines(int id);

}
