let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/test.jsx', 'public/js/test_app.js')
  .react('resources/assets/js/admin.jsx', 'public/js/admin_app.js')
  .react('resources/assets/js/customer.jsx', 'public/js/customer_app.js')
  .sass('resources/assets/sass/app.scss', 'public/css');
