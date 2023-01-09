let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// slide sec

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// /////////////////////////////

let span = document.querySelector(".up");
window.onscroll = function () {
    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

///////////////////////////

const product = [{
        image: 'images/product-2.png',
        category: 'Black',
        title: 'Nike Shoes Black',
        price: 500,
    },

    {
        image: 'images/product-5.png',
        category: 'Black',
        title: 'Nike Shoes Black',
        price: 500,
    },

    {
        image: 'images/product-1.png',
        category: 'Gray',
        title: 'Nike Shoes Gray',
        price: 500,
    },
    {
        image: 'images/product-4.png',
        category: 'Black',
        title: 'Nike Shoes Black',
        price: 500,
    },
    {
        image: 'images/product4-removebg-preview.png',
        category: 'bottles',
        title: 'adidas water bottle',
        price: 200,
    },
    {
        image: 'images/product6-removebg-preview.png',
        category: 'bags',
        title: 'adidas Sports bags',
        price: 200,
    },
    {
        image: 'images/product2-removebg-preview.png',
        category: 'Case',
        title: 'adidas Airpod Case',
        price: 200,
    },

];
let categories = [...new Set(product.map((item) => {
    return item
}))]

let i = 0;
document.getElementById('root').innerHTML = product.map((item) => {
    var {
        image,
        category,
        title,
        price
    } = item;
    return (
        `<div class="box card all ${category}">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <img src=${image} alt="">
                <div class="content">
                    <h3>${title}</h3>
                    <div class="price">$120.99 <span>${price}.99</span></div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <a href="/#products" class="btn" onclick='addtocart(" + ${(i++)} + ")'>add to cart</a>
                </div>
            </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({
        ...categories[a]
    });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
}


///////////////
let switcherLis = document.querySelectorAll(".switcher li");

let card = document.querySelectorAll(".card");


switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Manage Imgs
function manageImgs() {
    card.forEach((card) => {
        card.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });
}