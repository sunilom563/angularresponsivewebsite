import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BellComponent } from './bell/bell.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'course',component:CourseComponent},
  {path:'about',component:AboutComponent},
  {path:'bell',component:BellComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
