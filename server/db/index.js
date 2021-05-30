const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PG_USER,      //postgres user
    host: process.env.PG_HOST,  //localhost (I also tried 127.0.0.1)
    database: process.env.PG_DB,    //database name to connect to
    password: process.env.PG_PASS,  //postgres user password
    port: process.env.PG_PORT,
    //"max":20,
    //"connectionTimeoutMillis":0,
    //"idleTimeoutMillis":0

});
//pool.connect();
// module.exports=pool;
module.exports = {
  query: (text, params) => pool.query(text, params),
};
