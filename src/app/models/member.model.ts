export class Member {
  firstname: string;
  lastname: string;
  role: string;
  imgUrl: string;

   constructor(
    firstname: string,
    lastname: string,
    role: string,
    imgUrl: string,
   ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
    this.imgUrl = imgUrl;
   }
}
