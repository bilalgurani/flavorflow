import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  imports: [],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {

  @Input() recipe! : Recipe;
  @Input() isSelected!: Boolean;
  constructor(private recipeService: RecipeService) {}

  onSelected() {
    if (this.isSelected) {
      this.recipeService.setRecipeSelected(null);
    } else {
      this.recipeService.setRecipeSelected(this.recipe);
    }
    // this.recipeService.recipeSelected.emit(this.recipe); 
  }
}
