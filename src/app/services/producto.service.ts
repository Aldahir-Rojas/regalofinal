import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import {About} from "../interfaces/about";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  cargando=true;
  produ: Producto[]=[];
  nosotros:About[]=[];
  constructor(private http:HttpClient) {

    this.cargarproducto();
    this.cargarabout();
   }

   private cargarproducto(){

    this.http.get("https://regalo-info.firebaseio.com/principal.json").subscribe((resp:Producto[])=>{

      this.cargando=false;
      this.produ=resp;

    })

   }

   private cargarabout(){
     this.http.get("https://regalo-info.firebaseio.com/about.json").subscribe((resp:About[]) =>{
       this.nosotros=resp;
     })
   }


}
