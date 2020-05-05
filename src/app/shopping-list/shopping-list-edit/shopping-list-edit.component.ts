import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shoppingListForm: NgForm;

  edittingSubscription = new Subscription();
  editMode: boolean = false;
  editIndex: number;
  editItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.edittingSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editIndex = index;
      this.editMode = true;
      this.editItem = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({ name: this.editItem.name, amount: this.editItem.amount }); 
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.edittingSubscription.unsubscribe();
  }

  onAddOrUpdateItem(form: NgForm) {
    const value = form.value;
    if (value.name !== "" &&
        value.amount !== "" &&
        value.amount !== "0") {

          const outIngredient = new Ingredient(value.name, value.amount);

          if (this.editMode == false) {
            this.shoppingListService.addIngredient(outIngredient);
          }
          else if (this.editMode == true) {
            this.shoppingListService.updateIngredient(this.editIndex, outIngredient);
          }
    }
    this.editMode = false;
    this.shoppingListForm.reset();

  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
  }
}
