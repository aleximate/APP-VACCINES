package com.project.AppRegistroVacunas.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "VaccineDetail")
public class VaccineDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;
    @Column(name="date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;
    @Column(name="place")
    private String place;
    @ManyToOne
    private Vaccines vaccines;
    @ManyToOne
    private VaccinationCenter vaccinationCenter;
    @ManyToOne
    private Persons persons;


    public VaccineDetail() {

    }

    public VaccineDetail(Date date, String place) {
        this.date = date;
        this.place = place;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Vaccines getVaccines() {
        return vaccines;
    }

    public void setVaccines(Vaccines vaccines) {
        this.vaccines = vaccines;
    }

    public VaccinationCenter getVaccinationCenter() {
        return vaccinationCenter;
    }

    public void setVaccinationCenter(VaccinationCenter vaccinationCenter) {
        this.vaccinationCenter = vaccinationCenter;
    }

    public Persons getPersons() {
        return persons;
    }

    public void setPersons(Persons persons) {
        this.persons = persons;
    }
}
