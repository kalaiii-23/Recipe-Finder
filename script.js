const recipes = [
    {
        title: "Spaghetti Carbonara",
        image: "images/spaghetti-carbonara.jpg", 
        category: "non-veg",
        description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        steps: [
            "Cook spaghetti according to package instructions.",
            "In a bowl, whisk together eggs, cheese, and pepper.",
            "In a pan, cook pancetta until crispy.",
            "Drain pasta, reserving some water, and add it to the pan with pancetta.",
            "Remove from heat and quickly mix in the egg mixture.",
            "Add reserved pasta water as needed to achieve desired creaminess.",
            "Serve with extra cheese and pepper on top."
        ]
    },
    {
        title: "Margherita Pizza",
        image: "images/margherita-pizza.jpg",
        category: "veg",
        description: "A simple and classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        steps: [
            "Preheat oven to 475°F (245°C).",
            "Roll out pizza dough and place on a baking sheet.",
            "Spread tomato sauce evenly over the dough.",
            "Arrange fresh mozzarella slices on top.",
            "Bake for 10-12 minutes until cheese is melted and crust is golden brown.",
            "Remove from oven, top with fresh basil leaves, and drizzle with olive oil.",
            "Slice and serve hot."
        ]
    },
    {
        title: "Grilled Salmon",
        image: "images/grilled-salmon.jpg",
        category: "non-veg",
        description: "A healthy and flavorful dish of grilled salmon seasoned with lemon and herbs.",
        steps: [
            "Preheat grill to medium heat.",
            "Season salmon fillets with olive oil, salt, pepper, and fresh lemon juice.",
            "Grill salmon for 6-8 minutes per side, until fully cooked.",
            "Remove from grill and garnish with fresh herbs like parsley or dill.",
            "Serve with a side of roasted vegetables or rice."
        ]
    },
    {
        title: "Hummus and Veggie Wrap",
        image: "images/hummus-veggie-wrap.jpg",
        category: "vegan",
        description: "A light and nutritious wrap filled with hummus, fresh veggies, and greens.",
        steps: [
            "Spread a generous layer of hummus on a whole wheat tortilla.",
            "Layer thinly sliced cucumbers, bell peppers, carrots, and avocado on top.",
            "Add some fresh spinach or lettuce for crunch.",
            "Drizzle with olive oil and lemon juice.",
            "Roll up the tortilla tightly and slice in half.",
            "Serve immediately or wrap in foil for later."
        ]
    },
    {
        title: "Paneer Butter Masala",
        image: "images/paneer-butter-masala.jpg",
        category: "veg",
        description: "A creamy and rich North Indian curry made with paneer cubes in a spiced tomato gravy.",
        steps: [
            "Heat butter in a pan and sauté onions, ginger, and garlic until golden.",
            "Add pureed tomatoes, spices (cumin, coriander, garam masala), and simmer until thick.",
            "Stir in cream and simmer for another 5 minutes.",
            "Add paneer cubes and cook for 5-7 minutes until paneer is soft.",
            "Garnish with fresh cilantro and serve with naan or rice."
        ]
    },
    {
        title: "Avocado Toast",
        image: "images/avocado-toast.jpg",
        category: "vegan",
        description: "A quick and delicious breakfast with mashed avocado on crispy toast, topped with various add-ons.",
        steps: [
            "Toast a slice of whole-grain bread until golden brown.",
            "Mash a ripe avocado and spread it over the toast.",
            "Sprinkle with salt, pepper, and a squeeze of lemon juice.",
            "Add optional toppings like cherry tomatoes, radish slices, or a poached egg for extra flavor.",
            "Serve immediately for best freshness."
        ]
    },
{
        title: "Vegetable Stir Fry",
        image: "images/vegetable-stir-fry.jpg", 
        category: "veg",
        description: "A quick and healthy dish featuring a variety of fresh vegetables stir-fried in a light sauce.",
        steps: [
            "Chop a variety of vegetables such as bell peppers, broccoli, and carrots.",
            "Heat oil in a pan over medium-high heat.",
            "Add vegetables and stir-fry for 5-7 minutes until tender-crisp.",
            "Add soy sauce, garlic, and ginger, and stir to combine.",
            "Serve hot over rice or noodles."
        ]
    },
    {
        title: "Chickpea Salad",
        image: "images/chickpea-salad.jpg", 
        category: "vegan",
        description: "A refreshing salad made with chickpeas, diced cucumbers, tomatoes, and a zesty lemon dressing.",
        steps: [
            "In a bowl, combine chickpeas, chopped cucumbers, tomatoes, and red onion.",
            "In a separate bowl, whisk together lemon juice, olive oil, salt, and pepper.",
            "Pour dressing over the salad and toss to combine.",
            "Serve chilled or at room temperature."
        ]
    },
    {
        title: "Chicken Tikka Masala",
        image: "images/chicken-tikka-masala.jpg", 
        category: "non-veg",
        description: "Grilled chicken chunks cooked in a spicy and creamy sauce.",
        steps: [
            "Marinate chicken with yogurt and spices for at least 1 hour.",
            "Grill or cook chicken in a pan until fully cooked.",
            "In another pan, sauté onions, garlic, and ginger.",
            "Add tomatoes, cream, and spices, and simmer.",
            "Add cooked chicken to the sauce and let simmer for 10 minutes.",
            "Serve hot with rice or naan."
        ]
    },
    {
        title: "Quinoa Salad",
        image: "images/quinoa-salad.jpg", 
        category: "vegan",
        description: "A protein-packed salad made with quinoa, black beans, corn, and avocado.",
        steps: [
            "Cook quinoa according to package instructions and let cool.",
            "In a large bowl, combine quinoa, black beans, corn, diced avocado, and chopped cilantro.",
            "In a separate bowl, whisk together lime juice, olive oil, salt, and pepper.",
            "Pour dressing over the salad and toss to combine.",
            "Serve chilled or at room temperature."
        ]
    }
];


document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.dataset.category;
        const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
        displayDishNames(category, searchQuery);
    });
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchQuery = document.getElementById('search-input').value.trim().toLowerCase();
    const category = document.querySelector('.category-button.active')?.dataset.category || '';
    displayDishNames(category, searchQuery);
});

function displayDishNames(category = '', searchQuery = '') {
    const recipeList = document.getElementById('recipe-list');
    const loadingIndicator = document.getElementById('loading');
    recipeList.innerHTML = '';
    loadingIndicator.style.display = 'block';

    const filteredRecipes = recipes.filter(recipe =>
        (!category || recipe.category === category) &&
        (!searchQuery || recipe.title.toLowerCase().includes(searchQuery))
    );

    setTimeout(() => {
        loadingIndicator.style.display = 'none';

        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                const dishName = document.createElement('div');
                dishName.classList.add('recipe-title');
                dishName.textContent = recipe.title;

                dishName.addEventListener('click', function () {
                    displayRecipe(recipe);
                });

                recipeList.appendChild(dishName);
            });
            recipeList.style.display = 'block';
        } else {
            recipeList.innerHTML = '<p>No recipes found.</p>';
            recipeList.style.display = 'block';
        }
    }, 500); // Simulate a short delay for loading
}

function displayRecipe(recipe) {
    const recipeDisplay = document.getElementById('recipe-display');
    recipeDisplay.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = recipe.title;

    const image = document.createElement('img');
    image.src = recipe.image;
    image.alt = recipe.title;
    image.style.width = '100%';

    image.onerror = () => { image.src = 'images/placeholder.jpg'; }; // Fallback image

    const description = document.createElement('p');
    description.textContent = recipe.description;

    const stepsList = document.createElement('ol');
    recipe.steps.forEach(step => {
        const listItem = document.createElement('li');
        listItem.textContent = step;
        stepsList.appendChild(listItem);
    });

    recipeDisplay.appendChild(title);
    recipeDisplay.appendChild(image);
    recipeDisplay.appendChild(description);
    recipeDisplay.appendChild(stepsList);
    recipeDisplay.style.display = 'block';

    document.getElementById('recipe-list').style.display = 'none';
}