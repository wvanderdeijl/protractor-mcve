
describe('protractor with angular', function() {
  it('should allow a test to dismiss an alert', function() {
    browser.get('http://nick-tomlin.com/protractor-minimal-working-example/index.html')

    browser.driver.get('http://angularjs.org')
    // comment out this line to trigger the unexpected alert dialog
    browser.switchTo().alert().accept()

    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));
    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});
