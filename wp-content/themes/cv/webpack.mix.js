// webpack.mix.js

const mix = require('laravel-mix');
const glob = require('glob');

// Define the blocks directory
const blocksDir = 'blocks';

// Config

mix.webpackConfig({
    stats: {
        children: true
    }
});

// CSS

mix.
    sass('assets/styles/style.scss', 'style.css')
    .options({
        processCssUrls: false
    });

// JS

// Scan block subdirectories for JS files to include

let jsFiles = glob.sync(`${blocksDir}/**/*.js`).filter(file => !file.endsWith('.min.js'));

// Add main `scripts.js` to the files to be compiled

jsFiles.unshift('assets/scripts/scripts.js');

// Compile the files into a single output file

mix.js(jsFiles, 'js/scripts.min.js');

// Compile block stylesheets to individual CSS files

glob.sync(`${blocksDir}/**/*.scss`).forEach(file => {
    let output = file.replace('.scss', '.css');
    mix.sass(file, output);
});