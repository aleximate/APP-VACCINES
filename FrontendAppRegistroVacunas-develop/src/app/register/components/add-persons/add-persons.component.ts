import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persons } from 'src/app/models/Persons';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-add-persons',
  templateUrl: './add-persons.component.html',
  styleUrls: ['./add-persons.component.scss']
})
export class AddPersonsComponent implements OnInit{
  persons:Persons= new Persons();

  constructor(
    private service:ServicesService,
    private router:Router
  ){

  }
  ngOnInit(
  ): void {}

  saveVaccines(){
    this.service.savePersons(this.persons).subscribe({
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
    this.router.navigate(['/personas']);
  }

  onSubmitForm(){
    console.log(this.persons);
    this.saveVaccines();
  }


}
