const { Given, When, Then } = require('@cucumber/cucumber');
const { isWhiteSpaceSingleLine } = require('typescript');
const HomePage = require('../pageobjects/home.page.js');
const snatchbotPage = require('../pageobjects/snatchbot.page.js');


Given(/^I am on the bot page$/, function(){
    HomePage.openBaseURL();
    
});


When(/^I click on the Bot$/, function() {
    HomePage.clickBot();
});


Then(/^Snatch Bot Title should exist$/,function(){
   snatchbotPage.botTitleExist()
     
 
 });


 When(/^Switch to Bot Frame$/,function(){

   snatchbotPage.switchBot();
     
 
 });

 Then(/^Text "(.*)" should exist$/,function(txt){
    snatchbotPage.txtExist(txt)
      
  
  });

  Then(/^SnatchBot should send Text$/,function(txt){
    snatchbotPage.txtExist(txt)
      
  
  });

  When(/^I send Following text to Bot$/,function(msg){
    snatchbotPage.sendMsg(msg)

  });

  When(/^I click on "(.*)"$/,function(elementText){
    snatchbotPage.clickOnElement(elementText);

  });

