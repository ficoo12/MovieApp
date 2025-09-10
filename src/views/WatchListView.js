export default class WatchListView {
  constructor() {
    this.whatchListContainer = document.querySelector(".watchListContainer");
  }
  render(watchList, removeHandler) {
    this.whatchListContainer.innerHTML = "";
    watchList.forEach((movie) => {
      let movieItem = `
        <div class="movieCard">
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
          <div class="movieCard_content">
            <h3>${movie.title}</h3>
            <p>${movie.overview.substring(0, 30)}...</p>
            <button data-id="${
              movie.id
            }" class="RemoveFromTheListBtn">Remove</button>
            <a href="#${movie.id}" class="seeMoreLink">Read more</a>
          </div>
        </div>`;

      console.log(movieItem);

      this.whatchListContainer.insertAdjacentHTML("beforeend", movieItem);
    });

    document.querySelectorAll(".RemoveFromTheListBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        removeHandler(Number(e.target.dataset.id));
      });
    });
  }
}
