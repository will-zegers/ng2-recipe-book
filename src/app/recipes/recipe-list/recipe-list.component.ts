import {Component, OnInit, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://images.bigoven.com/image/upload/t_recipe-256/buttermilk-fried-chicken-recipe-2.jpg');

  @Output()
  recipeSelected = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(this.recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
