const mealel = document.getElementById('meals')
const favmeal = document.getElementById('favmeal')

const search_term = document.getElementById('search-term')
const search = document.getElementById('search')

async function randommeal(){
    const meal = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const randmeal = await meal.json();
    meald = randmeal.meals[0];
    return meald;
}

randommeal();
fetchfavmeal();

async function getmealbyid(id){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
    const randmeal = await meal.json();
    const mealsd =  randmeal.meals[0];
    addmeal(mealsd,true);
}

async function getmealbysearch(input){
    const meal = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+input);
    const mealdata = await meal.json();
    const meals = await mealdata.meals;
    return meals
}

function addmeal(mealdata,random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal'); 
    meal.innerHTML = `<div class="meal">
    <div class="meal-header">
        <span class="random">Random Recipe</span>
        <img src="${mealdata.strMealThumb}" alt="${mealdata.strMeal}" srcset="">
    </div>
    <div class="meal-body">
        <h4>${mealdata.strMeal}</h4>
        <button class="fav-btn"><i class="fas fa-heart"></i></button>
    </div>
</div>`;
const btn = meal.querySelector(".meal-body .fav-btn");
btn.addEventListener('click',(e)=>{
    if(btn.classList.contains('active')){
        btn.classList.toggle("active")
        removemealfromls(mealdata.idMeal);
    }else{
        addmealtols(mealdata.idMeal);
        btn.classList.toggle("active")
    }
    fetchfavmeal()
})

mealel.appendChild(meal);
}

function removemealfromls(mealid){
    const mealsids = getmealfromls();
    localStorage.setItem('mealids',JSON.stringify(mealsids.filter((id) => id !== mealid)))
}

function addmealtols(mealid){
    const mealids = getmealfromls();
    localStorage.setItem('mealids',JSON.stringify([...mealids,mealid]))
}

function getmealfromls(){
    const mealids = JSON.parse(localStorage.getItem('mealids'));
    return mealids === null ? [] : mealids;
}

async function fetchfavmeal(){
    favmeal.innerHTML = '';
    const mealids = getmealfromls();
    for(i=0; i<mealids.length; i++){
        const mealid = mealids[i];
        meal = await getmealbyid(mealid);
        addmealtofav(meal)
    }
}

function addmealtofav(mealdata){
    const meal = document.createElement('li');
    meal.classList.add('meal'); 
    meal.innerHTML = `<li><img src="${mealdata.strMealThumb}" alt="Lime">
                    <span>${mealdata.strMeal}</span>
                    <button class="clear"><i class="fas fa-times"></i></button>
        </li>
    `;
    const btn = meal.querySelector('.clear')
    btn.addEventListener('click',()=>{
        removemealfromls(mealdata.idMeal);
        fetchfavmeal();
    })
    favmeal.appendChild(meal)
}

search.addEventListener('click',async ()=>{
    mealel.innerHTML = '';
    const searchitem = search_term.value;
    const data = await getmealbysearch(searchitem);
    if(data){
        data.forEach(element => {
            addmeal(element);
        });
    }else{
        alert("not found")
    }
})