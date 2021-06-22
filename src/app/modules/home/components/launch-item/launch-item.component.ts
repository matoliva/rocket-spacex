import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Launch } from '../../models/models';

@Component({
  selector: 'app-launch-item',
  templateUrl: './launch-item.component.html',
  styleUrls: ['./launch-item.component.scss']
})
export class LaunchItemComponent implements OnInit {

  @Input() launch: Launch | undefined;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToDetails() {
    this.route.navigate(['home', 'details', this.launch?.flight_number]);
  }
  

}
