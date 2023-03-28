/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

// route na builda(socket dziala na buildzie)
  '/*': {
    controller: 'AppController', action: 'staging', skipAssets: true, skipRegex: /^\/(api|ws)\/.*$/
  },

  // // route na produkcji(socket dziala na produkcji)
  // '/*':{view:'index'},

  'GET /api/download/:photo/raw':'ProductController.getPhoto',
  'POST /api/upload':'ProductController.uploadPhoto',
  'POST /api/user':'AuthController.login',
  'GET /api/user':'AuthController.userName',
  'GET /api/user/logout':'AuthController.logout',
  'GET /api/products': 'ProductController.getAllProducts',
  'GET /api/products/:id': 'ProductController.getProductById',
  'POST /api/products': 'ProductController.createProduct',
  'PUT /api/products/:id': 'ProductController.updateProduct',
  'DELETE /api/products/:id': 'ProductController.deleteProduct',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
