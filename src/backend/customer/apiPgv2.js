const { Pool } = require('pg');
const { password } = require('pg/lib/defaults');


let pool = null;
let Config = {
    host: 'localhost',
    user: 'postgres',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    database: 'alcare_local',
    port: 5433,
    password: 'truongan123'
}

function getConnection(id, password) {
    if (pool === null) {
        pool = new Pool(Config);
    }

    return pool;
}

const closeDB = () => {
    pool.end().then(() => console.log('pool has ended'))
}

const getAllCustomer = async (username, password) => {
    const conn = getConnection()

    const result = await conn.query('select * from customer WHERE username = $1 AND password = $2', [username, password])
    console.log("in query getAllCustomer");
    console.log(result.rows);
    return result.rows;
}

const getCustomerById = async (id) => {
    const conn = getConnection()

    const result = await conn.query('select * customer($1)', [id])

    return result.rows[0];
}

module.exports = {
    getConnection,
    closeDB,
    getAllCustomer
}