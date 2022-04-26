import { Component, OnInit } from '@angular/core';
import { TimeLine } from 'src/app/models/timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timeline !: TimeLine[];

  constructor() { }

  ngOnInit(): void {
    this.timeline = [
      {
        date: new Date('2022-02'),
        title: 'Idéation',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: '#94FF33',
      },
      {
        date: new Date('2022-03'),
        title: 'Création',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: '#FFC133',
      },
      {
        date: new Date('2022-05'),
        title: 'Beta',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        color: '#FF4933',
      }
    ]
  }

}
