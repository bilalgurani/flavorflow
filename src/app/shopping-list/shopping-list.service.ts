import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({ providedIn: 'root' }) 
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
      new Ingredient("Tomato", 4),
      new Ingredient("Chicken", 1),
      new Ingredient("Curd", 2),
    ]

    getShoppingList() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
      this.ingredients.push(ingredient);
      this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
      this.ingredients.push(...ingredients);
      console.log(this.ingredients);
      
      this.ingredientChanged.emit(this.ingredients.slice());
    }
}