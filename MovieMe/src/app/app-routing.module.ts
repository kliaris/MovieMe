import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { CollectionsComponent } from './collections/collections.component';
import { ViewCollectionComponent } from './collections/view-collection/view-collection.component';



const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home/movieDetail/:id',component:ModalContainerComponent },
    { path: 'collections', component: CollectionsComponent},
    { path: 'view-collection/:title', component: ViewCollectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
