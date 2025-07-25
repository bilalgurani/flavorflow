import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { Recipe } from './recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeService } from './recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  imports: [RecipeListComponent, RouterOutlet, CommonModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  ngOnInit() {
  }

}
