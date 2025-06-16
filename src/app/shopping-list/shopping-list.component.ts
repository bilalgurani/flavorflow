import { Component } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Tomato", 4),
    new Ingredient("Chicken", 1),
    new Ingredient("Curd", 2),
  ]
  onIngredientAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
