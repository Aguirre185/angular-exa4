import { Component, OnInit } from '@angular/core';
import { ListaAsignatura } from './asignatura.json';
import { AsignaturaService } from './asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html'
 
})
export class AsignaturaComponent implements OnInit {

  asignaturaLista:any;

  constructor( private asignaturaService:AsignaturaService) {
   // this.asignaturaLista=ListaAsignatura;
    //console.log(this.asignaturaLista);

   }

  ngOnInit(): void {
    this.listarAsignaturas();
  }
  listarAsignaturas(){
    this.asignaturaService .getAsignatura().subscribe((res:any)=>{
      this.asignaturaLista=res.data;
    })
  }
}
