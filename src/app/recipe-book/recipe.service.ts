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
  recipeSelected = new Subject<Recipe>();

  // recipes can't be directly accessed from externals
  private recipes: Recipe[] = [new Recipe("Roti", "Indian Bread", "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-1-500x375.jpg", [new Ingredient("Flour", 1)]), 
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

  getRecipe(id: number)
  {
    console.log(this.recipes[id])
    return this.recipes[id];
  }

}
