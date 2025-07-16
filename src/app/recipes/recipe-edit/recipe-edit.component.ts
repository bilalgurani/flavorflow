import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../shared/ingredient.model';

interface IngredientForm {
  name: FormControl<string | null>;
  amount: FormControl<number | null>;
}

@Component({
  selector: 'app-recipe-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.scss'
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<FormGroup<IngredientForm>>([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeUrl = recipe.imageUrl;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'image-url': new FormControl(recipeUrl),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  }

  get IngredientsControl() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls; 
  }

  onSubmit() {
    console.log(this.recipeForm);
    
  }
}
