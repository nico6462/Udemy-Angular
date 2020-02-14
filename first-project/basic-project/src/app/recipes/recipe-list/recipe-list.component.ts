import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'this is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg'),
    new Recipe('A test Recipe2', 'this is simply a test', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
