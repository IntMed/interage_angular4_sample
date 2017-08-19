import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TypeaheadModule } from 'ngx-bootstrap';

import { InterageService } from './interage.service';
import { PrincipiosAtivosComponent } from './principios-ativos/principios-ativos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipiosAtivosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
  ],
  providers: [InterageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
