// src/app/components/recipe-list/recipe-list.component.ts
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
@Component({selector: 'app-recipe-list', templateUrl: './recipe-list.component.html'})
export class RecipeListComponent implements OnInit {
  recipes = [];
  constructor(private service: RecipeService) {}
  ngOnInit() { this.service.getRecipes('chicken').subscribe(data => this.recipes = data['results']); }
}