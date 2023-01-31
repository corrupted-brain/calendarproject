
let btn1 = document.querySelector("#appointment-type");
btn1.addEventListener("change", function (e) {
    e.preventDefault();
    if (this.value === "ad") {
document.querySelector("#calendar").style.display = "block";
    } else {
        document.querySelector("#calendar").style.display = "none";
    }
})

           
