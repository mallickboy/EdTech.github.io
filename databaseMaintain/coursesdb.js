const {pool} =require("./profileSQL")
async function insertFile(courseName, year, contentType, subject, filename, relativeFilePath) {
    const [result] = await pool.query(`
      INSERT INTO orgfiles (course_name, year, content_type, subject, file_name, file_link)
      VALUES (?, ?, ?, ?, ?, ?)
    `, [courseName, year, contentType, subject, filename, relativeFilePath]);
    return result;
  }
  
  async function getFile(id) {
    const [rows] = await pool.query(`
      SELECT * 
      FROM orgfiles
      WHERE file_id = ${id}
    `);
    return rows;
  }
  
  async function getFilesByCriteria(year, subject, contentType, courseName) {
    const [rows] = await pool.query(`
      SELECT file_link 
      FROM orgfiles
      WHERE year = ? AND subject = ? AND content_type = ? AND course_name = ?
    `, [year, subject, contentType, courseName]);
  
    return rows.map(row => row.file_link);
  }
  async function getCourses(year) {
    const [rows] = await pool.query(`
      SELECT DISTINCT course_name
      FROM orgfiles
      WHERE year = ?
    `, [year]);
  
    return rows.map(row => row.course_name);
  }
  
  module.exports = { insertFile, getFile, getFilesByCriteria,getCourses };