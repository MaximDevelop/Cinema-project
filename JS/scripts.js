const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
const videoTrailer = document.querySelector(".video-trailer");
const videoButton = document.querySelector(".film-trailer");
let cost = 800;
let totalPrice = 0;

schemeSvg.addEventListener("click", (event) => {
    if(!event.target.classList.contains("booked")){
        event.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length;
        totalPrice = totalSeats * cost;
        totalPriceTag.textContent = totalPrice;
    }
});

menuButton.addEventListener('click', () => {
   menu.classList.toggle('is-open');
});

videoButton.addEventListener('click', () => {
    videoTrailer.style.display = "block";
    videoButton.style.display = "none";
});