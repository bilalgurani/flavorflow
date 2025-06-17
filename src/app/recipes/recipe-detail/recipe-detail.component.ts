import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropDownDirective } from '../../shared/dropdown.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule, DropDownDirective],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {
@Input() selectedRecipe!: Recipe;
}
