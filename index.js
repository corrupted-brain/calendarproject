let btn = document.querySelector("#appointment-type");
btn.addEventListener("change", function (e) {
    e.preventDefault();
    if (this.value === "ad") {
        document.querySelector("#english-datepicker").style.display = "block";
        document.querySelector("#nepali-datepicker").style.display = "none";
    } else if (this.value === "bs") {
        document.querySelector("#nepali-datepicker").style.display = "block";
        document.querySelector("#english-datepicker").style.display = "none";
    }
});

window.onload = function() {
    var mainInput = document.getElementById("nepali-datepicker");
    mainInput.nepaliDatePicker();
};
