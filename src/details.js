import './style.css'

let options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
    },
  };
  fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
  
      const sec = document.getElementById('d30');
      data.results.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie-container';
  
        const posterPath = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image+Available";
  
        const image = document.createElement('img');
        image.src = posterPath;
        image.alt = movie.original_title;
        image.className = 'movie-img';
        movieDiv.appendChild(image);
  
        const title = document.createElement('h3');
        title.textContent = movie.original_title;
        title.className = 'movie-title';
        movieDiv.appendChild(title);
  
        const rating = document.createElement("p");
        rating.innerHTML = ` ${movie.overview}`;
        rating.className = 'movie-rating';
        movieDiv.appendChild(rating);
  
        sec.appendChild(movieDiv);
      });
    })
    .catch((err) => console.error(err));
  