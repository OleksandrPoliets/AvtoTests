const { expect } = require('chai');
const  {App} = require('../src/pages');

const rundomNumber = () => Date.now();

const app = new App();



describe('Create Post:', function(){

    beforeEach(async function () {
        await browser.url('http://mindbridge-lb-252634146.eu-west-1.elb.amazonaws.com/login');

        await app.LoginPage.LogIn({
            email: 'testt@gmail.com',
            password: '12345',
        });

    });

    afterEach(async function () {
        await browser.reloadSession();
    }); 

  

    it('Shoud be able to create new post', async function(){
      
                  
        await app.feedPage.goToCreatePostPage();
        
        await app.CreatePostPage.CreatePost({
            title:`${rundomNumber()} reasons why having a blog is as important as having a GitHub`,
            content: 'We had an almost infinite amount of time at home to do anything that we wanted to do. It created a new generation of aspiring developers and writers.',
        });

        await browser.pause(5000);

                
        const PostTitle = await $('div[class="styles_postName__jEqUk"]');
        expect(PostTitle).to.include('reasons why having a blog is as important as having a GitHub');

       

    })

});