import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormArrayName } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;

  recipeEditFormGroup: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null; // Set to true if there is an id
      this.initForm();
    });
  }

  // Public methods
  onSubmit(): void {
    console.log(this.recipeEditFormGroup);

    if (this.editMode) {
      // You can just pass the value, AS LONG AS: the model/object is the same on both ends. The key names need to be a match
      this.recipeService.updateRecipe(this.id, this.recipeEditFormGroup.value)
    }
    else {
      this.recipeService.addRecipe(this.recipeEditFormGroup.value);
    }

    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  addIngredients(): void {
    (this.recipeEditFormGroup.get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl('', [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  removeIngredient(ingredientIndex: number): void {
    (this.recipeEditFormGroup.get('ingredients') as FormArray).removeAt(ingredientIndex);
  }

  // Private Methods
  private initForm() {
    if (this.editMode) {
      const aRecipe: Recipe = this.recipeService.getRecipe(this.id);
      let aIngredientsArray = new FormArray([]);
      if (aRecipe['ingredients']) {
        for (let ingredient of aRecipe['ingredients']) {
          aIngredientsArray.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
      this.recipeEditFormGroup = new FormGroup({
        name: new FormControl(aRecipe.name, [Validators.required]),
        imagePath: new FormControl(aRecipe.imagePath, [Validators.required]),
        description: new FormControl(aRecipe.description),
        ingredients: aIngredientsArray
      });
    }
    else {
      this.recipeEditFormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        imagePath: new FormControl('', [Validators.required]),
        description: new FormControl(''),
        ingredients: new FormArray([])
      });
    }
  }

  // Getters
  get controls() { // a getter!
    return (<FormArray>this.recipeEditFormGroup.get('ingredients')).controls;
  }
}
