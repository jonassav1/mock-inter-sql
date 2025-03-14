import db from "../../db.js";

function search() {
  const findMovie = db.prepare(
    `SELECT title FROM movies WHERE title LIKE ? LIMIT 10`
  );
  const results = findMovie.all(`%wars%`);
  console.table(results);
}
search();

function moviesByPage(page, pageSize) {
  const offset = (page - 1) * pageSize;
  const search = db.prepare(
    `SELECT title, year FROM movies ORDER BY year DESC LIMIT ? OFFSET ?;`
  );
  const result = search.all(pageSize, offset);
  console.table(result);
}

moviesByPage(2, 10);
