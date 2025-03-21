class Recipe {
    constructor(title, ingredients, cookingTime, image) {
        this.title = title;
        this.ingredients = ingredients;
        this.cookingTime = cookingTime;
        this.image = image;  
    }

    displayRecipe() {
        let container = document.getElementById("recipes");

        let card = document.createElement("div");
        card.classList.add("recipe-card");


        let img = document.createElement("img");
        img.src = this.image;
        img.alt = this.title;
        img.classList.add("recipe-image");

        let title = document.createElement("h2");
        title.textContent = this.title;

        let details = document.createElement("p");
        details.textContent = `Ingredients: ${this.ingredients.join(", ")} | Time: ${this.cookingTime} mins`;

        let button = document.createElement("button");
        button.textContent = "View Recipe";


        card.appendChild(img); 
        card.appendChild(title);
        card.appendChild(details);
        card.appendChild(button);

        container.appendChild(card);
    }
}


export { Recipe };
