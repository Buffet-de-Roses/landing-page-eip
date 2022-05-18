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
    role: 'Chef de projet, Développeur Backend/Robot',
    imgUrl: 'assets/profile_pic/empty.png',
  },
  {
    firstname: 'Tom',
    lastname: 'Marescot',
    role: 'Développeur Backend',
    imgUrl: 'assets/profile_pic/tom.png',
  },
  {
    firstname: 'Christopher',
    lastname: 'Ufarte',
    role: 'Développeur Robot',
    imgUrl: 'assets/profile_pic/Christopher.png',
  },
  {
    firstname: 'Yann',
    lastname: 'Peu',
    role: 'Développeur Mobile',
    imgUrl: 'assets/profile_pic/yann.jpeg',
  },
  {
    firstname: 'Bastien',
    lastname: 'Garcia',
    role: 'Développeur Backend',
    imgUrl: 'assets/profile_pic/bastien.png',
  },
  {
    firstname: 'Karl-Edouard',
    lastname: 'Gläser',
    role: 'Développeur Mobile',
    imgUrl: 'assets/profile_pic/ke.jpeg',
  },
  {
    firstname: 'Bryan',
    lastname: 'Sa',
    role: 'Développeur Frontend',
    imgUrl: 'assets/profile_pic/bryan.sa.jpg',
  },
  {
    firstname: 'Matteo',
    lastname: 'De Faria',
    role: 'Développeur Frontend',
    imgUrl: 'assets/profile_pic/matteo.de-faria.jpg',
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
