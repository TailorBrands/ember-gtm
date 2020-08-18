ember-gtm
==============================================================================

Ember addon for integrating Google Tag Manager

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-gtm
```


Usage
------------------------------------------------------------------------------

All that's required is setting the GTM key in your `config/environment.js` file.
```js
// config/environment.js

ENV['ember-gtm'] = {
  appId: '[YOUR_APP_ID]'
};
```

Then you can use the `gtm` service freely.
```js
@service gtm;

@action
someAction() {
  const data = {
    something: "for the dataLayer"
  };
  this.gtm.trackGTM(data);
}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
