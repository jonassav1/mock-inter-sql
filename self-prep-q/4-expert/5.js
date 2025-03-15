// Database Migrations

// create new table company add four columns into it id, name creation_year, and foreign key movie_id referencing movies,
// then in seperate funcion rename creation_year to established_year
// then in separate function add collumn genre
// then in spearate function delete genre column

import db from "../../db.js";

function create() {
  const creation = db.prepare(`CREATE TABLE company (
    id INTEGER PRIMARY KEY, 
    name TEXT,
    creation_year INTEGER,
    movie_id INTEGER NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES movies (id)

    )`);
  creation.run();
}
create();

function alterColumn() {
  const alter = db.prepare(
    `ALTER TABLE company RENAME COLUMN creation_year TO established_year`
  );
  alter.run();
}
alterColumn();

function addColumn() {
  const add = db.prepare(`ALTER TABLE company ADD COLUMN genre TEXT`);
  add.run();
}
addColumn();

function delCol() {
  try {
    db.exec(
      `CREATE TABLE company_new AS SELECT id, name, established_year, movie_id FROM company`
    );
    db.exec(`DROP TABLE company`);
    db.exec(`ALTER TABLE company_new RENAME TO company`);
  } catch (error) {
    console.error("An error has occured", error.message);
  }
}
delCol();
//exec means it runs all the sql statemens at once
