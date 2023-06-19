import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persons } from 'src/app/models/Persons';
import { ServicesService } from 'src/app/services/services.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-persons-tables',
  templateUrl: './persons-tables.component.html',
  styleUrls: ['./persons-tables.component.scss']
})
export class PersonsTablesComponent implements OnInit{
  persons:Persons[];

  constructor(
    private service:ServicesService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getPersons();
  }

  update(dni:string){
    this.router.navigate(['/actualizar-persona',dni]);
  }
  delete(dni:string){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar a esta persona",
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
        this.service.deletePersons(dni).subscribe({
          next:(res)=>{
          console.log(res);
          this.getPersons();
          swal(
            'Persona eliminada',
            'La persona ha sido eliminada con exito',
            'success'
          )
      }
    })
      }
    })
  }


  private getPersons(){
    this.service.getAllPersons().subscribe(res=>
      {
        this.persons=res;
      })
  }

}
