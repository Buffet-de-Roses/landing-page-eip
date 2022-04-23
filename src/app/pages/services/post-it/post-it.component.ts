import { Component, Input, OnInit } from '@angular/core';
import { PostIt } from 'src/app/models/post-it.model';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.scss']
})
export class PostItComponent implements OnInit {
  @Input() postIt!: PostIt;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(color: string): string {
    return `#${color}`;
  }
}
