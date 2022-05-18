import { Component, Input, OnInit } from '@angular/core';
import { TimeLine } from 'src/app/models/timeline.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event!: TimeLine;
  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    const percent = this.event.date.getTime() / Date.now() * 100;
    console.log(this.event.title, ' : ', percent);
    if (percent > 100 && percent < 101) return 'orange';
    if (percent > 100) return 'red';
    else return 'green';
  }
}
