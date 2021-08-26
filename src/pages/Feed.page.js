const { Input, Button } = require('../elements');


class feedPage {
    constructor(){
        this.CreatePostButton = new Button ("//button[contains(text(), 'Create post')]");
        
    }

    async  goToCreatePostPage(){
        await this.CreatePostButton.click();
    } 
    
    
}

module.exports = {feedPage};