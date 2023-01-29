function copyPn() {
    var CopyPhone = document.getElementById("copyPn");
    navigator.clipboard.writeText(CopyPhone.alt);
    window.parent.location.href = `tel:+91${CopyPhone.alt}`
    console.log(`tel:+91${CopyPhone.alt}`)
    // alert("Copied Phone no :  " + CopyPhone.alt);
}


let toggleBS2 = 1;
let popupLogin=1;

const whyus = document.getElementById("whyusControl").innerHTML;
bodySection2 = document.getElementById("whyusControl");
const loginForm=`
<div class="loginContainer">
        <div class="loginHeading">
            <h1>Access Now</h1>
            <span id="closeForm" class="hoverPopout" onclick="displayLogin()">X</span>
        </div>

        <form class="myForm" action="/courses" method="post">
            <input class="myInput " type="email" name="clientEmail" placeholder="Enter your email">
            <input class="myInput" type="password" name="clientPassword" placeholder="Enter your password">
            <button class="btn hoverPopout" name="entry" value="1">Sing in </button>
        </form>
        <form class="myForm" action="/courses" method="post" id="createAccount">    
            <input class="myInput" type="text" name="newUserName" placeholder="Enter your name">
            <input class="myInput" type="number" name="newUserAge" placeholder="Enter your age">
            <input class="myInput" id="phoneNo" type="email" name="newUserEmail" placeholder="Enter your valid email">
            <button class="btn hoverPopout" name="entry" value="2">Sing up </button>

        </form>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Indie+Flower&family=Shadows+Into+Light&display=swap');

            .loginContainer {
                display: flex;
                position: sticky;
                align-items: center;
                justify-self: center;
                flex-direction: column;
                min-height: 50vh;
                width: 50%;
                margin: auto;
                margin-top: 30px;
                border: 2px solid black;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
                background-color: rgba(255, 255, 255, 0.9);
                outline: none;

            }

            .hoverPopout:hover {
                cursor: pointer;
                transform: scale(1.15);
                border-radius: 20px;
                /* box-shadow: 0 0 5px #42fbf2,
                    0 0 10px #42fbf2,
                    0 0 50px #42fbf2; */
                transition: 300ms ease-in-out;
            }

            .loginHeading {
                display: flex;
              
                justify-content: center;
                align-items: center;
                font-family: 'Indie Flower', cursive;
                
            }

            #closeForm {
                display: flex;
font-size: 39px;
position: absolute;
padding-right: 1vw;
top: 6px;
right: 22px;
font-weight: bold;
color: red;
cursor: pointer;
            }

            #closeForm:hover {
                color: rgb(202, 30, 32);
            }

            .loginHeading h1 {
                font-size: 39px;
                align-items: center;
                justify-content: center;
                padding: 1vh 0;
                margin-top: 2vh;
                color:black;
                /* background-color: aquamarine; */
            }

            .myForm {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .myInput {
                width: 60%;
                padding: 10px;
                margin: 10px;
                font-size: 16px;
                border: 2px solid rgb(92, 0, 0);
                border-radius: 12px;
                outline: none;
            }

            .btn {
                font-size: 20px;
                padding: 6px 12px;
                border: 2px solid black;
                border-radius: 20px;
                background-color: rgb(178 0 2);
                color: white;
                margin: 20px 0px;
                font-weight: bold;
                cursor: pointer;
            }
            @media screen and (max-width: 609px) {
                .loginContainer{width:85%;}
            }
        </style>
    </div>

`;
function displayLogin() {
    // console.log('feyhr'+whyus)
    // bodySection2.style.display="none";
    if (toggleBS2) {
        bodySection2.innerHTML = loginForm;

        console.log('Entering into the Login form');
        toggleBS2=0;
    } else {
        bodySection2.innerHTML = `${whyus}`;
        console.log('Exiting from the Login form');
        toggleBS2=1;
    }
}
function displayAbout() {
    if (!toggleBS2) {
        bodySection2.innerHTML = `${whyus}`;
        console.log('Opening Abous [whyus]');
        toggleBS2=1;
    } 
}
function displayLoginOnce(){
    if (popupLogin && toggleBS2) {
        bodySection2.innerHTML = loginForm;
        console.log('1st login page popup');
        popupLogin--;
        toggleBS2=0;
    }
}



//sideMenuBar
let toggleMobileView=1
menu=document.getElementsByClassName("menubar")[0]
sideBar=document.getElementsByClassName("leftlinkMobile")[0]
menu.addEventListener("click",toggleSideBar)
menuIcon=document.querySelector(".material-symbols-rounded.menu")
function toggleSideBar()
    {
        if(toggleMobileView==1)
        {
      sideBar.style.right="0px";toggleMobileView=0;
      menuIcon.classList.add("active");
    }
         else {
            sideBar.style.right="-100%" ; toggleMobileView=1;
            menuIcon.classList.remove("active");
        }
    }