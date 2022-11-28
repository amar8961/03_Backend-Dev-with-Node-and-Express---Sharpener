window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");

  axios.get("http://localhost:3000/products").then((data) => {
    console.log(data);

    if (data.request.status === 200) {
      const products = data.data.products;
      const parentSection = document.getElementById("Products");
      products.forEach(product => {
        const productHtml = `
        <div id ="mobile-content">
            <div>
                <h3>${product.title}</h3>
                <div class="image-container">
                    <img class="prod-images" src=${product.imageUrl}></img>
                </div>
                <button class="shop-item-button"> Add To Cart </button>
            </div>
        </div>`;
        parentSection.innerHTML = parentSection.innerHTML + productHtml;
      });
    }
  });
});
