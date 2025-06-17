import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, RecipeDetailComponent, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {     
    this.recipeService.recipeSelected
    .subscribe((recipe: Recipe) => {      
      this.selectedRecipe = recipe;
    })
  }
}
