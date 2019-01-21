
const CountryInfoDisplay = require('./views/country_info_display.js');
const CountryUserField = require('./views/country_user_field.js');
const Country = require('./models/country.js');



document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');
  const selectElement = document.querySelector('select#countries');
  const countryUserField = new CountryUserField(selectElement);
  CountryUserField.bindEvents();

  const countryContainer = document.querySelector('#country');
    const countryInfoDisplay= new CountryInfoDisplay(countryContainer);
    CountryInfoDisplay.bindEvents();

    const country = new Country('https://restcountries.eu/rest/v2/all');
     country.bindEvents();
     country.getData();
});
