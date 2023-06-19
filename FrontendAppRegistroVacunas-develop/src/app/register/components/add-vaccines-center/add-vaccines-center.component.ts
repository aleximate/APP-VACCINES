import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VaccinesCenter } from 'src/app/models/VaccinesCenter';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-vaccines-center',
  templateUrl: './add-vaccines-center.component.html',
  styleUrls: ['./add-vaccines-center.component.scss']
})
export class AddVaccinesCenterComponent implements OnInit {
  vaccinesCenter:VaccinesCenter = new VaccinesCenter();

  constructor(
    private service:ServicesService,
    private router:Router
  ){

  }
  ngOnInit(
  ): void {}

  saveVaccinesCenter(){
    this.service.saveVaccinesCenter(this.vaccinesCenter).subscribe({
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
    this.router.navigate(['/centros']);
  }

  onSubmitForm(){
    console.log(this.vaccinesCenter);
    this.saveVaccinesCenter();
  }
}
