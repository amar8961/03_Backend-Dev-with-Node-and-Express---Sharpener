const cart_items = document.querySelector("#cart .cart-items");

const parentContainer = document.getElementById("EcommerceContainer");
// parentContainer.addEventListener("click", (e) => {
//   //
// });

window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");

  axios.get("http://localhost:3000/products").then((data) => {
    console.log(data);

    if (data.request.status === 200) {
      // The HTTP 200 OK success status response code.
      // The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.
      // The HTTP 500 Internal Server Error server error response code.
      // The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
      const products = data.data.products;
      const parentSection = document.getElementById("Products");
      products.forEach(product => {
        const productHtml = `
        <div>
            <h1>${product.title}</h1>
            <img src=${product.imageUrl}></img>
            <button onClick="addToCart(${product.id})"> Add To Cart </button>
        </div>`;
        parentSection.innerHTML = parentSection.innerHTML + productHtml;
      });
    }
  });
});

function addToCart(productId) {
  // productId -> get product id from frontend. (controllers/shop.js -> postCart)
  axios.post('http://localhost:3000/cart',{productId : productId})
  .then(response => {
    // console.log(response)
    if(response.status === 200) {
      nofityUsers(response.data.message);
    } else {
      throw new ErrorEvent();
    }
  })
  .catch(err => {
    console.log(err)
    nofityUsers(err.data.message);
  })
}

function nofityUsers(message) {
  const container = document.getElementById("notification-container");
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerHTML = `<h4>${message}<h4>`;
    container.appendChild(notification);
    setTimeout(() => {
      notification.remove();
    }, 2500);
}