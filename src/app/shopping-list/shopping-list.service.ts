import { EventEmitter, Output, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  newDataAvailable = new EventEmitter<Ingredient[]>();
  
  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomtao", 5)];

  getIngredientsArray() {
    return this.ingredients.slice();
  }

  addIngredient(inIngredient: Ingredient) {
    this.ingredients.push(inIngredient);
    this.newDataAvailable.emit(this.ingredients.slice());
  }

  addIngreeidents(inIngredientArray: Ingredient[]) {
    //Spread syntax (...[array]) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    //or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected
    this.ingredients.push(...inIngredientArray);
    this.newDataAvailable.emit(this.ingredients);
  }

}
