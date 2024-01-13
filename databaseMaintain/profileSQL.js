// const mysql = require('mysql2');
// const {pool} =require("./dbPool")

const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config()
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}).promise();



// const pool=mysql.createPool({
//     host:process.env.MYSQL_HOST,
//     user:process.env.MYSQL_USER,
//     password:process.env.MYSQL_PASSWORD,
//     database:process.env.MYSQL_DATABASE

// }).promise()




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

const get_video_overview= `SELECT  cc.course_name,cc.course_start,cc.course_end,cc.course_price,cc.course_description,cs.subject_name,cv.video_chapter,cv.video_title,cv.video_description
FROM edtech.current_subjects AS cs
INNER JOIN edtech.current_courses AS cc ON cc.course_id = cs.course_id
INNER JOIN edtech.current_videos AS cv ON cv.subject_id = cs.subject_id
`;
const get_video_user_acess= `SELECT  cc.course_name,cc.course_start,cc.course_end,cc.course_price,cc.course_description,cs.subject_name,cv.video_chapter,cv.video_title,cv.video_description,cv.video_url,cv.video_tags
FROM edtech.current_subjects AS cs
INNER JOIN edtech.current_courses AS cc ON cc.course_id = cs.course_id
INNER JOIN edtech.current_videos AS cv ON cv.subject_id = cs.subject_id
`;

async function VideoUserAcess(course_name,subject,chapter) {
    try {
        const [result]=await pool.query(get_video_user_acess+
            `WHERE cc.course_name = ? 
            AND cs.subject_name = ?
            AND cv.video_chapter = ?;`,[course_name,subject,chapter])
        return result
    } catch (error) {
        return "VideoUserAcess course,subject,chapter ERROR"
    }
}
async function  videoOverview(course_name,subject,chapter) {
    if (chapter) {
        // console.log(chapter)
        try {
            const [result]=await pool.query(get_video_overview+
                `WHERE cc.course_name = ? 
                AND cs.subject_name = ?
                AND cv.video_chapter = ?;`,[course_name,subject,chapter])
            return result
        } catch (error) {
            return "videoOverview course,subject,chapter ERROR"
        }
    } else if (subject) {
        // console.log(subject)
        try {
            const [result]=await pool.query(get_video_overview+
                `WHERE cc.course_name = ? 
                AND cs.subject_name = ?;`,[course_name,subject])
            return result
        } catch (error) {
            return "videoOverview course,subject ERROR"
        }
    }else if (course_name) {
        // console.log(course_name)
        try {
            const [result]=await pool.query(get_video_overview+`WHERE cc.course_name = ?;`,[course_name])
            return result
        } catch (error) {
            return "videoOverview course ERROR"
        }
    }
    else{
        try {
            const [result]=await pool.query(get_video_overview+`;`)
            return result
        } catch (error) {
            return "videoOverview ERROR"
        }
    }
    
}

module.exports = { getNote,getNotes, createNote,testing,login ,pool,videoOverview,VideoUserAcess };

