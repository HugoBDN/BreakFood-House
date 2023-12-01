const openBtn = document.getElementById("openBtn");
const sidenav = document.getElementById("mySidenav");
const closeBtn = document.getElementById("closeBtn");
const arrow = document.getElementById("arrow")
const onglets = document.getElementById("onglets")



openBtn.onclick = openNav;
closeBtn.onclick = closeNav;
arrow.onclick = openOnglets;



function openOnglets() {
    if (!onglets.classList.contains("active")) {
    onglets.classList.add("active");
    document.body.classList.add("active");
} else {
    onglets.classList.remove("active");
    document.body.classList.remove("active");
  }
}

function openNav() {
    sidenav.classList.add("active");
    document.body.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active");
    document.body.classList.remove("active");
}