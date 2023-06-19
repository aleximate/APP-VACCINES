import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccines } from '../../../models/Vaccines';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-register-vaccines',
  templateUrl: './add-vaccines.component.html',
  styleUrls: ['./add-vaccines.component.scss']
})
export class RegisterVaccinesComponent implements OnInit {
  vaccines:Vaccines = new Vaccines();

  constructor(
    private service:ServicesService,
    private router:Router
  ){

  }
  ngOnInit(
  ): void {}

  saveVaccines(){
    this.service.saveVaccines(this.vaccines).subscribe({
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
    this.router.navigate(['/vacunas']);
  }

  onSubmitForm(){
    console.log(this.vaccines);
    this.saveVaccines();
  }


}

