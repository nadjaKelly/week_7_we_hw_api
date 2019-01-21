const PubSub = require('../helpers/pub_sub.js');

const CountryUserField = function (selectElement) {
  this.element = selectElement;
};


CountryUserField.prototype.bindEvents = function () {
  PubSub.subscribe('County:countries-data-ready', (evt) => {
    this.populate(evt.detail)
  });

  this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      PubSub.publish('CountryUserField:change', selectedIndex);
    })
  };

CountryUserField.prototype.populate = function (country) {
    country.forEach((country, index) => {
      const countryOption = this.createOption(country.name, index);
      this.element.appendChild(countryOption);
    });
  };

  CountryUserField.prototype.createOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};
module.exports = CountryUserField;
