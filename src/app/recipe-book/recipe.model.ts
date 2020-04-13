import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(inName: string, inDescription: string, inImagePath: string, inIngredients: Ingredient[]) {
        this.name = inName;
        this.description = inDescription;
        this.imagePath = inImagePath;
        this.ingredients = inIngredients;
    }
}