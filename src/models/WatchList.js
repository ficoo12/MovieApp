export default class WatchList {
  //static keyword defines static method or field for a class
  static getAll() {
    return JSON.parse(localStorage.getItem("favoriteMoviesList")) || [];
  }

  static add(movie) {
    const list = this.getAll();

    if (!list.some((m) => m.id === movie.id)) {
      list.push(movie);
      localStorage.setItem("favoriteMoviesList", JSON.stringify(list));
    }
    return list;
  }

  static remove(id) {
    const list = this.getAll().filter((m) => m.id !== id);
    localStorage.setItem("favoriteMoviesList", JSON.stringify(list));
    return list;
  }
}
