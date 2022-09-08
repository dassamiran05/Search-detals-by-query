

const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    const res = await fetch(url);
    const data = await res.json();
    displaySearchResults(data.meals);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displaySearchResults(data.meals));
}


const displaySearchResults = meals => {
    const searchResults = document.getElementById('search-results');
    searchResults.textContent = '';

    // if(meals.length == 0){
    //     const div = document.createElement('div');
    //     div.classList.add('col');
    //     div.innerHTML = `
    //         <p>No data found based on search keyword</p>
    //     `;

    //     searchResults.appendChild(div);
    // }

    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img onclick = "loadMealDetail(${meal.idMeal})" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
        </div>
        `;
        searchResults.appendChild(div);
    })
}

const loadMealDetail = async mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // console.log(data);
    // fetch(url).then(res => res.json()).then(data => displayMealDetail(data.meals[0]));
}


const displayMealDetail = meal =>{
    const mealDetail = document.getElementById('meal-details');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">See on Youtube</a>
    </div>
    `;
    mealDetail.appendChild(div);
}