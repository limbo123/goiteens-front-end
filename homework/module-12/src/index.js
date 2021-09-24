import './sass/main.scss';
var debounce = require('lodash.debounce');
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify';
import '@pnotify/core/dist/BrightTheme.css';
import countryMarkup from './country.hbs';
import { fetchCountries } from './fetchCountries';

const countryList = document.querySelector('#country-list');
const searchInput = document.querySelector('#search-input');

searchInput.addEventListener(
  'input',
  debounce(event => {
    countryList.replaceChildren();
    if (event.target.value !== '') {
      fetchCountries(event.target.value).then(fullRes => {
        if (Array.isArray(fullRes)) {
          if (fullRes.length > 1 && fullRes.length <= 10) {
            console.log('hello');
            let markup = '';
            fullRes.forEach(country => {
              markup += `<li>${country.name}</li>`;
              return;
            });
            countryList.insertAdjacentHTML('beforeend', markup);
          } else if (fullRes.length > 10) {
            alert({
              text: 'Too many matches found. Please enter a more specific query.',
              type: 'error',
            });
            return;
          } else if (fullRes.length === 1) {
            console.log(fullRes[0]);
            countryList.insertAdjacentHTML('beforeend', countryMarkup(fullRes[0]));
            return;
          }
        }
      });
    }
  }, 700),
);
