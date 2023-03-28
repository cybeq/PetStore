
module.exports = {
  async getAllProducts() {
    const products = await Product.find();
    return products;
  },

  async getProductById(id) {
    const product = await Product.findOne({ id });
    return product;
  },

  async createProduct(data) {
    const product = await Product.create(data).fetch();
    return product;
  },

  async updateProduct(id, data) {
    const product = await Product.updateOne({ id }).set(data);
    return product;
  },

  async deleteProduct(id) {
    const product = await Product.destroyOne({ id });
    return product;
  }
};
