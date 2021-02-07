
//fetching API
const cookingMaster = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((response) => response.json())
        .then((data) => {
            displayFoods(data.meals);
        });
}
document.getElementById('search-btn').addEventListener('click', function () {
    cookingMaster();
})

//Display Foods
const displayFoods = (foods) => {
    const foodsDiv = document.getElementById('food-list');

    foods.forEach((food) => {
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col-md-2';
        const foodInfo = `
                    <div onclick="displayDetails('${food.idMeal}')" class="border rounded text-center h-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img class="img-fluid rounded" src="${food.strMealThumb}" alt="">
                    <h4 class="h5">${food.strMeal}</h4>
                    </div>
                `;
        foodDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodDiv);
    });
};

//fetching food Info
const displayDetails = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            foodInfo(data.meals[0]);
        });
};

const foodInfo = (food) => {

    document.getElementById('food-elements').innerHTML = `
        <img class="img-fluid rounded mb-5" src="${food.strMealThumb}">
        <h2>${food.strMeal}</h2>
        <p class="pt-5 pb-4">Ingredients</p>
        <ol class="list-styled mb-0">
            <li>${food.strIngredient1}</li>
            <li>${food.strIngredient2}</li>
            <li>${food.strIngredient3}</li>
            <li>${food.strIngredient4}</li>
            <li>${food.strIngredient5}</li>
            <li>${food.strIngredient6}</li>
            <li>${food.strIngredient7}</li>
        </ol>
    `;
};