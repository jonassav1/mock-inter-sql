//Performing queries within Node.js and filtering/transforming results

//filtering find all movie titles and ratings where actor is 'Leonardo DiCaprio' and rating
// transform the got titles if rating above 8 write it out as must watch

import db from "../../db.js";

function mustWatch() {
  const filter = db
    .prepare(
      `SELECT title, rating FROM movies LEFT JOIN ratings ON 
        movies.id = ratings.movie_id WHERE id IN (SELECT movie_id FROM stars WHERE person_id = (
        SELECT id FROM people WHERE name = 'Leonardo DiCaprio' ))`
    )
    .all();
  const transform = filter.map((row) => ({
    title: row.title,
    rating: row.rating,
    must_watch: row.rating > 8 ? "Must watch" : "Good movie",
  }));
  console.table(transform);
}
mustWatch();
