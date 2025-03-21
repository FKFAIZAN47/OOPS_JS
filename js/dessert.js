import { Recipe } from "./recipe.js"; // Importing base class

class Dessert extends Recipe {
    constructor(title, ingredients, cookingTime, sweetnessLevel) {
        super(title, ingredients, cookingTime);
        this.sweetnessLevel = sweetnessLevel;
    }

    describeDessert() {
        let p = document.createElement("p");
        p.textContent = `${this.title} is a dessert with a sweetness level of ${this.sweetnessLevel}.`;
        document.body.appendChild(p);
    }
}

// Exporting subclass
export { Dessert };
