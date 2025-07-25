import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropDownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, DropDownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id - 1);
    })
  }

  toShoppingList(recipe: Recipe) {
    this.recipeService.addIngreToShoppingList(recipe?.ingredients);
  }

  toEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}
