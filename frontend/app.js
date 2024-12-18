// Fetch and display products
fetch('/products')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
      productList.appendChild(productDiv);
    });
  })
  .catch(err => console.error('Error fetching products:', err));
