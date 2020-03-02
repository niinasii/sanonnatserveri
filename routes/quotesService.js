require('dotenv').config();
const Pool = require('pg').Pool;
const salasana = process.env.PGPASSWORD;
const pguser = process.env.PGUSER;
const conopts = {
    user: pguser,
    password: salasana,
    host: 'localhost',
    database: 'kurssi'
}

const allas = new Pool(conopts);

const getQuotes = (callback) => {
    allas.query("SELECT * FROM sanonnat", (error, data) => {
        console.dir(data.rows);
        callback(data.rows);
    })
}

const getQuote = (id, callback) => {
    allas.query("SELECT * FROM sanonnat where id =$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rows);
    })
}

const deleteQuotes = (callback) => {
    allas.query("DELETE * FROM sanonnat", (error, data) => {
        console.dir(data.rows);
        callback(data.rows);
    })
}

const deleteQuote = (id, callback) => {
    allas.query("DELETE FROM sanonnat WHERE id=$1", [id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const insertQuote = (newquote, callback) => {
    const { author, quotetext } = newquote;
    allas.query("INSERT INTO sanonnat (author, quotetext) VALUES ($1, $2)", [author, quotetext], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

const updateQuote = (quote, id, callback) => {
    const { author, quotetext } = quote;
    allas.query("UPDATE sanonnat SET author=$1, quotetext=$2 WHERE id=$3", [author, quotetext, id], (error, data) => {
        if (error) throw error;
        console.dir(data.rows);
        callback(data.rowCount);
    })
}

module.exports = { getQuotes, getQuote, insertQuote, deleteQuote, deleteQuotes, updateQuote }