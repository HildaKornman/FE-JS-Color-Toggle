/* When the user clicks on the button, toggle between hiding and showing the dropdown content */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/* When the user clicks on a button, the dropdown content is hidden & background color changes */

function changeColorLightgrey() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inhoud").classList.remove("lightgrey-bg");
    document.getElementById("inhoud").classList.add("lightgrey-bg");
}

function changeColorRed() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inhoud").classList.remove("lightgrey-bg");
    document.getElementById("inhoud").classList.add("red-bg");
}

function changeColorOrange() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inhoud").classList.remove("lightgrey-bg");
    document.getElementById("inhoud").classList.add("orange-bg");
}

function changeColorPurple() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inhoud").classList.remove("lightgrey-bg");
    document.getElementById("inhoud").classList.add("purple-bg");
}

function changeColorGreen() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("inhoud").classList.remove("lightgrey-bg");
    document.getElementById("inhoud").classList.add("green-bg");
}

