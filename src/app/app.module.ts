import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { CompartilhandoDataComponent } from './compartilhando-data/compartilhando-data.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfRenderComponent } from './if-render/if-render.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmmiterComponent } from './emmiter/emmiter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';
import { ListRenderComponent } from './list-render/list-render.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    CompartilhandoDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmmiterComponent,
    ChangeNumberComponent,
    ListRenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
