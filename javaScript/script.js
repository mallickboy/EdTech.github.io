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
    <span id="closeForm" onclick="displayLogin()">X</span>
</div>

<form class="myForm" action="/contact" method="post">
    <input class="myInput" type="text" name="singIn" placeholder="User name or phone number">
    <input class="myInput" type="password" name="password" placeholder="Enter your password">
    <button class="btn">Sing in </button>

    <input class="myInput" type="text" name="name" placeholder="Enter your name">
    <input class="myInput" type="number" name="age" placeholder="Enter your age">
    <input class="myInput" type="text" name="singUp" placeholder="Email or phone number">
    <button class="btn">Sing up </button>

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
        width: 45vw;
        margin: auto;
        margin-top: 30px;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        background-color: rgb(255 255 255 / 78%);
        outline:none;
    }
    .loginHeading{
        display: flex ;
        position: relative;
        justify-content: center;
        align-items: center;
        font-family: 'Indie Flower', cursive;
        width: 45vw;
    }
    #closeForm{
        display: flex;
        font-size: 39px;
        position: absolute;
        padding-right:1vw ;
        top: 0;
        right: 0;
        font-weight: bold;
        cursor: pointer;
        /* background-color: antiquewhite; */
    }
    #closeForm:hover{
        color:rgb(202, 30, 32);
    }
    .loginHeading h1 {
        font-size: 39px;
        align-items: center;
        justify-content: center;
        padding:1vh 0;
        margin-top:2vh;
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

