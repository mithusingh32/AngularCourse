import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  
  @ViewChild("nameInput", {static: false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAdd()
  {
    if (this.nameInput.nativeElement.value   !== "" && 
        this.amountInput.nativeElement.value !== "" && 
        this.amountInput.nativeElement.value !== "0") { 
          // emit only if inputs are valid
          const outIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
          this.shoppingListService.addIngredient(outIngredient);
    }
  }
}
