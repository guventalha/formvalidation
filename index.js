const container = document.querySelector('.container');
const searchBar = document.getElementById('search');
const btn = document.getElementById('search-btn');

const productArray = [];

const getData = fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) =>
    data.map((product) => {
      productArray.push(product);
    })
  )
  .then(() => {
    productArray.map((product) => {
      container.innerHTML += `<div class='product'> <h3>${product.title} </h3><img class='product-image' src='${product.image}'/> <div class='add-field'> <h4>$${product.price}</h4> <button class='add-btn' onclick='addToCart(${product.id})'>Add to Cart</button></div> </div>`;
    });
  });

console.log(productArray);
const showProducts = window.addEventListener('load', getData);

btn.addEventListener('click', () => {
  const filteredArray = productArray.filter((product) =>
    product.title.includes(searchBar.value)
  );

  container.innerHTML = '';

  filteredArray.map((product) => {
    container.innerHTML +=
      filteredArray.length > 0
        ? `<div class='product'> <h3>${product.title} </h3><img class='product-image' src='${product.image}'/> <div class='add-field'> <h4>$${product.price}</h4> <button class='add-btn' onclick='addToCart(${product.id})'>Add to Cart</button></div> </div>`
        : '<h2>Aradığınız ürün yok!!!</h2>';
  });
  console.log(filteredArray);
});

const cartItems = [];

const addToCart = (id) => {
  const newProduct = productArray.find((product) => product.id === id);
  cartItems.push(newProduct);
  console.log(newProduct);
};
