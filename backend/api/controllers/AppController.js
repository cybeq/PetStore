const fs = require("fs");
module.exports={
  staging: function(req, res) {
    var emberApp = __dirname + '/../../assets/index.html';
    fs.exists(emberApp, function (exists) {
      if (!exists) {
        return res.notFound('The requested file does not exist.');
      }

      fs.createReadStream(emberApp).pipe(res);
    });
  },
}
