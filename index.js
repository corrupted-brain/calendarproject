let btn = document.querySelector("#appointment-type");
btn.addEventListener("change", function (e) {
    e.preventDefault();
    if (this.value === "ad") {
        document.querySelector("#calendar").style.display = "block";
        document.querySelector("#nepali-datepicker").style.display = "none";
    } else if (this.value === "bs") {
        document.querySelector("#nepali-datepicker").style.display = "block";
        document.querySelector("#calendar").style.display = "none";
    }
})
let date = document.querySelector("#calendar")
console.log(date)