var chai = require('chai')
var chaiWebdriver = require('chai-webdriverio').default
chai.use(chaiWebdriver(browser))
var msgArray = []
class Snatchbot{
    //Set Elements
    
    get botMessageScreen() {return $('/html/body/app-root/ng-component/div/div[2]/perfect-scrollbar/div')}
    get frame() {return $('iframe[id="sntch_iframe"]')}
    get botTitle() {return $('/html/body/app-root/ng-component/div/div[1]/div[1]/div[2]/div')}
    get messagesInMsgBox() {return $$('.message__body')}
    get messageTextBox() {return $('//*[@id="chat_input"]')}
    get sendButton() {return $('/html/body/app-root/ng-component/div/div[3]/div[2]/div/button/span/i')}
    
    getElement(elementText){
        return $('//span[contains(text(), "'+elementText+'")]')
    }

    clickOnElement(elemenText){
        var element = this.getElement(elemenText)
        element.click()
   }
    botTitleExist(){
        
        expect(this.botTitle).toBeDisplayed()
    }

    async switchBot(){
        browser.switchToFrame($(this.frame))

    }

    txtExist(txt){
        // Pause added due to delay in snatchbot. Eventually this should be replaced with waits
        browser.pause(7000)

        let messages = this.messagesInMsgBox.map(function(result){
            msgArray.push(result.getText())
            return result.getText();

        });
       
        var msgFound = msgArray.findIndex(element => element.includes(txt))

        chai.expect(msgFound>-1).to.be.true

    }

    sendMsg(msg){
        //Find the Text Box and Send Text
        this.messageTextBox.setValue(msg)
        this.sendButton.click()
        
    }

}
module.exports = new Snatchbot();