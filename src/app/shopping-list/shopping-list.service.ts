import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' }) 
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
      new Ingredient("Tomato", 4),
      new Ingredient("Chicken", 1),
      new Ingredient("Curd", 2),
    ]

    getShoppingList() {
      return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
      const existingIngredient = this.ingredients.find(
        item => item.name.toLowerCase() === ingredient.name.toLowerCase()
      )
      if (existingIngredient) {
        existingIngredient.amount += +ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
      this.ingredientChanged.next([...this.ingredients]);
    }

    addIngredients(ingredients: Ingredient[]) {
      const ingredientsMap = new Map<string, number>();
      this.ingredients.forEach(item => {
        ingredientsMap.set(item.name, item.amount);
      });
      ingredients.forEach(item => {
        const currAmount = ingredientsMap.get(item.name) || 0;
        ingredientsMap.set(item.name, currAmount + +item.amount)
      });
      this.ingredients = Array.from(ingredientsMap.entries()).map(
        ([name, amount]) => new Ingredient(name, amount)
      );
      this.ingredientChanged.next(this.ingredients.slice());
    }
}