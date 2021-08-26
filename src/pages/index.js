
const {LoginPage} = require('./LogIn.page');
const {feedPage} = require('./Feed.page')
const {CreatePostPage} = require('./CreatePost.page')


class App {
  constructor() {
    this.LoginPage = new LoginPage();
    this.feedPage = new feedPage();
    this.CreatePostPage = new CreatePostPage();
  }
}


module.exports = { App };