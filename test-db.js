import db from "./db.js";

const movie = db
  .prepare(
    "SELECT name, (2024 - birth) AS age FROM people WHERE birth IS NOT NULL ORDER BY birth ASC LIMIT 10"
  )
  .all();
console.log(movie);
const taran = db
  .prepare(
    "SELECT name FROM people WHERE name LIKE 'Quentin%' AND name NOT LIKE '%Tarantino';"
  )
  .all();
console.table(taran);
// im using this place to write queires before i put them into take home questions and self prep q
// Also im using test-db to check if the issue is in my js file where i write complex sql query or if the issue is in database if it works in test
//then my db.js is fine and i need to fix my sql query

//use console.table instead of log because it looks better.
