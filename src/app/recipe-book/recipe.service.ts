import { EventEmitter, Inject, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  // EventEmitter for the selected recipe
  recipesSubject = new Subject<Recipe[]>();

  // recipes can't be directly accessed from externals
  private recipes: Recipe[] = [new Recipe("Roti", "Indian Bread", "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-1-500x375.jpg", [new Ingredient("Flour", 1), new Ingredient("Water", 1)]), 
                               new Recipe("Basic Roti", "Indian Bread", "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-1-500x375.jpg", [new Ingredient("Flour", 1)])];

  constructor(private shoppingListService: ShoppingListService) { }

  /**
   * Returns a copy of the recipes array
   */
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngreidents(ingredient);
  }

  updateRecipe(recipeIndex:number, inRecipe: Recipe) {
    this.recipes[recipeIndex] = inRecipe; 
    this.recipesSubject.next(this.recipes.slice());
  }

  deleteRecipe(recipeIndex:number) {
    this.recipes.splice(recipeIndex,1);
    this.recipesSubject.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesSubject.next(this.recipes.slice());
  }

  getRecipe(id: number)
  {
    return this.recipes[id];
  }

}
