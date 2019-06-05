import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { NewCollectionDialogComponent } from './components/new-collection-dialog/new-collection-dialog.component';
import { MatDialogModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { AddToCollectionComponent } from './components/add-to-collection/add-to-collection.component';
import { ViewCollectionComponent } from './collections/view-collection/view-collection.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavComponent,
    MovieDetailComponent,
    ControlMessagesComponent,   
    ModalContainerComponent,
    CollectionsComponent,
    NewCollectionDialogComponent,
    AddToCollectionComponent,
    ViewCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LayoutModule, 
    BrowserAnimationsModule,
    ReactiveFormsModule,  
    NgbModule,
    MaterialModuleModule,      // custom module for material components 
    NgxLoadingModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  entryComponents: [
    MovieDetailComponent,NewCollectionDialogComponent,AddToCollectionComponent
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
