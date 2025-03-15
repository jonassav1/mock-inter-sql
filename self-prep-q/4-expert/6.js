// Transactions(BEGIN, COMMIT, ROLLBACK);
//Transactions
//write a query to delete table you just created but use transactions

import db from "../../db.js";

function transactions() {
  try {
    const begin = db.prepare(`BEGIN TRANSACTION`);
    begin.run();
    const del = db.prepare(`DROP TABLE company`);
    del.run();
    const commit = db.prepare(`COMMIT`);
    commit.run();
  } catch (error) {
    console.log("Transaction failed and the error is: ", error);
    const rollb = db.prepare(`ROLLBACK`);
    rollb.run();
  }
}
transactions();
