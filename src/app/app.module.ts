import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { AboutComponent } from './Componentes/about/about.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { SkillsComponent } from './Componentes/skills/skills.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
