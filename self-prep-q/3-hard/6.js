//Creating new tables, altering an existing table (add a column, rename a column, and other SQLite-permitted operations)
// Creating new tables, altering existing tables (ADD COLUMN, RENAME COLUMN, etc.)

import db from "../../db.js";

function createTable() {
  const create = db.prepare(
    `CREATE TABLE company(
    id INTEGER PRIMARY KEY, 
    name TEXT NOT NULL, 
    creation_year INTEGER, 
    movie_id INTEGER,
    FOREIGN KEY(movie_id) REFERENCES movies (id))`
  );
  create.run();
  console.log("Company table created");
}
// createTable();

function alterTable() {
  const rename = db.prepare(`ALTER TABLE company RENAME TO comp`);
  rename.run();
  console.log("table renamed");
}
// alterTable();

function addColumn() {
  const add = db.prepare(`ALTER TABLE comp ADD COLUMN location text`);
  add.run();
  console.log("new collumn added");
}
// addColumn();

function addRow() {
  const insert = db.prepare(
    `INSERT INTO comp (name, creation_year) VALUES (?, ?)`
  );

  const result = insert.run("NewCompany", 2024);
  console.log(`Row added! New row ID: ${result.lastInsertRowid}`);
}
// addRow();

function updateTable() {
  const update = db.prepare(
    `UPDATE comp SET creation_year = 2012, name = 'testy3000' WHERE creation_year = 2024`
  );
  update.run();
  console.log("table updated");
}
// updateTable();

function deleteRow() {
  const del = db.prepare(`DELETE FROM comp WHERE creation_year = 2012`);
  del.run();
  console.log("row deleted");
}
// deleteRow();

function deleteTable() {
  const drop = db.prepare(`DROP TABLE IF EXISTS comp`);
  drop.run();
  console.log("table deleted");
}
deleteTable();
