import Database from "better-sqlite3";
import dotenv from "dotenv";

dotenv.config(); // loads enviromental variables (for one of the take home questions (9th question))

const db = new Database("./movies/movies.db", { verbose: console.log }); //verbose clg logs every sql query i run in the database movies

process.on("exit", () => {
  db.close();
  console.log("sqlite database connection closed");
});
export default db;
