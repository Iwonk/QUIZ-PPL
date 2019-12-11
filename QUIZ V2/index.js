const {Builder, By, Key, util} = require("selenium-webdriver");
async function login() {
   
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert");

    try {
    await driver.get("https://demo.1crmcloud.com/login.php");
    
    await driver.findElement(By.id("login_user")).sendKeys("admin");
    await driver.findElement(By.id("login_pass")).sendKeys("admin");
    await driver.findElement(By.id("login_button")).click();

    await driver.sleep(10000);
    await driver.findElement(By.className("default-avatar")).click();
  
    const testcase = await driver.findElement(By.xpath('/h3')).getText();
    assert.equal(testcase, "Administrator", "Test Failed");
    console.log("Test Success");
      
    }catch(error){
      console.log("failed")
    }
  }
  
  login();