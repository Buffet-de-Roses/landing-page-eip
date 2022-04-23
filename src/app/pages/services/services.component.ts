import { Component, OnInit } from '@angular/core';
import { PostIt } from 'src/app/models/post-it.model';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {
  postIts: PostIt[] = [
    {
      title: 'Évènement',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      color: 'FFFFCC',
      icone: 'event_note',
    },
    {
      title: 'Liste',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      color: 'CCFFEE',
      icone: 'list',
    },
    {
      title: 'Média',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      color: 'CCFFFF',
      icone: 'perm_media',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
