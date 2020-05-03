


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
        
        const movie = currentMovie.imdbID;

        if (watchList.includes(movie)){ 
            console.log("This movie is already in users, WatchList")
        } 
        else{
        watchList.push(movie)   

        let watchListJSON = JSON.stringify(watchList) 
        watchList = JSON.parse(watchListJSON) 
        localStorage.setItem("watchList", watchListJSON)
        watchListJSON = localStorage.getItem("watchList") 
        
        
    }})
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
    
    let logo = document.getElementById("logo")
    function runTheSearch(e){  
        e.preventDefault()   
        let searchString = $("#search-form").val();  
        
        const urlEncodedSearchString = encodeURIComponent(searchString)
        axios.get("http://www.omdbapi.com/?apikey=bb36bae1&s="+ urlEncodedSearchString
        ).then( function(response) {
             
           let movieSearchArray = response.data.Search;  
          
           movieContainer.innerHTML=""
           movieSearchArray.forEach(
               createMovieInfo
           )})
           
                
            

        }
    
    searchMe.addEventListener("click",runTheSearch) 