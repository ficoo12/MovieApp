export default class ModalView {
  constructor() {
    this.modalWindow = document.querySelector(".modalWindow");
  }
  close() {
    this.modalWindow.style.display = "none";
    this.modalWindow.innerHtml = "";
  }

  render(movie) {
    this.modalWindow.innerHTML = `
      <div class="movieDetails">
        <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" alt="${movie.title}">
        <div class="movieContent">
          <div>
            <h2>${movie.title}</h2>
            <p><b>Overview:</b> ${movie.overview}</p>
            <p><b>Release Date:</b> ${movie.release_date}</p>
            <p><b>Language:</b> ${movie.original_language}</p>
            <button class="closeModalBtn">Close</button>
          </div>
        </div>
      </div>
    `;

    this.modalWindow.style.display = "flex";

    document.querySelector(".closeModalBtn").addEventListener("click", () => {
      this.close();
    });
  }
}
