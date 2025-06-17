import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  
  constructor(public name: string, public description: string, public imageUrl: string, public difficulty: string, public time: number, public ingredients: Ingredient[]) {
  }
}