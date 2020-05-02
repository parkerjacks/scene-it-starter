


let mainContent = document.getElementById("main-content")

let movieContainer = document.createElement("div"); 
movieContainer.classList.add("movies-container"); 
mainContent.appendChild(movieContainer); 
let watchList = [] 
// window.localStorage.setItem


function createMovieInfo(currentMovie){ 
    let movie = document.createElement("div"); 
    movie.classList.add("movie");  
    let poster = document.createElement("img") 
    poster.classList.add("posters")
    poster.setAttribute("src",currentMovie.Poster) 
    let movieTitle = document.createElement("div"); 
    movieTitle.classList.add("movie-title")
    movieTitle.textContent = currentMovie.Title; 
    let releaseDate = document.createElement("div"); 
    releaseDate.classList.add("release-date")
    releaseDate.textContent = currentMovie.Year;  
    let typeOf = document.createElement("div") ;
    typeOf.classList.add("typeOf");
    typeOf.textContent=currentMovie.Type;    
    let imdbID = document.createElement("div"); 
    imdbID.textContent= currentMovie.imdbID;
    let addToWatchList = document.createElement("button")
    addToWatchList.textContent = "+"  
    addToWatchList.addEventListener("click",e=>{   
        console.log(currentMovie)
    
        const movie = currentMovie.imdbID;
        console.log(movie) 
        if (watchList.includes(movie)){ 
            console.log("This movie is already in users, WatchList")
        } 
        else{
        watchList.push(movie)   
        console.log(localStorage) 
        let watchListJSON = JSON.stringify(watchList) 
        console.log(watchListJSON)
        watchList = JSON.parse(watchListJSON) 
        localStorage.setItem("watchList", watchListJSON)
        watchListJSON = localStorage.getItem("watchList") 
        console.log(watchListJSON)}
        
        // if (watchList === null){ 
        //     watchList = []
        // }  

         
        
        
        
    })
    movie.appendChild(poster)
    movie.appendChild(movieTitle) 
    movie.appendChild(releaseDate) 
            // movie.appendChild(typeOf) 
    movie.appendChild(addToWatchList)
            
    movieContainer.appendChild(movie)
            }

    movieData.map(createMovieInfo);  

    let searchContainer = document.querySelector("input") 
    let searchMe = document.getElementById("searchMe") 
    
    
    function runTheSearch(e){  
        e.preventDefault() 
        if(searchContainer.value == "movie"){ 
            movieContainer.textContent = ""
            let saying = document.createElement("p") 
            saying.classList.add("searchMessage")
            saying.textContent="Ohhh, this is my favorite!! Hold On, let me grab the Popcorn!🍿" 
            movieContainer.appendChild(saying) 
            movieContainer.style.backgroundColor = "black"
        }
        else{ 
            console.log("Error")
        }
    }
    searchMe.addEventListener("click",runTheSearch) 