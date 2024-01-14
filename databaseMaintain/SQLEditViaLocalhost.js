const { getNote,getNotes, createNote,videoOverview,VideoUserAcess,overview_courses,overview_subject,overview_chapter } = require('./profileSQL.js');
function SQLEditViaLocalhost(express,app) {
    app.use(express.json())
    async function usageExample() {
        const note = await getNote(2);
        console.log(note);
    
        const newNote = await createNote("Title", "Content");
        console.log(newNote);
    }
    app.get("/notes",async (req,res)=>{
        var notes=await getNotes();
        res.send(notes)
    })
    app.get("/note/:id/",async (req,res)=>{
        var id = req.params.id;
        var notes=await getNote(id);
        res.send(notes)
    })
    app.post("/note",async (req,res)=>{
        const{title,content}=req.body;
        const note= await createNote(title,content);
        res.status(201).send(note);
    })
    // getting access for user
    app.get("/useracess/:course/:subject/:chapter",async (req,res)=>{
        var course = req.params.course;
        var subject = req.params.subject;
        var chapter = req.params.chapter;
        var notes=await VideoUserAcess(course,subject,chapter);
        res.send(notes)
    })
    app.get("/useracess/link/:course/:subject/:chapter",async (req,res)=>{
        var course = req.params.course;
        var subject = req.params.subject;
        var chapter = req.params.chapter;
        var notes=await VideoUserAcess(course,subject,chapter);
        // res.send(notes[0].video_url)
        res.send(notes.map(item => item.video_url))
    })
    // getting course overview for visitors

    app.get("/overview/:course/:subject/:chapter",async (req,res)=>{
        var course = req.params.course;
        var subject = req.params.subject;
        var chapter = req.params.chapter;
        var notes=await videoOverview(course,subject,chapter);
        res.send(notes)
    })
    app.get("/overview/:course/:subject",async (req,res)=>{
        var course = req.params.course;
        var subject = req.params.subject;
        var notes=await overview_chapter(course,subject);
        res.send(notes)
    })
    app.get("/overview/:course",async (req,res)=>{
        var course = req.params.course;
        var notes=await overview_subject(course);
        res.send(notes)
    })
    app.get("/overview",async (req,res)=>{        
        var notes=await overview_courses();
        res.send(notes)
    })

    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke! in QSLEditViaLOcalhost')
      })
}
module.exports = { SQLEditViaLocalhost };