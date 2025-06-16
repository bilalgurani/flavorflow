export class Recipe {
  public name: string;
  public description: string;
  public imageUrl: string;
  public difficulty: string;
  public time: number;
  
  constructor(name: string, description: string, imageUrl: string, difficulty: string, time: number) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.time = time;
  }
}