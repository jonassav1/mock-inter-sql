import db from "../../db.js";

function sort() {
  const query = db
    .prepare(
      `SELECT title, year, rating FROM movies JOIN ratings
        ON movies.id = ratings.movie_id ORDER BY ?, ? LIMIT 10`
    )
    .all("year", "ASC");
  console.table(query);
}
sort();

function filter() {
  const queryFilter = db
    .prepare(
      `SELECT title,year,rating FROM movies JOIN ratings ON movies.id = ratings.movie_id 
        WHERE year = ? AND rating >= ? LIMIT 10;
`
    )
    .all(2010, 7.5);
  console.table(queryFilter);
}
filter();

function count() {
  const countMovies = db.prepare(`SELECT COUNT(*) FROM movies`).get();
  console.log(countMovies);
}
count();
