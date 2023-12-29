const { getNote,getNotes, createNote } = require('./profileSQL.js');
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
    app.use((err, req, res, next) => {
        console.error(err.stack)
        res.status(500).send('Something broke! in QSLEditViaLOcalhost')
      })
}
module.exports = { SQLEditViaLocalhost };