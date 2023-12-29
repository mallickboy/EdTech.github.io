
//================================ Side Menu ===============================//
const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach(
    item => {

        item.addEventListener("click", e => {
            menuItem.forEach(
                elm =>{
                    elm.classList.remove("active")
                    elm.children[0].children[0].classList.remove("active")
                } 

            )
            const compoId = item.getAttribute("data-opt");
            document.querySelectorAll(".component").forEach(element => {
                element.classList.remove("active");
            });
            item.classList.add("active")
            item.children[0].children[0].classList.add("active")
            document.getElementById(compoId).classList.add("active");
        })
    }
)
document.getElementById("profile").click()