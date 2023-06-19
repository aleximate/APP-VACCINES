import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaccines } from 'src/app/models/Vaccines';
import { ServicesService } from 'src/app/services/services.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-vaccine-table',
  templateUrl: './vaccine-table.component.html',
  styleUrls: ['./vaccine-table.component.scss']
})
export class VaccineTableComponent implements OnInit{
  vaccines:Vaccines[];

  constructor(
    private service:ServicesService,
    private router:Router
  ) {}


  ngOnInit(): void {
      this.getVaccines();
  }
  update(id:number){
    this.router.navigate(['/actualizar-vacuna',id]);
  }
  delete(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la vacuna",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.service.deleteVaccines(id).subscribe(dato => {
          console.log(dato);
          this.getVaccines();
          swal(
            'Vacuna eliminada',
            'La vacuna ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }


  private getVaccines(){
    this.service.getAllVaccines().subscribe(res=>
      {
        this.vaccines=res;
      })
  }

}
