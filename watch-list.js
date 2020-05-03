let watchList =localStorage.getItem("watchList");  
watchList = JSON.parse(watchList)

let watchListContainer = document.getElementById("myWatchListContainer")


watchList.forEach(function(film){ 

  axios.get(`http://www.omdbapi.com/?apikey=bb36bae1&i=${film}`).then(data=>{ 
    

   let movie = document.createElement("div");  
   let myWatchListMovie= (`http://www.omdbapi.com/?apikey=bb36bae1&i=${film}`) 
   console.log(data.data.Title)
  movie.classList.add("movie");  
  let poster = document.createElement("img") 
  poster.classList.add("posters")
  poster.setAttribute("src",data.data.Poster) 
  let movieTitle = document.createElement("div"); 
  movieTitle.classList.add("movie-title")
  movieTitle.textContent = data.data.Title; 
  let releaseDate = document.createElement("div"); 
  releaseDate.classList.add("release-date")
  releaseDate.textContent = data.data.Year;  
  let typeOf = document.createElement("div") ;
  typeOf.classList.add("typeOf");
  typeOf.textContent=data.data.Type;    
  let imdbID = document.createElement("div"); 
  imdbID.textContent= data.imdbID;


  movie.appendChild(poster)
  movie.appendChild(movieTitle) 
  movie.appendChild(releaseDate)
  watchListContainer.appendChild(movie)
   })})




  

