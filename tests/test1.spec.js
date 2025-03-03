const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('Calculator Subtraction Tests', function() {
  this.timeout(30000);
  let driver;

  beforeEach(async function() {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())
      .build();
    await driver.get('http://localhost:8080');
  });

  afterEach(async function() {
    await driver.quit();
  });

  it('Tarea1', async function() {
    await driver.get("http://localhost:8080/");
    await driver.manage().window().setRect({ width: 974, height: 1032 });
    await driver.findElement(By.id("num1")).sendKeys("1");
    await driver.findElement(By.id("num2")).sendKeys("1");
    await driver.findElement(By.css(".button-group > button:nth-child(1)")).click();
    await driver.findElement(By.css(".button-group > button:nth-child(2)")).click();
  });
});
