import { Component, Input, OnInit } from '@angular/core';
import { Launch } from '../../models/models';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  @Input() launches: Launch[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
