//import { Routes } from '@angular/router';
//export const routes: Routes = [];
// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  
import { AboutComponent } from './about/about.component';  
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route par défaut pointant vers app-home
  { path: 'about', component: AboutComponent },  // Route "about" pointant vers AboutComponent
  { path: 'accueil', component: HomeComponent},
  { path: 'toto.html', component: HomeComponent} ,   
  { path: 'about', component: AboutComponent},
  { path: 'about/:toto', component: AboutComponent},
  { path: 'consultAct', component: ConsultActiviteComponent},
 // { path: 'consultAct/:test2', component: ConsultActiviteComponent}, 
  //{ path: 'consultAct/:param1', component: ConsultActiviteComponent },
  { path: 'consultAct/:param1/:param2', component: ConsultActiviteComponent },
  { path: 'consultAct/:index', component: ConsultActiviteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
