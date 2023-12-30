const { getNote } = require("../databaseMaintain/profileSQL");


const profileRoute =(express,app )=>
{
    app.get("/profile",async(req,res)=>
    {
        userData= await getNote(1);
        res.send(userData)
    })
}
module.exports = { profileRoute };