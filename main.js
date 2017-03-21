aryMovies = []
console.log("aryMovies is an array? " + Array.isArray(aryMovies))

function addToMovies() {
  args = [].slice.call(arguments) // convert arguments object to array
  args.forEach(
    function(jsonOfMovie){
      aryMovies.push(JSON.parse(jsonOfMovie))
    }
  )
}

addToMovies(
  '{"Title":"Youth Without Youth","Year":"2007","Rated":"R","Released":"26 Oct 2007","Runtime":"124 min","Genre":"Drama, Fantasy, Mystery","Director":"Francis Ford Coppola","Writer":"Mircea Eliade (novel), Francis Ford Coppola (screenplay)","Actors":"Tim Roth, Alexandra Maria Lara, Bruno Ganz, André Hennicke","Plot":"A love story wrapped in a mystery. Set in World War II Europe, a professor is changed by a cataclysmic event and explores the mysteries of life.","Language":"English, Sanskrit, German, French, Italian, Russian, Romanian, Mandarin, Latin, Armenian","Country":"USA, Romania, France, Italy, Germany","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BNjU1NzA1OTkxM15BMl5BanBnXkFtZTcwMzgzMDM1MQ@@._V1_SX300.jpg","Metascore":"43","imdbRating":"6.3","imdbVotes":"11,613","imdbID":"tt0481797","Type":"movie","Response":"True"}',
  '{"Title":"K-PAX","Year":"2001","Rated":"PG-13","Released":"26 Oct 2001","Runtime":"120 min","Genre":"Drama, Sci-Fi","Director":"Iain Softley","Writer":"Gene Brewer (novel), Charles Leavitt (screenplay)","Actors":"Kevin Spacey, Jeff Bridges, Mary McCormack, Alfre Woodard","Plot":"PROT is a patient at a mental hospital who claims to be from a far away planet. His psychiatrist tries to help him, only to begin to doubt his own explanations.","Language":"English","Country":"USA, Germany","Awards":"3 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BOTY4MTA5NDk3MV5BMl5BanBnXkFtZTgwMTA5MDgxMTE@._V1_SX300.jpg","Metascore":"49","imdbRating":"7.4","imdbVotes":"154,323","imdbID":"tt0272152","Type":"movie","Response":"True"}',
  '{"Title":"Kubo and the Two Strings","Year":"2016","Rated":"PG","Released":"19 Aug 2016","Runtime":"101 min","Genre":"Animation, Adventure, Family","Director":"Travis Knight","Writer":"Marc Haimes (screenplay), Chris Butler (screenplay), Shannon Tindle (story by), Marc Haimes (story by)","Actors":"Art Parkinson, Charlize Theron, Ralph Fiennes, Brenda Vaccaro","Plot":"A young boy named Kubo must locate a magical suit of armor worn by his late father in order to defeat a vengeful spirit from the past.","Language":"English","Country":"USA","Awards":"Nominated for 2 Oscars. Another 27 wins & 50 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SX300.jpg","Metascore":"84","imdbRating":"7.9","imdbVotes":"63,920","imdbID":"tt4302938","Type":"movie","Response":"True"}',
  '{"Title":"Coriolanus","Year":"2011","Rated":"R","Released":"20 Jan 2012","Runtime":"123 min","Genre":"Drama, Thriller, War","Director":"Ralph Fiennes","Writer":"John Logan (screenplay), William Shakespeare (play)","Actors":"Gerard Butler, Ralph Fiennes, Lubna Azabal, Ashraf Barhom","Plot":"A banished hero of Rome allies with a sworn enemy to take his revenge on the city.","Language":"English","Country":"UK","Awards":"Nominated for 1 BAFTA Film Award. Another 10 wins & 16 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjAwMjA2N15BMl5BanBnXkFtZTcwOTI0MjA0Ng@@._V1_SX300.jpg","Metascore":"79","imdbRating":"6.2","imdbVotes":"27,694","imdbID":"tt1372686","Type":"movie","Response":"True"}',
  '{"Title":"Gettysburg","Year":"1993","Rated":"PG","Released":"08 Oct 1993","Runtime":"271 min","Genre":"Drama, History, War","Director":"Ron Maxwell","Writer":"Michael Shaara (novel), Ron Maxwell (screenplay)","Actors":"Tom Berenger, Martin Sheen, Stephen Lang, Richard Jordan","Plot":"In 1863, the Northern and Southern forces fight at Gettysburg in the decisive battle of the American Civil War.","Language":"English","Country":"USA","Awards":"1 win & 1 nomination.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMjE3NDg4NV5BMl5BanBnXkFtZTcwMDI3MTE2Mw@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.7","imdbVotes":"22,468","imdbID":"tt0107007","Type":"movie","Response":"True"}',
  '{"Title":"Top Secret!","Year":"1984","Rated":"PG","Released":"08 Jun 1984","Runtime":"90 min","Genre":"Comedy, Music","Director":"Jim Abrahams, David Zucker, Jerry Zucker","Writer":"Jim Abrahams, David Zucker, Jerry Zucker, Martyn Burke","Actors":"Val Kilmer, Lucy Gutteridge, Peter Cushing, Jeremy Kemp","Plot":"Parody of WWII spy movies in which an American rock and roll singer becomes involved in a Resistance plot to rescue a scientist imprisoned in East Germany.","Language":"English, German, Yiddish","Country":"UK, USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMmNhMTZlMmItMDRkYy00YjBlLThiZTEtZDQ1ZjNmYWM4NWVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.2","imdbVotes":"48,308","imdbID":"tt0088286","Type":"movie","Response":"True"}'
)

aryMovies.sort(function(a, b){
  var a = a.Title, b = b.Title
  if(a < b) return -1  //sort string ascending
  if(a > b) return 1   //sort string descending
  return 0             //no sorting
})

aryMovies.forEach(function(ary){
  console.log(ary.Title)
})

element = document.getElementById('content')
element.innerHTML += "<ul></ul>"
element.innerHTML += "<div id=\"fav-movies\"><h2>Favorite Films</h2><ul></ul></div>"
film_list = document.querySelector("#fav-movies ul")

function getMovieFromOMDb(title){
  query = "http://www.omdbapi.com/?t=" + title
  fetch(query, { method: 'POST' })
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      film_list.innerHTML += "<li><strong><em>&ldquo;" + data.Title + "&rdquo;</em></strong> (" + data.Year + "): " +
      "<ul>" +
        "<li><u>Director</u>: " + data.Director + "</li>" +
        "<li><u>Genre</u>: " + data.Genre + "</li>" +
        "<li><u>Actors</u>: " + data.Actors + "</li>" +
      "</li>"
    })
}

getMovieFromOMDb("Kubo and the Two Strings")
getMovieFromOMDb("Coriolanus")
getMovieFromOMDb("Youth Without Youth")
getMovieFromOMDb("Gettysburg")
getMovieFromOMDb("Top Secret!")
getMovieFromOMDb("K-PAX")


// console.log(JSON.stringify(arr))
