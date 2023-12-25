const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()

const pool=mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE

}).promise()
async function getNote(id) {
    const [rows]=await pool.query(`
    SELECT *
    FROM user_profile
    WHERE id = ?
    `,[id])
    return rows[0]
}
async function getNotes() {
    const [rows]=await pool.query("SELECT * FROM user_profile");
    return rows;
}
async function login(email,password) {
    const [rows]=await pool.query(`
    SELECT *
    FROM user_profile
    WHERE user_email = ? 
    AND user_password = ?
    `,[email,password])
    return rows[0]
}

async function createNote (user_name, user_age, user_email, user_password, user_profile, user_other_data) {
    try {
        const [result]=await pool.query(`
        INSERT INTO user_profile (user_name, user_age, user_email, user_password, user_profile, user_other_data)
        VALUES (?,?,?,?,?,?)
        `,[user_name, user_age, user_email, user_password, user_profile, user_other_data])
        return getNote(result.insertId)
    } catch (error) {
        return "INSERTING ERROR"
    }
}

function testing(params) {
    console.log(params);
}
// async function get() {
//     let a = await login("tttt@gmmj.com",789878);
//     console.log(a);
// }
// get()
module.exports = { getNote,getNotes, createNote,testing,login };

