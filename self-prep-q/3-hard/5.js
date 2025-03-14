//Reading SQL files and performing SQLite queries within Node.js

// write node.js script that reads sql file and executes sql query inside it and print results in console as a table.

import db from "../../db.js";
import { readFile } from "node:fs/promises";

const data = await readFile("self-prep-q/3-hard/5-sql.sql", "utf-8");

function executeSql() {
  const execute = db.prepare(data).all();
  console.table(execute);
}
executeSql();
