
// slideShow
let slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n)
}


function showSlide(n) {
    let slides = document.getElementsByClassName('picturs');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// cart
let shop = document.querySelector(".shop > img");
let cart = document.querySelector(".cart");
shop.addEventListener('click', () => {
    cart.classList.toggle("show");
})

// count
let plus = document.querySelector(".count > img:nth-of-type(2)");
let minus = document.querySelector(".count > img:nth-of-type(1)");
let count = document.querySelector(".count > span");
plus.addEventListener("click", () => {
    count.innerHTML++
});
minus.addEventListener("click", () => {
    if (count.innerHTML > 0) { count.innerHTML-- }
});

// addToCart
let addToCart = document.querySelector(".add-btn");
let notif = document.querySelector(".shop > span");
let price = document.querySelector(".cart-main > p > span");
let credit = 280
let empty = document.querySelector(".cart-empty");
addToCart.addEventListener("click", () => {
    if (count.innerHTML > 0) {
        notif.classList.add("show");
        notif.innerHTML = count.innerHTML;
        price.innerHTML = count.innerHTML * 125.00;
    }
});

// menu
let menu = document.querySelector(".menu");
let nav = document.querySelector(".links > ul");
let dark = document.body
menu.addEventListener("click", () => {
    menu.classList.toggle("open");
    nav.classList.toggle("visib");
    dark.classList.toggle("dark");
});


