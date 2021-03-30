Feature: Testing the bot
    Background:
        Given I am on the bot page
        When I click on the Bot
        When Switch to Bot Frame
        Then Snatch Bot Title should exist
        Then SnatchBot should send Text
        """
        Hi 👋 
        I'm Lexi, your friendly guide to chatbots and SnatchBot.
        """
        #Following Step can also be used if needed. DocString input is recommended as Bot can send multiline Text
        #Then Text "There’s lots I can show you but first please let me know your name." should exist
        Then SnatchBot should send Text
        """
        There’s lots I can show you but first please let me know your name.
        """
        When I send Following text to Bot
        """
        Tasmeen
        """
        Then SnatchBot should send Text
        """
        Hi Tasmeen! Good to chat to you. Did I get your name right?
        """
        When I click on "Yes"
        Then SnatchBot should send Text
        """
        Explain what a chatbot is 🤖 ; guide you in making your own chatbot 👩‍🏫👨‍🏫; show you some common use cases👩‍🏭👨‍🏭; give you a tour of the features of SnatchBot 💁‍♀️ 💁‍♂️;  help you contact SnatchBot 📩or tell you about our costs.💸
        """
        Then SnatchBot should send Text
        """
        You can click a button or type freely. And there are more options in the persistent menu (to the left of the chat bar). So, what would you like me to talk about?
        """

   
    Scenario Outline: As a user, I would like to know more about bots
        When I click on "Explain chatbots"
        Then SnatchBot should send Text
        """
        Basically, we chatbots are just software applications, like any other application you use on your computer. The important difference is that people interface with us using conversation. Shall I say more about this? 👀
        """
        When I click on "Tell me"
        Then SnatchBot should send Text
        """
        Having a conversational interface means that with a chatbot you talk to work with the software, instead of clicking buttons in a graphical interface.
        """

     Scenario Outline: As a user, I would like to know how to make a bot
        When I send Following text to Bot
        """
        Make a chatbot
        """
        Then SnatchBot should send Text
        """
        First things first. Have you ever built a chatbot before?
        """
        When I click on "No"
        Then SnatchBot should send Text
        """
        The good news is that with SnatchBot you can build a chatbot very quickly, without any experience or coding background..
        """
        Then SnatchBot should send Text
        """
        Do you want me to show you how? 👩‍🏫👨‍🏫
        """
        When I click on "Yes"
        Then SnatchBot should send Text
        """
        You can get off to a quick start with a chatbot template or build a bot from scratch.
        """
        Then SnatchBot should send Text
        """
        I’d suggest you to start with a template, but it’s your choice!
        """
        When I click on "Template"
        Then SnatchBot should send Text
        """
        Wouldn’t it be great if you had a working prototype of a chatbot that would do the job you want and you only had to make some adaptations to it?
        """
        When I click on "Yes"
        Then SnatchBot should send Text
        """
        Of course it would be! And that’s what SnatchBot's templates offer!
        """
        Then SnatchBot should send Text
        """
        Ready to find more?
        """
        

    

    
    

  