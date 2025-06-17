import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropDownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, DropDownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  toShoppingList(recipe: Recipe) {
    this.recipeService.addIngreToShoppingList(recipe?.ingredients);
  }
}
