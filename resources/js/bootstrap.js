window._ = require('lodash');

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.baseURL = 'http://meatballproject.hu/api/'
// window.axios.defaults.baseURL = 'https://nagytamas93.hu/api/'

window.axios.defaults.withCredentials = true;
