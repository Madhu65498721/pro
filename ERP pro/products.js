const productsData = [
    { id: 1, name: "Product 1", category: "Category 1", price: 100, stockQuantity: 100 },
    { id: 2, name: "Product 2", category: "Category 2", price: 200, stockQuantity: 150 },
    { id: 3, name: "Product 3", category: "Category 1", price: 150, stockQuantity: 80 },
    { id: 4, name: "Product 4", category: "Category 2", price: 250, stockQuantity: 120 },
    { id: 5, name: "Product 5", category: "Category 1", price: 120, stockQuantity: 90 }
    // Add more products here
    ];
    function displayProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
    productsData.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
    <p>Name: ${product.name}</p>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
    <p>Stock Quantity: ${product.stockQuantity}</p>
    <button class="edit-btn" onclick="editProduct(${product.id})">Edit</button>
    <button class="delete-btn" onclick="deleteProduct(${product.id})">Delete</button>
    `;
    productContainer.appendChild(productElement);
    });
    }
    function addProduct() {
    const productName = prompt("Enter product name:");
    const productCategory = prompt("Enter product category:");
    const productPrice = parseFloat(prompt("Enter product price:"));
    const productStockQuantity = parseInt(prompt("Enter product stock quantity:"));
    const newProduct = {
    id: productsData.length + 1,
    name: productName,
    category: productCategory,
    price: productPrice,
    stockQuantity: productStockQuantity
    };
    productsData.push(newProduct);
    displayProducts();
    }
    function editProduct(productId) {
    const productIndex = productsData.findIndex(product => product.id === productId);
    const updatedName = prompt("Enter updated product name:",
    productsData[productIndex].name);
    const updatedCategory = prompt("Enter updated product category:",
    productsData[productIndex].category);
    const updatedPrice = parseFloat(prompt("Enter updated product price:",
    productsData[productIndex].price));
    const updatedStockQuantity = parseInt(prompt("Enter updated product stock quantity:",
    productsData[productIndex].stockQuantity));
    productsData[productIndex].name = updatedName;
    productsData[productIndex].category = updatedCategory;
    productsData[productIndex].price = updatedPrice;
    productsData[productIndex].stockQuantity = updatedStockQuantity;
    displayProducts();
    }
    function deleteProduct(productId) {
    const confirmation = confirm("Are you sure you want to delete this product?");
    if (confirmation) {
    productsData.splice(productsData.findIndex(product => product.id === productId), 1);
    displayProducts();
    }
    }
    displayProducts();