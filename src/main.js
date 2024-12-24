import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
 <header>
     
<div class ="di">
        <img src="src/images/IMG-20241211-WA0101.jpg" alt="" />
      <div id = "n1">
        <nav>
         <a href="index.html"><p>Home</p></a>
          <a href="details.html"><p>Discover</p></a>
          <a href=""><p>Movie Release</p></a>
          <a href=""><p>Forum</p></a>
          <a href=""><p>About</p></a>
        </nav>
      </div>

      <div id="n2">
        <div id="n3">
            <div id="n4">
              <img src="src/images/download (1).png" alt="" style="width: 8%;">
             <button class ="t4">Sign up</button>
                <button class ="t5">Login</button>
            </div>
        </div>
      </div>
</div>
    
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext"></div>
    <img src="/src/images/w1.jpg" class = "f">
    <div class="text"></div>
     <div id= "main">
        <button>Season 3</button>
        <h1>The Mandalorian</h1>
        <p>2h40m.2022.Fantsy.Action</p>
        <p>
          The third season of the American television series the Mandalorian
          stars <br />Pedro Pascal as the title character a bounty hunter
          traveling to maondolore to <br />
          redeem his past transgressin with his adopted son Grogu and being
          aided <br />
          on thier journey by fellow Mandorian Bo-Katan Kryze
        </p>
        <div id = "b1">
          <button class ="t1"><img src="src/images/play_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Play Now</button>
          <button class ="t3"><img src="src/images/bookmark_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Add Watchlist</button>
        </div>
      </div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext"></div>
    <img src="/src/images/w1.jpg" class = "f">
    <div class="text"></div>
     <div id= "main">
        <button>Season 3</button>
        <h1>The Mandalorian</h1>
        <p>2h40m.2022.Fantsy.Action</p>
        <p>
          The third season of the American television series the Mandalorian
          stars <br />Pedro Pascal as the title character a bounty hunter
          traveling to maondolore to <br />
          redeem his past transgressin with his adopted son Grogu and being
          aided <br />
          on thier journey by fellow Mandorian Bo-Katan Kryze
        </p>
        <div id = "b1">
          <button class ="t1"><img src="src/images/play_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Play Now</button>
          <button class ="t3"><img src="src/images/bookmark_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Add Watchlist</button>
        </div>
      </div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext"></div>
    <img src="/src/images/w1.jpg" class = "f">
    <div class="text"></div>
     <div id= "main">
        <span>Season 3</span>
        <h1>The Mandalorian</h1>
        <p>2h40m.2022.Fantsy.Action</p>
        <p>
          The third season of the American television series the Mandalorian
          stars <br />Pedro Pascal as the title character a bounty hunter
          traveling to maondolore to <br />
          redeem his past transgressin with his adopted son Grogu and being
          aided <br />
          on thier journey by fellow Mandorian Bo-Katan Kryze
        </p>
        <div id = "b1">
          <button class ="t1"><img src="src/images/play_circle_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Play Now</button>
          <button class ="t3"><img src="src/images/bookmark_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" alt="" /> Add Watchlist</button>
        </div>
      </div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>

 
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
</div>
      </header>
      
    <main>
      <div id = "l1">
        <img src="src/images/dis.png" alt="" />
        <img src="src/images/IMG-20241211-WA0102.jpg" alt="" />
        <img src="src/images/IMG-20241211-WA0104.jpg" alt="" />
        <img src="src/images/IMG-20241211-WA0105.jpg" alt="" />
        <img src="src/images/IMG-20241211-WA0106.jpg" alt="" />
        <img src="src/images/IMG-20241211-WA0107.jpg" alt="" />
        <img src="src/images/WhatsApp Image 2024-12-11 at 11.05.28_805d73e4.jpg" alt="">
      </div>

      <section id = "s1">
        <h2>Popular of the week</h2>
        <div id = "d1">
         
        </div>
      </section>
      
      <div class="swiper">
      <h2>Just release</h2>
  <div class="swiper-wrapper" id="s4">
    <!-- Movie slides will be inserted here -->
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>


      <section id = "s3">
        <h2>Your Watchlist</h2>
         <section id="s6"></section> 
      </section>

      <section id= "s5">
        <div id = "d13">
         </div>

      </section>

      <h3>Your likes</h3> 
      <div id= "i1">
      </div>
      
    </main>

    <footer>
      <section id="f1">
        <div>
          <nav>
            <a href="index.html">Home/</a>
            <a href="details.html">Discover/ </a>
            <a href="">Movie Release/ </a>
            <a href="">Forum/ </a>
            <a href="">About/</a>
          </nav>
        </div>
      </section>
      <section id= "f2">
        <h1>
          Our platform is trusted by millions & features best updated movies all the world.
        </h1>

        <div id ="footimg">
          <img src="src/images/instagram2.png" alt="">
          <img src="src/images/facebook2.png" alt="">
          <img src="src/images/linkedin.png" alt="">
          <img src="src/images/x2.png" alt="">
        </div>
      </section>

      <section>
        <div id= "policy">
          <a href=""><p>Privacy policy</p></a>
            <a href=""><p>Term of service</p></a>
            <a href=""><p>Language</p></a>
        </div>
        <div>
          <p></p>
        </div>
      </section>
    </footer>
`
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

    const sec = document.getElementById('s4');
    data.results.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'movie-container';

      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";

      const image = document.createElement('img');
      image.src = posterPath;
      image.alt = movie.original_title;
      image.className = 'movie-img2';
      movieDiv.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = movie.original_title;
      title.className = 'movie-title2';
      movieDiv.appendChild(title);

      const rating = document.createElement("p");
      rating.innerHTML = `&#11088; ${movie.vote_average}`;
      rating.className = 'movie-rating';
      movieDiv.appendChild(rating);

      sec.appendChild(movieDiv);
    });
  })
  .catch((err) => console.error(err));


options = {
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

    const sec = document.getElementById('d1');
    data.results.forEach((movie, index) => {
      const movieDiv = document.createElement('div');
      movieDiv.className = 'movie-container1';

      const indexDiv = document.createElement('div');
      indexDiv.className = 'movie-index';
      indexDiv.textContent = index + 1;
      movieDiv.appendChild(indexDiv);

      const posterPath = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";

      const image = document.createElement('img');
      image.src = posterPath;
      image.alt = movie.original_title;
      image.className = 'movie-img1';
      movieDiv.appendChild(image);

      const infoDiv = document.createElement('div');
      infoDiv.className = 'movie-info';

      const title = document.createElement('h3');
      title.textContent = movie.original_title;
      title.className = 'movie-title1';
      infoDiv.appendChild(title);

      const rating = document.createElement("p");
      rating.innerHTML = `&#11088; ${movie.vote_average}`;
      rating.className = 'movie-rating';
      infoDiv.appendChild(rating);

      movieDiv.appendChild(infoDiv);

      sec.appendChild(movieDiv);
    });
  })
  .catch((err) => console.error(err));

options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWYzNjNmOWY5YTNjNTUzNTE0OWM5MDk3MGZhMjMxMSIsIm5iZiI6MTczMzUxMDAxOS40MTYsInN1YiI6IjY3NTM0MzgzODcxYTQyYzljMjQ1NDFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FgU6EplfTnUB-e6GZZfUI7lO0Ad71oYwG54qzjXpozo",
  },
};
fetch(
  'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const sec2 = document.getElementById('s6')
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
      rating.innerHTML = `&#11088; ${movie.vote_average}`;
      rating.className = 'movie-rating';
      movieDiv.appendChild(rating);

      const re = document.createElement('p')
      re.innerHTML = `${movie.release_date}`
      re.className ='movie-rating'
      movieDiv.appendChild(re)

      sec2.appendChild(movieDiv);
    })
})
.catch((err) => console.error(err));

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


fetch(
  'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
  options
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const sec2 = document.getElementById('i1')
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
      rating.innerHTML = `&#11088; ${movie.vote_average}`;
      rating.className = 'movie-rating';
      movieDiv.appendChild(rating);
    
      const re = document.createElement('p')
      re.innerHTML = `${movie.release_date}`
      re.className ='movie-rating'
      movieDiv.appendChild(re)

      sec2.appendChild(movieDiv);
    })
})
.catch((err) => console.error(err));

//setupCounter(document.querySelector('#counter'))
