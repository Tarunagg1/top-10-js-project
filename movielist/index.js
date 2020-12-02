const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById('main')
const form = document.getElementById('form');
const search = document.getElementById('search')

getmovies(APIURL);

async function getmovies(url){
    const resp = await fetch(url);
    const resdata = await resp.json();
    showmovies(resdata.results)
}

function getclassbyrate(vote){
    if(vote > 8){
        return 'green';
    }else if(vote >= 5 && vote<=7){
        return 'orange';
    }else{
        return 'red';
    }
}

function showmovies(resdata){    
    main.innerHTML = '';
    resdata.forEach(movie => {
        const movieel = document.createElement('div');
        movieel.classList.add("movie")
        movieel.innerHTML = `<img src="${IMGPATH}/${movie.poster_path}" alt="movies">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class="${getclassbyrate(movie.vote_average)}">${movie.vote_average}</span>
            </div>
            <div class='overview'><h3>Overview</h3>${movie.overview}</div>`;
         main.appendChild(movieel)
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const serchval = search.value;
    if(serchval){
        getmovies(SEARCHAPI+serchval);
        search.value = '';
    }else{
        alert("enter the search value")
    }
})