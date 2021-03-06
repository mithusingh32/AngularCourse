import { Component, OnInit, OnDestroy } from '@angular/core';

import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipesSubject.subscribe( (recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
