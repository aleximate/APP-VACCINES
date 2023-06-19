import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vaccines } from '../models/Vaccines';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Persons } from '../models/Persons';
import { VaccinesCenter } from '../models/VaccinesCenter';
import { VaccineDetail } from '../models/VaccineDetail';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http : HttpClient) { }

  /*********METHODS CRUD FOR VACCINES*******************/
  saveVaccines(vaccines:Vaccines): Observable<Object>{
    return this.http.post(environment.baseUrl+'/api/vaccines/v0/vaccines',vaccines,{responseType: 'text'});
  }

  getVaccinesById(id:number):Observable<Vaccines>{
    return this.http.get<Vaccines>(environment.baseUrl+'/api/vaccines/v0/vaccines/'+id);
  }

  updateVaccines(id:number,vaccines:Vaccines):Observable<Object>{
    return this.http.put(environment.baseUrl+'/api/vaccines/v0/vaccines/'+id,vaccines,{responseType: 'text'});
  }
  getAllVaccines():Observable<Vaccines[]>{
    return this.http.get<Vaccines[]>(environment.baseUrl+'/api/vaccines/v0/vaccines')
  }

  deleteVaccines(id:number):Observable<Object>{
    return this.http.delete(environment.baseUrl+'/api/vaccines/v0/vaccines/'+id,{responseType: 'text'});
  }

  /*********METHODS CRUD FOR PERSONS*******************/
  savePersons(persons:Persons): Observable<Object>{
    return this.http.post(environment.baseUrl+'/api/persons/v0/persons',persons,{responseType: 'text'});
  }

  getPersonsById(dni:string):Observable<Persons>{
    return this.http.get<Persons>(environment.baseUrl+'/api/persons/v0/persons/'+dni);
  }

  updatePersons(dni:string,persons:Persons):Observable<Object>{
    return this.http.put(environment.baseUrl+'/api/persons/v0/persons/'+dni,persons,{responseType: 'text'});
  }
  getAllPersons():Observable<Persons[]>{
    return this.http.get<Persons[]>(environment.baseUrl+'/api/persons/v0/persons')
  }

  deletePersons(dni:string):Observable<Object>{
    return this.http.delete(environment.baseUrl+'/api/persons/v0/persons/'+dni,{responseType: 'text'});
  }

   /*********METHODS CRUD FOR VACCINES-CENTER*******************/
  saveVaccinesCenter(vaccinesCenter:VaccinesCenter): Observable<Object>{
    return this.http.post(environment.baseUrl+'/api/vaccinationCenter/v0/vaccinationCenter',vaccinesCenter,{responseType: 'text'});
  }

  getVaccinesCenterById(id:number):Observable<VaccinesCenter>{
    return this.http.get<VaccinesCenter>(environment.baseUrl+'/api/vaccinationCenter/v0/vaccinationCenter/'+id);
  }

  updateVaccinesCenter(id:number,vaccinesCenter:VaccinesCenter):Observable<Object>{
    return this.http.put(environment.baseUrl+'/api/vaccinationCenter/v0/vaccinationCenter/'+id,vaccinesCenter,{responseType: 'text'});
  }
  getAllVaccinesCenter():Observable<VaccinesCenter[]>{
    return this.http.get<VaccinesCenter[]>(environment.baseUrl+'/api/vaccinationCenter/v0/vaccinationCenter')
  }

  deleteVaccinesCenter(id:number):Observable<Object>{
    return this.http.delete(environment.baseUrl+'/api/vaccinationCenter/v0/vaccinationCenter/'+id,{responseType: 'text'});
  }


   /*********METHODS CRUD FOR VACCINES-DETAILS*******************/
   saveVaccinesDetails(vaccinesDetails:VaccineDetail): Observable<Object>{
    return this.http.post(environment.baseUrl+'/api/VaccineDetail/v0/vaccineDetail',vaccinesDetails,{responseType: 'text'});
  }

  getVaccinesDetailsById(id:number):Observable<VaccineDetail>{
    return this.http.get<VaccineDetail>(environment.baseUrl+'/api/VaccineDetail/v0/vaccineDetail/'+id);
  }

  updateVaccinesDetails(id:number,vaccinesDetails:VaccineDetail):Observable<Object>{
    return this.http.put(environment.baseUrl+'/api/VaccineDetail/v0/vaccineDetail/'+id,vaccinesDetails,{responseType: 'text'});
  }
  getAllVaccinesDetails():Observable<VaccineDetail[]>{
    return this.http.get<VaccineDetail[]>(environment.baseUrl+'/api/VaccineDetail/v0/vaccineDetail')
  }

  deleteVaccinesDetails(id:number):Observable<Object>{
    return this.http.delete(environment.baseUrl+'/api/VaccineDetail/v0/vaccineDetail/'+id,{responseType: 'text'});
  }


    /*********METHODS CRUD FOR WORKERS*******************/
    /*saveWorkers(workers:Workers): Observable<Object>{
      return this.http.post(environment.baseUrl+'/workers/',workers,{responseType: 'text'});
    }

    getWorkersById(id:number):Observable<Workers>{
      return this.http.get<Workers>(environment.baseUrl+'/workers/'+id);
    }

    updateWorkers(id:number,workers:Workers):Observable<Object>{
      return this.http.put(environment.baseUrl+'/workers/'+id,workers,{responseType: 'text'});
    }
    getAllWorkers():Observable<Workers[]>{
      return this.http.get<Workers[]>(environment.baseUrl+'/workers/')
    }

    deleteWorkers(id:number):Observable<Object>{
      return this.http.delete(environment.baseUrl+'/workers/'+id,{responseType: 'text'});
    }
*/
}
