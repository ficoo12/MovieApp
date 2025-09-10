export default class movieItem {
  constructor(
    title,
    overview,
    release_date,
    popularity,
    original_language,
    media_type,
    poster_path
  ) {
    this.title = title;
    this.overview = overview;
    this.release_date = release_date;
    this.popularity = popularity;
    this.original_language = original_language;
    this.media_type = media_type;
    this.poster_path = poster_path;
  }
}
