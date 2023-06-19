package com.project.AppRegistroVacunas.Repositories;


import com.project.AppRegistroVacunas.Models.VaccineDetail;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

@Repository
public interface VaccineDetailReposi extends CrudRepository<VaccineDetail, Integer> {
    @Query(value="from VaccineDetail ")
    List<VaccineDetail> findAll();

    @Modifying
    @Query(value="INSERT INTO VaccineDetail(date,place)"+
    "VALUES(:date,:place)")
    public void addVaccineDetail(
            @Param("date")Date date,
            @Param ("place")String place
            );

    @Query("from VaccineDetail va where va.id = :id")
    VaccineDetail findById(@Param("id") int id);

    @Modifying
    @Query(value = "UPDATE VaccineDetail SET date=:date,place=:place"+ " WHERE id=:id ")
    public  void updateVaccineDetail(@Param("id") int id,
                                     @Param("date") Date date,
                                     @Param("place") String place
                                     );
    @Modifying
    @Query(value = "delete  from VaccineDetail va where va.id =:id")
    public void deleteVaccineDetail (@Param("id")int id);




}
