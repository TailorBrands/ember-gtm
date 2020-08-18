import Service from '@ember/service';

export default class GtmService extends Service {
  _pageHasGTM() {
    return window.dataLayer && typeof window.dataLayer === 'object';
  }

  trackGTM(data) {
    if (this._pageHasGTM()) {
      window.dataLayer.push(data);
    }
  }
}
