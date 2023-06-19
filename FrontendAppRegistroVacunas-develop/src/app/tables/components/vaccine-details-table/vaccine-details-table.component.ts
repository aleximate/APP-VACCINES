import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persons } from 'src/app/models/Persons';
import { VaccinationCenter, VaccineDetail } from 'src/app/models/VaccineDetail';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-vaccine-details-table',
  templateUrl: './vaccine-details-table.component.html',
  styleUrls: ['./vaccine-details-table.component.scss']
})
export class VaccineDetailsTableComponent implements OnInit{
  vaccineDetails:VaccineDetail[];
  persons:Persons[];
  vaccinationCenter:VaccinationCenter[];

  constructor(
    private service:ServicesService,
    private router:Router
  ){

  }
  ngOnInit(): void {this.getVaccinesDetails();}

  update(id:number){
    this.router.navigate(['/actualizar-persona',id]);
  }
  getVaccinesDetails(){
    this.service.getAllVaccinesDetails().subscribe(res=>
      {
        this.vaccineDetails=res;
      }, error=>{
        console.error(error)
      });

  }


}
