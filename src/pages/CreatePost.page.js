const { Input, Button, TextArea } = require('../elements');


class CreatePostPage {
    constructor(){
        this.TitleOfArticle = new Input ('input[placeholder="Enter the title of the article"]');
        this.PostContent = new TextArea ('textarea[placeholder="Write your post content"]');
        this.PublishButton = new Button ("//button[contains(text(), 'Publish')]");
                               
    }

    async  CreatePost({title, content}){
        await this.TitleOfArticle.setValue(title);
        await this.PostContent.setValue(content);
        await this.PublishButton.click();
                
    }   
    
    

}
module.exports = {CreatePostPage};