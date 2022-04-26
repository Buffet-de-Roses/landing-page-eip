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
}
