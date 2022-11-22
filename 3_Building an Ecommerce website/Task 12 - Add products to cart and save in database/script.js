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
      const products = data.data.products;
      const parentSection = document.getElementById("Products");
      products.forEach(product => {
        const productHtml = `
        <div>
            <h1>${product.title}</h1>
            <img src=${product.imageUrl}></img>
            <button> Add To Cart </button>
        </div>`;
        parentSection.innerHTML = parentSection.innerHTML + productHtml;
      });
    }
  });
});
