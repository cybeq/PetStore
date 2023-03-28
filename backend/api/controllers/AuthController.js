const fs = require('fs');
const path = require('path');

module.exports = {
  async login(req, res){
    const userFilePath = path.join(__dirname, '..', 'json', 'user.json');
    const userData = await JSON.parse(await fs.readFileSync(userFilePath));
    const user = userData.find(u => u.name === req.body.name && u.password === req.body.password);
    if(!!user){
      req.session.user = user.name;
    }
    res.json(!!user);
  },
  async logout(req,res){
    req.session.destroy();
    res.json({success:'logout'});
  },

  async userName(req, res){
    res.json(req.session.user);
  }
};
