let databasePath = 'src/database/test.db';
let databasePathv1 = 'src/database/testCrptyo.db';
import Database from 'better-sqlite3-multiple-ciphers';

export const getTest = () => {
  console.log("HEHE");

}

export const getAllCustomer = async () => {
  /**
   * starting connection
   */

  let page = 1;


  const database = Database(databasePathv1);
  // const database = require('better-sqlite3-multiple-ciphers')(databasePathv1);
  // const database = require('better-sqlite3')(databasePath);
  database.pragma("key='secret-key'");

  /**
   * selecting all in the interval to 10 for each page
   */
  const sqlScript = `SELECT * FROM 'customer'`;
  // WHERE(id > ? AND id <= ?);`


  /**
   * preparing and running script
   */

  const dbResponse = database.prepare(sqlScript).all();
  // const dbResponse = database.prepare(sqlScript).all(((page-1)*10), (page*10));

  /**
   * for pagination
   *
   * the number of all in database
   */

  const numberOfProducts = database.prepare('SELECT * FROM customer;').all().length;

  /**
   * organizing to be more clear in the react app
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
    const insertMany = database.transaction((cats) => {
      for (const cat of cats) insert.run(cat);
    });

    insertMany([
      { password: "secret" },
      { password: "secret" },
      { password: "secret" },
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
