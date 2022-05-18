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
        description: 'Recherche d\'une idée de projet réalisable en 4 mois.',
      },
      {
        date: new Date('2022-03'),
        title: 'Création',
        description: 'Création du projet.',
      },
      {
        date: new Date('2022-06'),
        title: 'Bêta',
        description: 'La bêta du projet disponible en ligne et utilisable par le public pour avoir les premiers retours sur celle-ci.',
      },
      {
        date: new Date('2023'),
        title: 'Lancement',
        description: 'Evaluation du projet par un jury et lancement de celui-ci.',
      }
    ]
  }

}
