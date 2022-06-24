// Fetch data function
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

/*====================================================================================
 initialize html elements
=====================================================================================*/
const prodPage = document.getElementById("prodPage");

// =========================
function fetchData() {
  fetch("https://api.musement.com/api/v3/venues/164/activities")
    .then((res) => res.json())
    .then((products) => {
      console.log(products);
      products.forEach((product) => {
        const {
          about,
          product_title,
          product_description,
          cover_image_url,
          original_retail_price,
        } = product;
        const productContainer = document.createElement("div");
        productContainer.classList.add("container");
        productContainer.innerHTML = `
                 <ul class="product-list">
            <li class="product-list__item">
                                  <article class="product" itemscope itemtype="http://schema.org/Product">
                                      <figure class="product__image-wrapper">
                                          <img class="product__image" src="${product.cover_image_url}" alt="Product" itemprop="image"/>
                                          <button class="product__wishlist-button button button--round button--wishlist">
                                              <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                  <title>Wishlist Icon</title>
                                                  <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                                              </svg>
                                          </button>
                                      </figure>
                                      <div class="product__details">
                                          <h1 class="product__title" id="title" itemprop="brand">${product.title}</h1>
                                          <p class="product__subtitle" itemprop="description">${product.about}</p>
                                          <div class="product__price" itemscope itemtype="http://schema.org/Offer">
                                            <span class="product__price--discounted" itemprop="price">${product.original_retail_price.formatted_iso_value}</span>
                                          </div>
                                      </div>
                                  </article>
                              </li> 

                               <li class="product-list__item">
                                  <article class="product" itemscope itemtype="http://schema.org/Product">
                                      <figure class="product__image-wrapper">
                                          <img class="product__image" src="${product.cover_image_url}" alt="Product" itemprop="image"/>
                                          <button class="product__wishlist-button button button--round button--wishlist">
                                              <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                  <title>Wishlist Icon</title>
                                                  <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                                              </svg>
                                          </button>
                                      </figure>
                                      <div class="product__details">
                                          <h1 class="product__title" id="title" itemprop="brand">${product.title}</h1>
                                          <p class="product__subtitle" itemprop="description">${product.about}</p>
                                          <div class="product__price" itemscope itemtype="http://schema.org/Offer">
                                            <span class="product__price--discounted" itemprop="price">${product.original_retail_price.formatted_iso_value}</span>
                                          </div>
                                      </div>
                                  </article>
                              </li> 
 
                               <li class="product-list__item">
                                  <article class="product" itemscope itemtype="http://schema.org/Product">
                                      <figure class="product__image-wrapper">
                                          <img class="product__image" src="${product.cover_image_url}" alt="Product" itemprop="image"/>
                                          <button class="product__wishlist-button button button--round button--wishlist">
                                              <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                  <title>Wishlist Icon</title>
                                                  <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
                                              </svg>
                                          </button>
                                      </figure>
                                      <div class="product__details">
                                          <h1 class="product__title" id="title" itemprop="brand">${product.title}</h1>
                                          <p class="product__subtitle" itemprop="description">${product.about}</p>
                                          <div class="product__price" itemscope itemtype="http://schema.org/Offer">
                                            <span class="product__price--discounted" itemprop="price">${product.original_retail_price.formatted_iso_value}</span>
                                          </div>
                                      </div>
                                  </article>
                              </li> 
                 </ul>  

        `;
        prodPage.appendChild(productContainer);
      });
    });
}
