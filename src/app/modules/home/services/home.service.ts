import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Launch, Rocket } from '../models/models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getLaunches$() {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v3/launches');
  }

  getRockets$() {
    return this.http.get<Rocket[]>('https://api.spacexdata.com/v3/rockets');
  }

  getLauncheById$(id: number) {
    return this.http.get<Launch>(`https://api.spacexdata.com/v3/launches/${id}`);
  }
}
