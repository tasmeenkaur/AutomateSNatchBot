var chai = require('chai')
var chaiWebdriver = require('chai-webdriverio').default
chai.use(chaiWebdriver(browser))
var msgArray = []
class Snatchbot{
    //Get the Elements under Test
    get botMessageScreen() {return $('/html/body/app-root/ng-component/div/div[2]/perfect-scrollbar/div')}
    get frame() {return $('iframe[id="sntch_iframe"]')}
    get botTitle() {return $('/html/body/app-root/ng-component/div/div[1]/div[1]/div[2]/div')}
    get messagesInMsgBox() {return $$('.message__body')}
    get messageTextBox() {return $('//*[@id="chat_input"]')}
    get sendButton() {return $('/html/body/app-root/ng-component/div/div[3]/div[2]/div/button/span/i')}
    
    //Get Element whose span consist of specific Text
    getElement(elementText){
        return $('//span[contains(text(), "'+elementText+'")]')
    }

    //Perform Action on Elements Under Test

    //Find Element based on Text visible on Web and click on it
    async clickOnElement(elemenText){
        //Get Element whose span consist of specific Text
        var element = this.getElement(elemenText)
        element.click()
   }

   //Make sure the Title of the Bot is present
    botTitleExist(){
        
        expect(this.botTitle).toBeDisplayed()
    }

    //Switch to the Bot iframe
    async switchBot(){
        browser.switchToFrame($(this.frame))

    }

    //Make sure the text is Displayed in Bot
    async txtExist(txt){
        // Pause added due to delay in snatchbot. Eventually this should be replaced with waits
        browser.pause(7000)

        // Populate Messages Array with messages received from Bot
        let messages = this.messagesInMsgBox.map(function(result){
            msgArray.push(result.getText())
            return result.getText();

        });
        
        //Find the message expected in Array
        var msgFound = msgArray.findIndex(element => element.includes(txt))

        //The index has to be greater that -1 for message to exist
        chai.expect(msgFound>-1).to.be.true

    }

    //Send message to Bot
    async sendMsg(msg){
        //Find the Text Box and Send Text
        this.messageTextBox.setValue(msg)
        this.sendButton.click()
        
    }

}
module.exports = new Snatchbot();