import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { LaunchDetailsComponent } from './home/components/launch-details/launch-details.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'details/:id',
        component: LaunchDetailsComponent
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
