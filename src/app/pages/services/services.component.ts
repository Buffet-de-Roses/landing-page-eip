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
      description: 'Post-it Évènement, il sert à ajouter des évènements dans le calendrier ainsi que de recevoir des notifications avant le début de ces évènements.',
      color: 'FFFFCC',
      icone: 'event_note',
    },
    {
      title: 'Liste',
      description: 'Post-it Liste, il sert à créer une liste (courses, tâches ménagères) et d\'y associer un membre de la famille.',
      color: 'CCFFEE',
      icone: 'list',
    },
    {
      title: 'Média',
      description: 'Post-it Média, il sert à créer des albums photos pour stocker dans un seul dossier vos souvenirs de vacances avec votre famille.',
      color: 'CCFFFF',
      icone: 'perm_media',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
