let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductsHTML = document.querySelector('.listProduct');
let listaCartHTML = document.querySelector("listaCart");
let iconCartSpan =  document.querySelector(".icon-cart span");

let listProduct = [];
let carts = []; 

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () =>{
    body.classList.toggle('showCart');
})


//Crear metodo para agregar los productos al html desde js
const addDataToHTML = () => {
    listProductsHTML.innerHTML = "";
    if(listProducts.length > 0){
        listProducts.forEach((product) => {
            console.log(product.name);
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = `<img src='${product.image}' alt='sillas'>` +
            `<h2>${product.name}</h2>` +
            `<div class="price">${product.price} MXP</div>` +
            `<button class='addCart'>Add To Cart</button>`;
            listProductsHTML.appendChild(newProduct);
        })
    }
}

listProductsHTML.addEventListener(`click`,(event)  => {
let positionClick = event.target;
if(positionClick.classList.contains(`addCart`)){
    let product_id = positionClick.parentElement.dataset.id;
    alert(" Se agrego el producto " + product_id);
    addToCart(product_id);
}
})

const addToCart = (product_id)  => {
    let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id );
    if(carts.length <= 0){
        cars = [{
            product_id: product_id,
            quantity: 1
        }]
     }    else if (positionThisProductInCart < 0){
        carts = [{
            product_id: product_id,
            quantity: 1
        }];
     } else{
        carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
     }
        console.log(carts);
}

const addCartToHTML = ()  => {
    listaCartHTML.innerHTML = ``;
    if(carts.length > 0){
        carts.forEach(cart  => {
            let newCart = document.createElement("div");
            newCart.classList.add("item");
            let positionProduct = listProduct.findIndex((value)  => value.id == cart .product);
            let info = listProducts
        })
    }
}

const initApp = () =>{
    fetch('products.json')
    .then(response => response.json())
    .then(data => {   
        listProducts = data;
        addDataToHTML();
        console.log(listProducts);
    })
}

initApp();