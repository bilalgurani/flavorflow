import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

interface IngredientForm {
  name: FormControl<string | null>;
  amount: FormControl<number | null>;
}

@Component({
  selector: 'app-recipe-edit',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params) => {
      this.id = (+params['id'] - 1);
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeUrl = '';
    let recipeDescription = '';
    let difficulty = '';
    let time = 0;
    let recipeIngredients = new FormArray<FormGroup<IngredientForm>>([]);
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeUrl = recipe.imageUrl;
      recipeDescription = recipe.description;
      difficulty = recipe.difficulty;
      time = recipe.time;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imageUrl': new FormControl(recipeUrl, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'difficulty': new FormControl(difficulty, Validators.required),
      'time': new FormControl(time, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ingredients': recipeIngredients
    });
  }

  get IngredientsControl() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls; 
  }

  onSubmit() {    
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'], 
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imageUrl'],
    //   this.recipeForm.value['difficulty'],
    //   this.recipeForm.value['time'],    
    //   this.recipeForm.value['ingredients'],
    // );
    
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
