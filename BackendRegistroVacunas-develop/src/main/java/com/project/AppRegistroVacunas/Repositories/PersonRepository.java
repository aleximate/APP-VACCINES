package com.project.AppRegistroVacunas.Repositories;

import ch.qos.logback.core.net.server.Client;
import com.project.AppRegistroVacunas.Models.Persons;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PersonRepository extends CrudRepository<Persons,Integer> {

    @Query(value="from Persons")
    List<Persons> findAll();
    @Modifying
    @Query(value="INSERT INTO Persons(dni,name,lastname,email,job,birthday,nationality,sex) " +
            "VALUES(:dni,:name,:lastname,:email,:job,:birthday,:nationality,:sex)")
    public void addPerson(@Param("dni") String dni,
                          @Param("name") String name,
                          @Param("lastname") String lastname,
                          @Param("email") String email,
                          @Param("job") String job,
                          @Param("birthday") Date birthday,
                          @Param("nationality") String nationality,
                          @Param("sex") char sex
                          );


    @Query("from Persons p where p.dni = :dni")
    Persons findById(@Param("dni") String dni);

    @Modifying
    @Query(value="UPDATE Persons SET name=:name,lastname=:lastname,email=:email,job=:job,birthday=:birthday,nationality=:nationality,sex=:sex" +
            " WHERE dni=:dni")
    public void updatePerson(@Param("dni") String dni,
                             @Param("name") String name,
                             @Param("lastname") String lastname,
                             @Param("email") String email,
                             @Param("job") String job,
                             @Param("birthday") Date birthday,
                             @Param("nationality") String nationality,
                             @Param("sex") char sex
    );


    @Modifying
    @Query(value="delete from Persons p where p.dni =:dni")
    public void deletePerson(@Param("dni") String dni);

}
