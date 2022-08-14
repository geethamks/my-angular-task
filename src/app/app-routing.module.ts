import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlightdetailsComponent} from "./flightdetails/flightdetails.component";
import {HomeComponent} from "./home/home.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'aboutus',
    component:AboutusComponent
  },

  {
    path:'spacedata',
    component:FlightdetailsComponent
  },

  {
    path:'spacedata/:yearval/:landstatus/:launchstatus',
    component:FlightdetailsComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
