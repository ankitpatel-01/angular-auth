/** User Model */
export class User {
  public id: number;
  public name: string;
  public age: string;
  public gender: string;
  constructor(
    name: string,
    age: string,
    gender: string,
    id: number,
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
