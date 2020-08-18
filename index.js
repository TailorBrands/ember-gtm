'use strict';

module.exports = {
  name: require('./package').name,

  contentFor: function(type, config) {
    const addonConfig = config['ember-gtm'];
    const appId = addonConfig ? addonConfig.appId : null;
    if (type === 'head' && appId) {
      return `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${appId}');</script>`;
    } else if (type === 'body' && appId) {
      return `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${appId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
    }
  }
};
