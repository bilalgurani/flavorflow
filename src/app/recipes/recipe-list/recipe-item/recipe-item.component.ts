import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {

  @Input() recipe! : Recipe;
  @Input() isSelected!: Boolean;
  @Input() index!: number; 
  constructor(private recipeService: RecipeService) {}

}
