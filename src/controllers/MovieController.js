import { fetchMovies, fetchMovieDetails } from "../services/api.js";
import MovieView from "../views/MovieView.js";
import WatchListView from "../views/WatchListView.js";
import ModalView from "../views/ModalView.js";
import WatchList from "../models/WatchList.js";

export default class MovieController {
  constructor() {
    this.MovieView = new MovieView();
    this.WatchListView = new WatchListView();
    this.ModalView = new ModalView();
    this.searchBar = document.querySelector(".searchBar");

    this.allMovies = [];

    console.log("ModalView instance:", this.ModalView);
    console.log("Render method:", this.ModalView.render);

    this.init();
  }

  async init() {
    this.searchBar.addEventListener("input", async (e) => {
      const value = e.target.value.trim();
      // console.log(value);
      const movieData = await fetchMovies(value);

      this.MovieView.render(
        movieData.results,
        (id) => this.addToWatchList(id),
        (id) => this.showDetails(id)
      );

      this.allMovies = movieData.results;
    });

    // console.log(movieData);
    // console.log(movieData.results[0].title);

    const movieData = await fetchMovies();
    this.MovieView.render(
      movieData.results,
      (id) => this.addToWatchList(id),
      (id) => this.showDetails(id)
    );

    this.allMovies = movieData.results;

    this.WatchListView.render(WatchList.getAll(), (id) =>
      this.removeFromWhatchList(id)
    );

    window.addEventListener("hashchange", () =>
      this.showDetails(window.location.hash.slice(1))
    );
  }

  addToWatchList(id) {
    const movie = this.allMovies.find((m) => m.id === id);
    if (!movie) return;
    const updatedList = WatchList.add(movie);
    this.WatchListView.render(updatedList, (id) =>
      this.removeFromWhatchList(id)
    );
  }

  removeFromWhatchList(id) {
    const updatedList = WatchList.remove(id);
    this.WatchListView.render(updatedList, (id) =>
      this.removeFromWhatchList(id)
    );
  }

  async showDetails(id) {
    const movieData = await fetchMovieDetails(id);
    this.ModalView.render(movieData, () => {
      window.location.hash = "";
    });
  }
}
