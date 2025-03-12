import { argv } from "process";
import db from "../../db.js";

function checkCommandLine() {
  if (argv.length <= 3) {
    console.log("Please enter title and year of the movie.");
    process.exit(1);
  } else {
    const movieTitle = process.argv[2];
    const movieYear = process.argv[3];
    return [movieTitle, movieYear];
  }
}

function checkIfMovieExists(title, year) {
  const checkForMovie = db
    .prepare(
      " SELECT exists(SELECT 1 FROM movies WHERE title = ? AND year = ?) as row_exists"
    )
    .get(title, Number.parseInt(year, 10));
  if (checkForMovie.row_exists === 1) {
    //im checking if we return row_exists as 1 or 0 if we getback 1 from select it exists otherwise we get back 0
    return true;
  } else {
    console.log("Movie doesnt exist");
    return false;
  }
}

function insertMovieIntoDatabase(title, year) {
  if (checkIfMovieExists(title, year)) {
    console.log("Movie already exists.");
    return;
  }
  const transaction = db.transaction(() => {
    try {
      db.prepare("INSERT INTO movies(title, year) VALUES(?, ?)").run(
        title,
        Number.parseInt(year, 10)
      );
      const checkMovieId = db
        .prepare("SELECT id FROM movies WHERE title = ? AND year = ?")
        .get(title, Number.parseInt(year, 10));
      console.log("Movie added to the database.");
      console.table(checkMovieId);
    } catch (error) {
      console.error(
        "An error has occured while inserting the movie into the database: ",
        error.message
      );
      transaction.rollback();
    }
  });
  transaction();
}

const [title, year] = checkCommandLine();
const movieYear = Number.parseInt(year, 10); // Im making sure its integer
insertMovieIntoDatabase(title, movieYear);
