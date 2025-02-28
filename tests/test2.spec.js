const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('test2', function() {
  this.timeout(30000);
  let driver;
  let vars;
  
  beforeEach(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new (require('selenium-webdriver/chrome').Options)().headless()) // Run in headless mode
      .build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit(); // Quit instead of closing
  });
  it('test_2', async function() {
    await driver.get("http://localhost:8000/")
    await driver.manage().window().setRect({ width: 1053, height: 799 })
    await driver.findElement(By.linkText("src/")).click()
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("-9")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("9")
    await driver.findElement(By.css("button:nth-child(2)")).click()
  })
})