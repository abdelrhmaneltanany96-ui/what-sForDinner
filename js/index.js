var meals = [
    {
        title: "Beef Tacos",
        description: "Flavorful Mexican tacos with seasoned ground beef",
        image: "imgs/beef tacos.avif",
        rating: "4.1",
        reviews: "685 reviews",
        time: "12 min",
        people: "7 people",
        difficulty: "easy",
        type: "egyption",
        ingredients: [
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded cheddar cheese",
            "Salsa"
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "imgs/Mediterranean Quinoa Bowl.avif",
        rating: "4.9",
        reviews: "754 reviews",
        time: "34 min",
        people: "2 people",
        difficulty: "easy",
        type: "Mediterranean",
        ingredients: [
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Tahini dressing"
        ]
    },
    {
        title: "Lasagna Bolognese",
        description: "Layered Italian pasta with rich meat sauce and béchamel",
        image: "imgs/lasagna bolognese.avif",
        rating: "4.7",
        reviews: "191 reviews",
        time: "27 min",
        people: "2 people",
        difficulty: "medium",
        type: "mexican",
        ingredients: [
            "500g ground beef",
            "400g canned tomatoes",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Fresh basil"
        ]
    },
    {
        title: "Teriyaki Chicken Bowl",
        description: "Sweet and savory chicken over rice with vegetables",
        image: "imgs/Teriyaki Chicken Bowl.avif",
        rating: "4.9",
        reviews: "220 reviews",
        time: "40 min",
        people: "5 people",
        difficulty: "hard",
        type: "asian",
        ingredients: [
            "400g chicken thighs, sliced",
            "Green onions, sliced",
            "1 carrot, julienned",
            "1/2 cup teriyaki sauce",
            "1 tablespoon sesame oil"
        ]
    },
    {
        title: "Honey Garlic Salmon",
        description: "Pan-seared salmon with a sweet and savory glaze",
        image: "imgs/Honey Garlic Salmon.avif",
        rating: "4.5",
        reviews: "150 reviews",
        time: "15 min",
        people: "2 people",
        difficulty: "easy",
        type: "seafood",
        ingredients: [
            "2 salmon fillets (6oz each)",
            "4 cloves garlic, minced",
            "1 tablespoon olive oil",
            "Sesame seeds for garnish",
            "Green onions, sliced"
        ]
    }
];
var mealImg = document.getElementById("mealImg");
var mealRate = document.getElementById("mealrate");
var mealReview = document.getElementById("mealReview");
var howTime = document.getElementById("howTime");
var howMany = document.getElementById("howMany");
var way = document.getElementById("way");
var type = document.getElementById("type");
var mealTitle = document.getElementById("mealTitle");
var mealDescription = document.getElementById("mealDescription");
var ingredients1 = document.getElementById("ingredients1");
var ingredients2 = document.getElementById("ingredients2");
var ingredients3 = document.getElementById("ingredients3");
var ingredients4 = document.getElementById("ingredients4");
var ingredients5 = document.getElementById("ingredients5");
var changeRecipe = document.getElementById("changeRecipe");

var currentMeal = 0;

function displayMeal(index) {
    var meal = meals[index];

    mealImg.src = meal.image;
    mealTitle.innerHTML = meal.title;
    mealDescription.innerHTML = meal.description;
    mealRate.innerHTML = meal.rating;
    mealRate.appendChild(mealReview);
    mealReview.innerHTML = "(" + meal.reviews + ")";
    howTime.innerHTML = meal.time;
    howMany.innerHTML = meal.people;
    way.innerHTML = meal.difficulty;
    type.innerHTML = meal.type;
    ingredients1.innerHTML = meal.ingredients[0];
    ingredients2.innerHTML = meal.ingredients[1];
    ingredients3.innerHTML = meal.ingredients[2];
    ingredients4.innerHTML = meal.ingredients[3];
    ingredients5.innerHTML = meal.ingredients[4];
}

function changeMeal() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * meals.length);
    } while (randomIndex === currentMeal && meals.length > 1);
    currentMeal = randomIndex;
    displayMeal(currentMeal);
}

changeRecipe.addEventListener("click", function () {
    changeMeal();
});