// Product class to store properties for id, name, and price of the product
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class to store properties for product and its quantity
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate the total price of the item
    calculateTotal() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class containing an array of ShoppingCartItem instances
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to get the total number of items inside the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to add items to the cart
    addItem(item) {
      this.items.push(item);
    }
  
    // Method to remove items from the cart
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to display cart items
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach(item => {
        console.log(`${item.product.name} - Quantity: ${item.quantity}`);
      });
    }
  }
  
  // Test the functionality
  // Create products
  const product1 = new Product(1, "Baskets", 100);
  const product2 = new Product(2, "Socks", 20);
  const product3 = new Product(3, "Bag", 50);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(new ShoppingCartItem(product1, 2));
  cart.addItem(new ShoppingCartItem(product2, 3));
  cart.addItem(new ShoppingCartItem(product3, 1));
  
  // Display the cart
  cart.displayCart();
  
  // Remove an item from the cart
  cart.removeItem(2);
  console.log("After removing an item:");
  cart.displayCart();
  