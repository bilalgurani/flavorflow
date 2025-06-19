import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common'
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  selectedRecipe: Recipe | null = null;;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    
    this.recipeService.recipeSelected.subscribe((recipe: Recipe | null) => {
      this.selectedRecipe = recipe;
    });
  }

}
