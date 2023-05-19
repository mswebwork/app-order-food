import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: "full"},
  { path: 'login', component: LoginComponent},
  { path: 'homepage', component: HomepageComponent},



  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
