const sqlQuery = `
  SELECT
    cs.course_id,
    cc.course_price,
    cc.course_start,
    cc.course_end,
    cc.course_name,
    cs.subject_name,
    cs.subject_id,
    vp.video_pdf_topic,
    vp.video_pdf_id,
    vp.video_link,
    vp.pdf_link
  FROM edtech.current_subjects AS cs
  INNER JOIN edtech.current_courses AS cc ON cc.course_id = cs.course_id
  INNER JOIN edtech.video_pdf_table AS vp ON vp.subject_id = cs.subject_id;
`;
function videoPdfMaintain(express,app) {
    console.log("hellow from videoPdfMaintain")

    
}
module.exports={videoPdfMaintain}