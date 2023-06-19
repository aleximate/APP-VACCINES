import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { Persons } from '../models/Persons';

@Component({
  selector: 'app-shot-vaccine-detail',
  templateUrl: './shot-vaccine-detail.component.html',
  styleUrls: ['./shot-vaccine-detail.component.scss']
})
export class ShotVaccineDetailComponent implements OnInit{
  dni:string;
  persons:Persons= new Persons();
  constructor(
    private router:ActivatedRoute,
    private service:ServicesService,
  ){
  }
  ngOnInit(): void {
    this.dni=this.router.snapshot.params['dni'];
    this.service.getPersonsById(this.dni).subscribe({
      next:(res)=>{
        this.persons=res;
      }
    })
  }

}
