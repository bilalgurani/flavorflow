import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private selectedRecipe: Recipe | null = null;;

  recipeSelected = new EventEmitter<Recipe | null>;

  setRecipeSelected(recipe: Recipe | null) {
    this.selectedRecipe = recipe;
    this.recipeSelected.emit(recipe);
  }

  getSelectedRecipe() {
    return this.selectedRecipe;
  }
  
  private recipes: Recipe[] = [
      new Recipe('Sushi', 
        'Sushi is a traditional Japanese dish made with vinegared rice, typically seasoned with sugar and salt, and combined with a variety of ingredients such as seafood, vegetables, or meat.', 
        'https://media.gettyimages.com/id/1383411781/photo/homemade-sushi-for-lunch.jpg?s=612x612&w=0&k=20&c=LBJJeGJ4bqzwLiu-buynRGEgJQC98gjqrQeaKTFDlLw='
      ,'medium', 45, [new Ingredient('Rice', 20), new Ingredient('Curd', 1), new Ingredient('Water', 1), new Ingredient('Salt', 1)]),
      new Recipe('Chicken Kabab', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Chicken Biryani', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicken', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Burger', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Sushi', 
        'Sushi is a traditional Japanese dish made with vinegared rice, typically seasoned with sugar and salt, and combined with a variety of ingredients such as seafood, vegetables, or meat.', 
        'https://media.gettyimages.com/id/1383411781/photo/homemade-sushi-for-lunch.jpg?s=612x612&w=0&k=20&c=LBJJeGJ4bqzwLiu-buynRGEgJQC98gjqrQeaKTFDlLw='
      ,'medium', 45, [new Ingredient('Rice', 20), new Ingredient('Curd', 1), new Ingredient('Water', 1), new Ingredient('Salt', 1)]),
      new Recipe('Chicken Kabab', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Chicken Biryani', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicken', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Burger', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Sushi', 
        'Sushi is a traditional Japanese dish made with vinegared rice, typically seasoned with sugar and salt, and combined with a variety of ingredients such as seafood, vegetables, or meat.', 
        'https://media.gettyimages.com/id/1383411781/photo/homemade-sushi-for-lunch.jpg?s=612x612&w=0&k=20&c=LBJJeGJ4bqzwLiu-buynRGEgJQC98gjqrQeaKTFDlLw='
      ,'medium', 45, [new Ingredient('Rice', 20), new Ingredient('Curd', 1), new Ingredient('Water', 1), new Ingredient('Salt', 1)]),
      new Recipe('Chicken Kabab', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Chicken Biryani', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicken', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Burger', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Sushi', 
        'Sushi is a traditional Japanese dish made with vinegared rice, typically seasoned with sugar and salt, and combined with a variety of ingredients such as seafood, vegetables, or meat.', 
        'https://media.gettyimages.com/id/1383411781/photo/homemade-sushi-for-lunch.jpg?s=612x612&w=0&k=20&c=LBJJeGJ4bqzwLiu-buynRGEgJQC98gjqrQeaKTFDlLw='
      ,'medium', 45, [new Ingredient('Rice', 20), new Ingredient('Curd', 1), new Ingredient('Water', 1), new Ingredient('Salt', 1)]),
      new Recipe('Chicken Kabab', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Chicken Biryani', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicken', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
      new Recipe('Burger', 
        'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
        'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
      , 'easy', 30, [new Ingredient('Chicke', 2), new Ingredient('Red chilly', 4), new Ingredient('Garam masala', 2), new Ingredient('Ginger', 1), new Ingredient('Garlic', 1)]),
    ];
    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {      
      return this.recipes.slice();
    }

    addIngreToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }
}
