import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VaccinesCenter } from 'src/app/models/VaccinesCenter';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-update-vaccines-center',
  templateUrl: './update-vaccines-center.component.html',
  styleUrls: ['./update-vaccines-center.component.scss']
})
export class UpdateVaccinesCenterComponent implements OnInit{
  id:number;
  vaccinesCenter:VaccinesCenter= new VaccinesCenter();
  constructor
  (private router:ActivatedRoute,
  private service:ServicesService,
  private route:Router){}

  ngOnInit(){
    this.id=this.router.snapshot.params['id'];

    this.service.getVaccinesCenterById(this.id).subscribe(res=>{
      this.vaccinesCenter=res;
    })
  }

 onSubmit(){
  this.service.updateVaccinesCenter(this.id,this.vaccinesCenter).subscribe(res=>
    {
      this.goToVaccinesCenter();
    })
 }

 goToVaccinesCenter(){
  this.route.navigate(['/centros']);
 }
}

