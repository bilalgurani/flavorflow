import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from '../shared/ingredient.model';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditComponent, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private igSubscription!: Subscription;
  ingredients!: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();
    this.igSubscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
    })
  }

  ngOnDestroy(): void {
    this.igSubscription.unsubscribe();
  }

}
