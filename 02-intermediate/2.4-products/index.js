const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "products.json");

class ProductManager {
  static async getAllProducts() {
    try {
      const data = await fs.readFile(DATA_FILE, "utf8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  static async getProductById(id) {
    const products = await this.getAllProducts();
    return products.find((product) => product.id == id);
  }

  static async saveProducts(products) {
    await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2));
  }

  static async addProduct(product) {
    const products = await this.getAllProducts();
    const newproduct = {
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
      name: product.name,
      price: product.price,
    };
    products.push(newproduct);
    await this.saveProducts(products);
    return product;
  }

  static async updateProduct(updatedData) {
    const products = await this.getAllProducts();
    const index = products.findIndex((product) => product.id == updatedData.id);
    if (index === -1) return null;
    products[index] = { ...products[index], ...updatedData };
    await this.saveProducts(products);
    return products[index];
  }

  static async deleteProduct(id) {
    const products = await this.getAllProducts();
    const filteredProducts = products.filter((product) => product.id !== id);
    if (products.length === filteredProducts.length) return null;
    await this.saveProducts(filteredProducts);
    return true;
  }
}

module.exports = ProductManager;
