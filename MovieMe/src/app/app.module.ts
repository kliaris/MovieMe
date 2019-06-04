import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NgxLoadingModule } from 'ngx-loading';
import { CollectionsComponent } from './collections/collections.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    MovieDetailComponent,
    ControlMessagesComponent,   
    ModalContainerComponent,
    CollectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,  
    NgbModule,
    MaterialModuleModule,      // custom module for material components 
    NgxLoadingModule
  ],
  providers: [],
  entryComponents: [
    MovieDetailComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
