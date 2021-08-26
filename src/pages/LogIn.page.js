const { Input, Button } = require('../elements');

class LoginPage {
    constructor(){
        this.userEmailField = new Input ('input[id="email"]');
        this.passwordField = new Input('input[id="password"]');
        this.signInButton = new Button('button[type="submit"]', 3);
    }

    async LogIn({email, password}) {
        await this.userEmailField.setValue(email);
        await this.passwordField.setValue(password);
        await this.signInButton.click();
    }   

}
module.exports = {LoginPage};