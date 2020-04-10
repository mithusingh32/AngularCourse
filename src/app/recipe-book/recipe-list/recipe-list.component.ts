import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [new Recipe("Roti", "Indian Bread", "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-1-500x375.jpg"), 
                       new Recipe("Roti", "Indian Bread", "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2015/04/jowar-roti-recipe-1-500x375.jpg")];

  constructor() { }

  ngOnInit(): void {
  }

}
