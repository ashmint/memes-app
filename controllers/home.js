module.exports = {
  getIndex: (req, res) => {
    let loggedIn = false;
    if(req.user){
      loggedIn = true;
    }
    res.render("index.ejs" , {loggedIn : loggedIn});
  },
};
