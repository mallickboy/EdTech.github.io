const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config()
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();

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


const get_video_user_acess= `SELECT  tb.course_name,tb.course_start,tb.course_end,tb.course_price,tb.course_description,tb.subject_name,tb.video_chapter,tb.video_title,tb.video_description,tb.video_url,tb.video_tags
FROM edtech.acess_table AS tb 
`;

async function VideoUserAcess(course_name,subject,chapter) {
    try {
        const [result]=await pool.query(get_video_user_acess+
            `WHERE tb.course_name = ? 
            AND tb.subject_name = ?
            AND tb.video_chapter = ?;`,[course_name,subject,chapter])
        return result
    } catch (error) {
        return "VideoUserAcess course,subject,chapter ERROR"
    }
}


async function overview_courses(){ // independent search
    try {
        const [result]=await pool.query(`SELECT tb.course_name
        FROM edtech.current_courses AS tb;`)
        return result.map(item => item.course_name)
    } catch (error) {
        return "overview_courses ERROR"
    }
}
async function overview_subject(course_name){
    try {
        const [result]=await pool.query(`SELECT DISTINCT tb.subject_name
        FROM edtech.overview_table AS tb
        WHERE tb.course_name = ?;`,[course_name])
        return result.map(item => item.subject_name)
    } catch (error) {
        return "overview_subject ERROR"
    }
}
async function overview_chapter(course_name,subject_name){ // need to be changed wrt frontend to load balance
    try {
        const [result]=await pool.query(`SELECT DISTINCT tb.video_chapter
        FROM edtech.overview_table AS tb
        WHERE tb.course_name = ? and tb.subject_name = ?;`,[course_name,subject_name])
        // console.log(result)
        return result.map(item => item.video_chapter)
    } catch (error) {
        return "overview_subject ERROR"
    }
}
async function  overview_topic(course_name,subject,chapter) {
    if (chapter) {
        // console.log(chapter)
        try {
            const [result]=await pool.query(
                `SELECT DISTINCT tb.video_title
                FROM edtech.overview_table AS tb
                WHERE tb.course_name = ? 
                  AND tb.subject_name = ?
                  AND tb.video_chapter = ?;`,[course_name,subject,chapter])
            return result
        } catch (error) {
            return "overview_topic course,subject,chapter ERROR"
        }
    }
    
}
// overview_chapter('upsc 2025','history')
module.exports = { getNote,getNotes, createNote,testing,login ,pool,overview_topic,VideoUserAcess,overview_courses,overview_subject,overview_chapter };

