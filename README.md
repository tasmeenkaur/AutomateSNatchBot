# AutomateSnatchBot
The purpose of Project is to Automate the Testing of [SnatchBot](https://snatchbot.me/). The Bot located at the Bottom right of the page is used to demonstrate the Testing

## Tech-Stack

- Javascript
- WebdriverIO
- Cucumber

## Design Pattern

- Page Object Model

## Installation

Visual Studio Code is used to Run the Project

Install the dependencies 

```sh
npm install
```
Run the Tests
```sh
npm run test
```


## Reports

Following Reports are used to analyze results

| Report | Output |
| ------ | ------ |
| Junit | Results are published in "results.xml" |
| Allure | Results are published in "allure-reports". To view report run ``` npm run openAllure```   |


## CI/CD Integeration

The project is integerated with Jenkins on local machine. 

While setting up the Jenkins Project:
- In Build section, add Run Windows Bash Command ``` npm install``` and ```npm run test```
- In Pose Build Action, Add Publish Junit Report and give path to "results.xml"

