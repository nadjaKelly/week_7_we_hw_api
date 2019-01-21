const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');


const Country = function (url) {
  this.url = url;
  this.country = [];
};

Country.prototype.bindEvents = function () {
  PubSub.subscribe('CountryUserField:change', (evt) => {
    selectedIndex = evt.detail;
    const selectedCountry = this.country[selectedIndex];
    PubSub.publish('Country:selected-country-ready', selectedCountry);
  });
};

Country.prototype.getData = function () {
  const request = new RequestHelper(this.url);
  request.get(data => this.handleData(data));
};


  // request.get()
  //  .then((data) => {
  //    this.data = data.message;
  //    PubSub.pub.publish('Country:country-data-loaded', this.data);
  //  })
  //  .catch((err)  => {
  //    console.error(err);
  //  })


  Country.prototype.getData = function () {
    const myRequest = new RequestHelper(this.url);
    const myPromise = myRequest.get();
    myPromise.then(data => this.handleData(data));
  };

Country.prototype.handleData = function (data) {
  this.country = data;
  PubSub.publish('Country:countries-data-ready', this.country);
};


module.exports = Country;
