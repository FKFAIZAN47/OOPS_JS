import { Recipe } from "./recipe.js";
import { Dessert } from "./dessert.js";

document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});



const pasta = new Recipe(
    "Spaghetti Bolognese",
    ["Pasta", "Meat", "Tomato Sauce"],
    30,
    "./images/spaghetti.jpg" 
);

const sandwich = new Recipe(
    "Club Sandwich",
    ["Bread", "Lettuce", "Turkey", "Mayo"],
    10,
    "./images/sandwich.jpg"
);

const chocolateCake = new Recipe(
    "Chocolate Cake",
    ["Flour", "Cocoa", "Eggs"],
    45,
    "./images/chocolate-cake.jpg"
);

pasta.displayRecipe();
sandwich.displayRecipe();
chocolateCake.displayRecipe();
