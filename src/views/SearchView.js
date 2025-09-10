export default class SearchView {
  constructor() {
    this.searchTab = document.querySelector(".searchMovies");
    this.sectionHeading = document.querySelector(".moviesSectionHeading");
    this.moviesContainer = document.querySelector(".moviesContainer");
  }

  render(movies) {
    this.moviesContainer = "";
    movies.forEach((movie) => {
      let MovieItem = `<div class="movieCard">
          <img src="https://image.tmdb.org/t/p/w200/${movie.poster_path}">
          <div class="movieCard_content">
            <h3>${movie.title}</h3>
            <p>${movie.overview.substring(0, 30)}...</p>
            <button data-id="${
              movie.id
            }" class="AddToListBtn">Add to Watchlist</button>
            <a href="/#${movie.id}" class="seeMoreLink">Read more</a>
          </div>
        </div>`;

      this.moviesContainer.insertAdjacentHTML("beforeend", MovieItem);
    });
  }
}
