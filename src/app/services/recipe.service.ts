// src/app/services/recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class RecipeService { constructor(private http: HttpClient) {}  // fetch recipes
  getRecipes(query: string) { return this.http.get(`https://api.example.com/search?query=${query}`); }
}