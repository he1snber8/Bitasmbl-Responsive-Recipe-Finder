// src/app/components/recipe-card/recipe-card.component.ts
import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
@Component({selector: 'app-recipe-card', template: '<div>{{recipe.title}}</div>'})
export class RecipeCardComponent { @Input() recipe!: Recipe; }
