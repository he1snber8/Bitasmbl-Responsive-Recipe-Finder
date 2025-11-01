# Bitasmbl-Responsive-Recipe-Finder

## Description
A beginner-friendly Angular and Tailwind CSS project where users can search for recipes and view dynamic cards displaying images, ingredients, and cooking steps. The app emphasizes component structure, responsive layout, and API data rendering.

## Tech Stack
- Angular (latest)
- TypeScript
- RxJS
- Tailwind CSS
- Angular CLI
- Node.js & npm

## Requirements
- Use Angular components and lifecycle hooks (Hint: Use OnInit and RxJS observables for reactivity)
- Fetch data from a public API and render dynamically (Hint: handle loading and errors gracefully)
- Implement mobile-responsive design using Tailwind CSS (Hint: use responsive utilities like md:, lg: in class names)

## Installation
1. Ensure you have Node.js (>=14.x) and npm installed.
2. Install Angular CLI globally if not already installed:
   bash
   npm install -g @angular/cli
   
3. Clone the repository:
   bash
   git clone https://github.com/YourUsername/Bitasmbl-Responsive-Recipe-Finder.git
   cd Bitasmbl-Responsive-Recipe-Finder
   
4. Install dependencies:
   bash
   npm install
   
5. (Optional) Configure environment variables in `src/environments/environment.ts` if your chosen API requires a key:
   ts
   export const environment = {
     production: false,
     apiUrl: 'https://www.themealdb.com/api/json/v1/1',
     apiKey: '' // add if required
   };
   

## Usage
1. Start the development server:
   bash
   ng serve
   
2. Open your browser at `http://localhost:4200`.
3. Use the search bar to find recipes by keyword or ingredient. Click on a card to view detailed steps and ingredients.

## Implementation Steps
1. Initialize a new Angular project with Tailwind CSS:
   - `ng new responsive-recipe-finder --style=css`
   - Install and configure Tailwind CSS following the official guide.
2. Create core components and services:
   - `ng generate component components/search`
   - `ng generate component components/recipe-card`
   - `ng generate component components/recipe-detail`
   - `ng generate service services/recipe`
3. Implement `RecipeService` using `HttpClient` to fetch data from the public API.
4. In `SearchComponent`, bind an input field to a reactive form or template reference, subscribe to value changes, and call the service.
5. Handle loading and error states in components via RxJS operators (`tap`, `catchError`) and template conditionals (`*ngIf`).
6. Render recipe cards dynamically in `RecipeCardComponent` and pass data via `@Input()`.
7. Upon card click, navigate or reveal detailed view in `RecipeDetailComponent` showing ingredients and steps.
8. Apply Tailwind CSS utility classes for layout, spacing, and responsiveness (use `md:`, `lg:` prefixes).
9. Test components and build for production:
   bash
   ng test
   ng build --prod
   

## API Endpoints
- Search recipes by ingredient or name:
  
  GET https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
  
- Get full recipe details by ID:
  
  GET https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}