import mysql from  'mysql2/promise'; //promise fungsi async berjalan paralel

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "batch_9"

});

export default db;