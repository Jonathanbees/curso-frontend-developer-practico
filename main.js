let menuEmail = document.querySelector(".navbar-email")
let desktopmenu = document.querySelector('.desktop-menu')
let menuMobile = document.querySelector(".mobile-menu")
let MenuHamIcon = document.querySelector(".menu")
let carritocompras = document.querySelector(".navbar-shopping-cart")
let productDetailCloseIcon = document.querySelector('.product-detail-close')

let shoppingCartContainer = document.querySelector("#shoppingCartContainer")
let productDetailContainer = document.querySelector('#productDetail')
let cardsContainer = document.querySelector(".cards-container")


menuEmail.addEventListener("click", toggleDesktopMenu)
MenuHamIcon.addEventListener("click", toggleMobileMenu)
carritocompras.addEventListener("click", toggleCartMenu)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){
    desktopmenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive')
    menuMobile.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}
function toggleMobileMenu(){
    desktopmenu.classList.add('inactive')
    menuMobile.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}
function toggleCartMenu(){
    menuMobile.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive');
    desktopmenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

const productList = []
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "pantalla",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Equipo de sonido",
    price: 123056,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
    shoppingCartContainer.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
    desktopmenu.classList.add('inactive')
}

function crearProductos(productos) {
    for (product of productos){
    
        const productcard = document.createElement('div')
        productcard.classList.add('product-card')
    
        //product = {name, price, image} -> product.image
    
        const productImg = document.createElement('img') 
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure')
        const productoImgCart = document.createElement('img')
        productoImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        //inserciones de cada clase dentro de su respectiva parte
    
        productInfoFigure.appendChild(productoImgCart)
    
        productInfoDiv.append(productName, productPrice)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productcard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productcard)
    
    }    
}
crearProductos(productList)