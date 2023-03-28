const path = require("path");
const fs = require("fs");
module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.ok(products);
    } catch (err) {
      res.serverError(err);
    }
  },

  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      if (!product) {
        return res.notFound('Product not found');
      }
      res.ok(product);
    } catch (err) {
      res.serverError(err);
    }
  },

  async createProduct(req, res) {
    try {
      req.body.username = req.session.user;
      const product = await ProductService.createProduct(req.body);
      res.ok(product);
    } catch (err) {
      console.error(err);
      res.error(err);
    }
  },

  async updateProduct(req, res) {
    try {
      const product = await ProductService.updateProduct(req.params.id, req.body);
      if (!product) {
        return res.json({error: 'no product'});
      }
      res.json({success: product});
    } catch (err) {
      return res.json({error: err});
    }
  },

  async deleteProduct(req, res) {
    try {
      const product = await ProductService.deleteProduct(req.params.id);
      if (!product) {
        return res.json({error:'Product not found'});
      }
      res.ok(product);
    } catch (error) {
      res.json({error});
    }
    res.json({success:'deleted'});
  },

  async uploadPhoto(req, res){
    if (!req.file('image')._files[0]) {
      return res.badRequest('No file uploaded');
    }

    req.file('image').upload({
      maxBytes: 100000000, // 10MB limit
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    }, function(err, uploadedFiles) {
      if (err) return res.serverError(err);

      return res.json(uploadedFiles[0].fd.split('/').pop());
    });
  },

  async getPhoto(req, res){
    const photoName = req.param('photo');
    console.log(photoName);
    const imagePath = path.resolve(sails.config.appPath, 'assets', 'images', photoName);

    if (fs.existsSync(imagePath)) {
      res.sendFile(imagePath);
    } else {
      return res.notFound();
    }
  }
};
