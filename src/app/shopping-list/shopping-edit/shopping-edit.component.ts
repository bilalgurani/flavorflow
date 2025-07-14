import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent implements OnInit {
  editMode: boolean = false;
  editItem!: Ingredient;
  editItemIndex!: number;

  @ViewChild("f") addItemForm!: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shoppingListService.startEditing.subscribe(index => {      
      this.editMode = true;
      this.editItemIndex = index;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.addItemForm.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount,
      })
    })
  }

  addItem() {
    const value = this.addItemForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {      
      this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.addItemForm.reset();
  }

  onClear() {
    this.addItemForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }
}
