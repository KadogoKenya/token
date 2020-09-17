import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubServiceService } from './github-service.service';
// import { Github } from './github';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: 'profiles', component:HomePageComponent},
  {path: '', redirectTo:"/profiles", pathMatch:"full"},
  {path: '**', component:HomePageComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
