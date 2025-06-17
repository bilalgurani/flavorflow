import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  addItem() {
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
