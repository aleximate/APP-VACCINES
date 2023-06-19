import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persons, VaccinationCenter, VaccineDetail } from 'src/app/models/VaccineDetail';
import { Vaccines } from 'src/app/models/Vaccines';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-vaccines-details',
  templateUrl: './add-vaccines-details.component.html',
  styleUrls: ['./add-vaccines-details.component.scss']
})
export class AddVaccinesDetailsComponent {
  vaccinesDetails:VaccineDetail = new VaccineDetail();
  vaccines:Vaccines[];
  vaccinesCenter:VaccinationCenter[];
  persons:Persons[];

  vaccine:string
  center:string
  person:string


  constructor(
    private service:ServicesService,
    private router:Router
  ){

  }
  ngOnInit(): void {
    this.getVaccines();
    this.getVaccinesCenter();
    this.getPersons();
    this.saveVaccinesDetails();
  }

  saveVaccinesDetails(){
    this.service.saveVaccinesDetails(this.vaccinesDetails).subscribe({
      next:(res)=>{
        if(res=="the operation was successful"){
          this.redirect();
        }else{
        }

      },error: () => {
        console.log("errores");
    }
  })

  }



  redirect(){
    this.router.navigate(['/detalle de vacuna']);
  }

  onSubmitForm(){
    console.log(this.vaccinesDetails);
    this.saveVaccinesDetails();
  }

  getVaccines(){
    this.service.getAllVaccines().subscribe(res=>
      {
        this.vaccines=res;
      })
  }

  getVaccinesCenter(){
    this.service.getAllVaccinesCenter().subscribe(res=>
      {
        this.vaccinesCenter=res;
      })
  }
  private getPersons(){
    this.service.getAllPersons().subscribe(res=>
      {
        this.persons=res;
      })
  }
}
