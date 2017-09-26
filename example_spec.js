describe('protractor', function() {
  it('<description of your problem>', async function() {
    await browser.get('http://www.angularjs.org');
    const texts = await element.all(by.tagName('div')).map(elem => elem.getText());
  });
});
