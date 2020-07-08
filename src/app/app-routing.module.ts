import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomWeatherComponent } from './custom-weather/custom-weather.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';



const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:'Home',component:HomeComponent},
  {path:'CustomWeather',component:CustomWeatherComponent},
  {path:'About',component:AboutComponent},
  {path:'NotFound',component:NoPageFoundComponent},
  { path: '**', redirectTo: '/NotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
