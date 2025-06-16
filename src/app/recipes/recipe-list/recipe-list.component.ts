import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>;
  recipes: Recipe[] = [
    new Recipe('Sushi', 
      'Sushi is a traditional Japanese dish made with vinegared rice, typically seasoned with sugar and salt, and combined with a variety of ingredients such as seafood, vegetables, or meat.', 
      'https://media.gettyimages.com/id/1383411781/photo/homemade-sushi-for-lunch.jpg?s=612x612&w=0&k=20&c=LBJJeGJ4bqzwLiu-buynRGEgJQC98gjqrQeaKTFDlLw='
    ,'medium', 45),
    new Recipe('Chicken Kabab', 
      'Simple Kabab recipe for the indian cuisine lovers who loves to enjoy the declicay of Dharwad', 
      'https://media.gettyimages.com/id/1661910387/photo/washington-dc-chicken-souvlaki-grilled-chicken-skewers-with-onion-and-a-scoop-each-of-yogurt.jpg?s=612x612&w=0&k=20&c=-J8ZcIzgcTzeri0SsnB8SG6rmdl17ly5Euy8xU5YtTw='
    , 'easy', 30)
  ];

  onRecipeSelected(selectedRecipe: Recipe) {    
    this.recipeWasSelected.emit(selectedRecipe);
  }

}
