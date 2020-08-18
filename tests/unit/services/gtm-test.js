import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

class FakeDataLayer {
  items = [];

  push(item) {
    this.items.push(item);
  }
}

module('Unit | Service | gtm', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:gtm');
    assert.ok(service);
  });

  test('it only runs if the page has GTM', function(assert) {
    const someString = 'string';
    window.dataLayer = someString; // wrong type of object.
    let service = this.owner.lookup('service:gtm');

    const data = { stuff: 'things' };

    service.trackGTM(data);
    assert.equal(window.dataLayer, someString); // didn't push

    window.dataLayer = new FakeDataLayer();

    service.trackGTM(data);
    assert.equal(window.dataLayer.items[0], data); // pushed
  });
});
