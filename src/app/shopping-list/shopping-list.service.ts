import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService {

  newDataAvailable = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomtao", 5)];

  getIngredientsArray() {
    return this.ingredients.slice();
  }

  addIngredient(inIngredient: Ingredient) {
    this.ingredients.push(inIngredient);
    this.newDataAvailable.next(this.ingredients.slice());
  }

  addIngreidents(inIngredientArray: Ingredient[]) {
    //Spread syntax (...[array]) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
    //or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected
    this.ingredients.push(...inIngredientArray);
    this.newDataAvailable.next(this.ingredients);
  }

  getIngredient(index: number): Ingredient
  {
    return this.ingredients[index]
  }

  updateIngredient(index:number, ingredient: Ingredient): void {
    this.ingredients[index] = ingredient;
    this.newDataAvailable.next(this.ingredients);
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.newDataAvailable.next(this.ingredients);
  }
}
