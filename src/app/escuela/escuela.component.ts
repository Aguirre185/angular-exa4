import { Component, OnInit } from '@angular/core';
import { EscuelaService } from './escuela.service';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html',
 
})
export class EscuelaComponent implements OnInit {

  listaEscuelas:any;

  constructor(private escuelaService: EscuelaService) { }

  ngOnInit(): void {
    this.listarEscuelas();
  }
  listarEscuelas(){
    this.escuelaService.listaEscuelas().subscribe((res:any)=>{
      this.listaEscuelas=res.data;
    }
    
    )
  }

}
