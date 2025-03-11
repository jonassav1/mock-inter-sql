import db from "./db.js";

const movie = db
  .prepare("SELECT * FROM movies WHERE title LIKE '%Joe' LIMIT 3")
  .all();
console.log(movie);

// im using this place to write queires before i put them into take home questions and self prep q
// Also im using test-db to check if the issue is in my js file where i write complex sql query or if the issue is in database if it works in test
//then my db.js is fine and i need to fix my sql query
