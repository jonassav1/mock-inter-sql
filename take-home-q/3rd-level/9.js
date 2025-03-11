import db from "../../db.js";

const favDirector = process.env.FAVORITE_DIRECTOR;
const movieFavDirector = db
  .prepare(
    "SELECT movies.title FROM movies JOIN directors ON movies.id = directors.movie_id JOIN people ON directors.person_id = people.id WHERE name = ?"
  )
  .all(favDirector);

console.table(movieFavDirector);
