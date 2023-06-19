package com.project.AppRegistroVacunas.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.util.Date;
@Entity
@Table(name="Persons")
public class Persons {

    @Id
    @Column(name="id",length = 8)
    private String dni;
    @Column(name="name",nullable = false, length = 20)
    private String name;
    @Column(name="last_name",nullable = false, length = 20)
    private String lastname;
    @Column(name="email",nullable = false, length = 30)
    private String email;
    @Column(name="job",nullable = false, length = 20)
    private String job;
    @Column(name="birthday",nullable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthday;

    @Column(name="nationality",nullable = false, length = 20)
    private String nationality;
    @Column(name="sex")
    private char sex;

    public Persons() {

    }

    public Persons(String dni, String name, String lastname, String email, String job, Date birthday, String nationality, char sex) {
        this.dni = dni;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.job = job;
        this.birthday = birthday;
        this.nationality = nationality;
        this.sex = sex;
    }



    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public char getSex() {
        return sex;
    }

    public void setSex(char sex) {
        this.sex = sex;
    }
}
