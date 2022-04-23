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
      title: 'Evenement',
      description: 'Post-it Evenement',
      color: 'FFFFCC',
      icone: 'event_note',
    },
    {
      title: 'Liste',
      description: 'Post-it Liste',
      color: 'CCFFEE',
      icone: 'list',
    },
    {
      title: 'Média',
      description: 'Post-it Média',
      color: 'CCFFFF',
      icone: 'perm_media',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
