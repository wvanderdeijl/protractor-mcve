
describe('protractor with angular', function() {
  it('should allow a test to dismiss an alert', function() {
    browser.get('http://localhost:8080')

    browser.driver.get('http://angularjs.org')
    browser.switchTo().alert().accept()

    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
