let databasePath = 'src/database/test.db';
let databasePathv1 = 'src/database/testCrptyo.db';
import Database from 'better-sqlite3-multiple-ciphers';

export const getTest = () => {
  console.log("HEHE");

}

export const getAllCustomer = async () => {

  let page = 1;

  /**
   * starting connection
   */
  const database = Database(databasePathv1);
  database.pragma("key='secret-key'");

  /**
   * selecting all in the interval
   */
  const sqlScript = `SELECT * FROM 'customer'`;
  // WHERE(id > ? AND id <= ?);`


  /**
   * preparing and running script
   */

  const dbResponse = database.prepare(sqlScript).all();

  /**
   * for pagination
   * const dbResponse = database.prepare(sqlScript).all(((page-1)*10), (page*10));
   */


  //  the number of all in database
  const numberOfProducts = database.prepare('SELECT * FROM customer;').all().length;

  /**
   * organizing to be more clear in the react app, use r object
   */
  const productInfo = {
    page,
    pages: (numberOfProducts / 10) + 1
  }
  const response = {
    data: dbResponse,
    productInfo
  };

  /**
   * disconect
   */
  database.close();
  return response;
}

export const insertListCustomer = async () => {

  let response;
  try {
    const database = require('better-sqlite3-multiple-ciphers')(databasePathv1, { fileMustExist: true });
    database.pragma("key='secret-key'");
    const insert = database.prepare('INSERT INTO customer (password) VALUES (@password)');
    const insertMany = database.transaction((items) => {
      for (const item of items) insert.run(item);
    });

    insertMany([
      { password: "secret1" },
      { password: "secret2" },
      { password: "secret3" },
    ]);

    response = {
      success: true,
    };
    database.close();

  } catch (error) {
    console.log(error);
    response = {
      success: false,
    };
    database.close();
  }

  /**
   * disconect
   */
  return response;
}
