import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Persons } from 'src/app/models/Persons';
import { ServicesService } from 'src/app/services/services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  persons:Persons=new Persons();
  dni:string;

  constructor(
    private router:Router,
    private service:ServicesService){

  }
  ngOnInit(): void {

  }



  buscar(){
    this.service.getPersonsById(this.persons.dni).subscribe(res=>{
        if(res){
          this.router.navigate(['/detalle de usuario',this.persons.dni])
        }else{
          swal({
            title: 'EL DNI NO EXISTE',
            text: "ESCRIBA UN DNI QUE SI ESTE REGISTRADO",
            type: 'warning',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            buttonsStyling: true
          })
        }
      }
    )
  }
}


