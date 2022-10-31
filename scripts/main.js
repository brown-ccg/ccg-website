function main() {
    loadingAnimation();
}

function toggleMenu() {

    var navList = document.getElementById("dropdown");
    
    if (navList.style.display === "none") {
        // display, and show in line
        navList.classList.remove("d-none");
        navList.classList.remove("d-md-flex");
        navList.style.display = "flex";
    } else {
        // hide
        navList.classList.add("d-none");
        navList.classList.add("d-md-flex");
        navList.style.display = "none";
    }
}

function hoverMail(element) {
    element.setAttribute('src', 'images/assets/mail-open.svg');
}
  
function unhoverMail(element) {
    element.setAttribute('src', 'images/assets/mail.svg');
}
