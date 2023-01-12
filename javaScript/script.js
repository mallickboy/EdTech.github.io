function copyPn() {
    var CopyPhone = document.getElementById("copyPn");
    navigator.clipboard.writeText(CopyPhone.alt);
    window.parent.location.href = `tel:+91${CopyPhone.alt}`
    console.log(`tel:+91${CopyPhone.alt}`)
    // alert("Copied Phone no :  " + CopyPhone.alt);
}


let toggleBS2 = 1;

const whyus = document.getElementById("whyusControl").innerHTML;
bodySection2 = document.getElementById("whyusControl");
function displayLogin() {
    // console.log('feyhr'+whyus)
    // bodySection2.style.display="none";
    if (toggleBS2) {
        bodySection2.innerHTML = `

        <div class="loginContainer">
        <h1>Access Now<span id="closeForm" onclick="displayLogin()">X</span></h1>
        
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
                align-items: center;
                flex-direction: column;
                min-height: 79.3vh;

                margin-top: 30px;
            }
            #closeForm{
                position: absolute;
    right: 24vw;
    cursor: pointer;
            }
            h1 {
                display: flex;
                text-align: center;
                margin: 12px 0;
                font-family: 'Indie Flower', cursive;
                font-size: 39px;
            }

            .myForm {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
            }

            .myInput {
                width: 40%;
                padding: 10px;
                margin: 10px;
                font-size: 16px;
                border: 2px solid rgb(92, 0, 0);
                border-radius: 9px;
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
        toggleBS2=0;
    } 
}

