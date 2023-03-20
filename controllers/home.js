const Meme = require('../models/Meme')

module.exports = {
  getIndex: (req, res) => {
    let loggedIn = false;
    if(req.user){
      loggedIn = true;
    }
    res.render("index.ejs" , {loggedIn : loggedIn, user: req.user});
  },

  saveMeme: async (req,res) => {
    try{
      await Meme.create({memeUrl: req.body.meme , memeDesc : req.body.title , user: req.user.id})
      console.log('meme added')
      res.json('meme added')
    }
    catch(err){
      console.log(err)
    }
  }
};
