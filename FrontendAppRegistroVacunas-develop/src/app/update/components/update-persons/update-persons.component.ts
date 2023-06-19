import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persons } from 'src/app/models/Persons';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-persons',
  templateUrl: './update-persons.component.html',
  styleUrls: ['./update-persons.component.scss']
})
export class UpdatePersonsComponent implements OnInit {
  dni:string;
  persons:Persons= new Persons();
  constructor
  (private router:ActivatedRoute,
  private service:ServicesService,
  private route:Router){}

  ngOnInit(){
    this.dni=this.router.snapshot.params['dni'];
    this.service.getPersonsById(this.dni).subscribe({
      next:(res)=>{
        this.persons=res;
      }
    })
  }

 onSubmit(){
  this.service.updatePersons(this.dni,this.persons).subscribe(res=>
    {
      this.goToPersons();
    })
 }

 goToPersons(){
  this.route.navigate(['/personas']);
 }
}

