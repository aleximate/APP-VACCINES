import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Vaccines } from 'src/app/models/Vaccines';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-vaccines',
  templateUrl: './update-vaccines.component.html',
  styleUrls: ['./update-vaccines.component.scss']
})
export class UpdateVaccinesComponent implements OnInit{
  id:number;
  vaccines:Vaccines= new Vaccines();
  constructor
  (private router:ActivatedRoute,
  private service:ServicesService,
  private route:Router){}

  ngOnInit(){
    this.id=this.router.snapshot.params['id'];

    this.service.getVaccinesById(this.id).subscribe(res=>{
      this.vaccines=res;
    })
  }

 onSubmit(){
  this.service.updateVaccines(this.id,this.vaccines).subscribe(res=>
    {
      this.goToVaccines();
    })
 }

 goToVaccines(){
  this.route.navigate(['/vacunas']);
 }
}
