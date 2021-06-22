import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';
import { Launch, Rocket } from '../../models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  //launchesWithRockets$: Observable<Launch[]> | undefined;

  launches: Launch[] = [];

  ngOnInit(): void {
    this.getLaunchesWithRockets();
  }

  getLaunchesWithRockets(): void {
    forkJoin({
      launches: this.homeService.getLaunches$(),
      rockets: this.homeService.getRockets$()
    }).pipe(
      map( response => {
        this.launches = [...this.mergeLaunchAndRockets(response.launches, response.rockets)];
        console.log('launches', this.launches);
      })
    ).subscribe();
  }

  mergeLaunchAndRockets(launches: Launch[], rockets: Rocket[]) {
    return launches.map( launch => {
      const rocket: Rocket | any = rockets.find( rocket => rocket.rocket_id === launch.rocket.rocket_id);
      launch.rocket = rocket;
      return launch;
    })
  }

}
