

let toggle=true;


const section=document.getElementById('studentSection')
let studentprofile=`.student
.dp
  img(src='dp.png', alt='dp')
.infoContainer
  .name {Name}
  .studentInfo Email:
  .studentInfo Phone:
  .studentInfo Age:
  .studentInfo Gender:
  .studentInfo Birth Date:
  .studentInfo Address:`
const showStudent=()=>
{
    if(toggle)
    {
        section.innerHTML=studentprofile;
    }
    
    else
    {
        section.innerHTML="";
    }
    toggle=!toggle;
    

}