import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface TimeLine {
  title: string,
  description: string,
  date: Date,
}
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline!: TimeLine[];
  constructor() { }

  ngOnInit(): void {
    this.timeline = [
      {
        title: 'First',
        description: 'first',
        date: new Date(),
      },
      {
        title: 'Second',
        description: 'Second',
        date: new Date(),
      }
    ]
  }

}
