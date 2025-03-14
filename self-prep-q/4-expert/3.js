import db from "../../db.js";

function getMovieByActor(actor) {
  const getIt = db
    .prepare(
      `
        SELECT title, year, rating FROM movies JOIN ratings ON movies.id = ratings.movie_id
WHERE movies.id IN (SELECT movie_id FROM stars WHERE person_id = (
    SELECT id FROM people WHERE name = ?
)) ORDER BY ratings.rating DESC LIMIT 10;`
    )
    .all(actor);
  console.table(getIt);
}
getMovieByActor("Jack Lemmon");
