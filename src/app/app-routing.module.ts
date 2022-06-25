import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscuelaComponent } from './escuela/escuela.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [{

  path:'',
  component:InicioComponent
},
{
  path:'estudiantes',
  component: EstudianteComponent

},
{
  path:'escuela',
  component: EscuelaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
