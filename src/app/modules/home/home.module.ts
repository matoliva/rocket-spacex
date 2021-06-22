import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { HomeRoutingModule } from '../home-routing.module';


@NgModule({
  declarations: [HomeComponent, LaunchListComponent, LaunchItemComponent, LaunchDetailsComponent],
  imports: [CommonModule, HomeRoutingModule],
  exports: [HomeComponent]
})
export class HomeModule {}
