import { Injectable } from '@angular/core';
import { Informacion } from '../interfaces/info-pagina';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargando=true;
  info: Informacion ={};

  constructor(private http:HttpClient) { 
    this.cargarinfo();
  }

  private cargarinfo(){

    this.http.get("assets/data/data-pagina.json").subscribe((resp:Informacion)=>{

      this.cargando=false;
      this.info=resp;
      console.log("cargo");
    })

  }



}
