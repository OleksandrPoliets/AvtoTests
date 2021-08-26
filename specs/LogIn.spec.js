const { expect } = require('chai');
const  {App} = require('../src/pages');

const logIn = new App();



describe('LogIn:', function () {

    beforeEach ( async function () {
        await browser.url('/login');
    });

    afterEach ( async function () {
        await browser.reloadSession();
      });


    xit('should be able to login', async function () {
        
                
        await logIn.LoginPage.LogIn({
            email: 'testt@gmail.com',
            password: '12345',
        });

        await browser.waitUntil(
            async function () {
              const url = await browser.getUrl();
              return url === 'http://mindbridge-lb-252634146.eu-west-1.elb.amazonaws.com/';
            },
            { timeout: 15000 },
          );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://mindbridge-lb-252634146.eu-west-1.elb.amazonaws.com/');

          
    });
  
 
  
  });