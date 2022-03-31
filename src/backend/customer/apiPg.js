const { Client } = require('pg')



export const getAllCustomer = async () => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'mydb',
        password: 'truongan123',
        port: 5433,
    })

    client.connect();
    let result = "";
    client.query('SELECT NOW()', (err, res) => {
        console.log("in select");
        console.log(err, res)
        result = res;
        client.end()
    })
    return result;
}
