const {Builder, By, Key, util} = require("selenium-webdriver");
async function login() {
   
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");

    try {
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    
    await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();
  
    const testcase = await driver.findElement(By.xpath('//li')).getText();
    assert.equal(testcase, "Welcome Admin", "Test Failed");
    console.log("Test Success");
    
    }catch(error){
      console.log("failed")
    }
  }
  
  login();