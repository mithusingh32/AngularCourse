import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addItem = new EventEmitter<Ingredient>();
  @ViewChild("nameInput", {static: false}) nameInput: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAdd()
  {
    if (this.nameInput.nativeElement.value   !== "" && 
        this.amountInput.nativeElement.value !== "" && 
        this.amountInput.nativeElement.value !== "0") { 
          // emit only if inputs are valid
          const outIngredient = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value)
          this.addItem.emit(outIngredient);
    }
  }

}
