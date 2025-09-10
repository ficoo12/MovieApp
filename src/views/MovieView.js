export default class MovieView {
  constructor() {
    this.moviesContainer = document.querySelector(".moviesContainer");
  }

  render(movies, addHandler, detailHandler) {
    this.moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
      let movieItem = `
        <div class="movieCard">
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

      this.moviesContainer.insertAdjacentHTML("beforeend", movieItem);
    });

    // console.log(document.querySelectorAll(".AddToListBtn"));
    document.querySelectorAll(".AddToListBtn").forEach((btn) =>
      btn.addEventListener("click", (e) => {
        // console.log("btn");
        addHandler(Number(e.target.dataset.id));
      })
    );

    document.querySelectorAll(".seeMoreLink").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        detailHandler(Number(e.target.href.split("#")[1]));
      });
    });
  }
}
