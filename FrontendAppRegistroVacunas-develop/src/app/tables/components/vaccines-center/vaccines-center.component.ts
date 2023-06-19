import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VaccinesCenter } from 'src/app/models/VaccinesCenter';
import { ServicesService } from 'src/app/services/services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-vaccines-center',
  templateUrl: './vaccines-center.component.html',
  styleUrls: ['./vaccines-center.component.scss']
})
export class VaccinesCenterComponent {
  vaccinesCenter:VaccinesCenter[];

  constructor(
    private service:ServicesService,
    private router:Router
  ) {}


  ngOnInit(): void {
      this.getVaccinesCenter();
  }
  update(id:number){
    this.router.navigate(['/actualizar-centros',id]);
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
        this.service.deleteVaccinesCenter(id).subscribe(dato => {
          console.log(dato);
          this.getVaccinesCenter();
          swal(
            'Vacuna eliminada',
            'La vacuna ha sido eliminada con exito',
            'success'
          )
        })
      }
    })
  }


  private getVaccinesCenter(){
    this.service.getAllVaccinesCenter().subscribe(res=>
      {
        this.vaccinesCenter=res;
      })
  }

}
