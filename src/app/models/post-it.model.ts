export class PostIt {
  title: string;
  description: string;
  color: string;
  icone: string;

  constructor(
    title: string,
    description: string,
    color: string,
    icone: string
  ) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.icone = icone;
  }
}
