/**
 * Created by praveen on 5/14/2017.
 */
import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe( 'A test Recipe Name',
      'Test Description',
      'http://images.media-allrecipes.com/images/57289.jpg',
      [new Ingredient('milk', 1),
        new Ingredient('pindi', 2)]
    ),
    new Recipe( 'B test Recipe ',
      'Test Description one',
      'http://images.media-allrecipes.com/images/57289.jpg',
      [new Ingredient('chicken', 2)]
    )
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  sendToShop(ingredients: Ingredient[]) {
    /*console.log('ingredients ' +ingredients);*/
    this.slService.addIngredients(ingredients);
  }
}
