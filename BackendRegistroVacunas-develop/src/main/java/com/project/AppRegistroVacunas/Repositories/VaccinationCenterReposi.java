package com.project.AppRegistroVacunas.Repositories;

import com.project.AppRegistroVacunas.Models.VaccinationCenter;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VaccinationCenterReposi extends CrudRepository<VaccinationCenter,Integer> {
    @Query(value = "from VaccinationCenter ")
    List<VaccinationCenter> findAll();


    @Modifying
    @Query (value = "INSERT INTO VaccinationCenter (name,address)" + "VALUES(:name, :address)" )
    public void addVaccinationCenter (
            @Param("name") String name,
            @Param("address")String address
    );
    @Query("from VaccinationCenter v where v.id  = :id")
    VaccinationCenter findById(@Param("id") int id);

    @Modifying
    @Query (value = "UPDATE  VaccinationCenter SET name=:name, address=:address " + " WHERE id=:id" )
    public void updateVaccinationCenter(
            @Param("id") int id,
            @Param("name") String name,
            @Param("address")String address
    );

    @Modifying
    @Query(value= "delete from VaccinationCenter v where v.id =:id ")
    public  void deleteVaccinationCenter(@Param("id") int id);




}
