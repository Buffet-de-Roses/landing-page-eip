import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  members: Member[] = [
  {
    firstname: 'Justin',
    lastname: 'Cruceru',
    role: 'dev',
    imgUrl: 'https://via.placeholder.com/150x150',
  },
  {
    firstname: 'Tom',
    lastname: 'Marescot',
    role: 'dev',
    imgUrl: 'https://via.placeholder.com/150x150',
  },
  {
    firstname: 'Christopher',
    lastname: 'Ufarte',
    role: 'dev',
    imgUrl: 'https://via.placeholder.com/150x150',
  },
  // {
  //   firstname: 'Yann',
  //   lastname: 'Peu',
  //   role: 'dev',
  //   imgUrl: 'https://via.placeholder.com/150x150',
  // },
  // {
  //   firstname: 'Bastien',
  //   lastname: 'Garcia',
  //   role: 'dev',
  //   imgUrl: 'https://via.placeholder.com/150x150',
  // },
  // {
  //   firstname: 'Karl-Edouard',
  //   lastname: 'Gläser',
  //   role: 'dev',
  //   imgUrl: 'https://via.placeholder.com/150x150',
  // },
  // {
  //   firstname: 'Bryan',
  //   lastname: 'Sa',
  //   role: 'dev',
  //   imgUrl: 'https://via.placeholder.com/150x150',
  // },
  // {
  //   firstname: 'Matteo',
  //   lastname: 'De Faria',
  //   role: 'dev',
  //   imgUrl: 'https://via.placeholder.com/150x150',
  // }
]
  constructor() { }

  ngOnInit(): void {
  }

}
