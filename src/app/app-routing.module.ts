import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoboconpageComponent } from './roboconpage/roboconpage.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'roboconpage', component: RoboconpageComponent },
{ path:'not-found', component: NotFoundComponent},
{ path:'**', redirectTo:'/not-found'}
                        ];


@NgModule
({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// ng serve --host 192.168.43.22
