class HomePage{

    //Find the Bot
    get botIcon() {return $('//*[@id="sntch_button"]') }


    //Perform Actions on Elements

    //Open BaseURL
    openBaseURL(){
        browser.url("https://snatchbot.me/")
    }
    //Click action on the Bot
    async clickBot(){
        this.botIcon.click();
    }
    
}
module.exports = new HomePage();

