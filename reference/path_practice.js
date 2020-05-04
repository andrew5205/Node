// https://nodejs.org/dist/latest-v12.x/docs/api/path.html

const path = require('path');

// Base file name 
console.log(path.basename(__filename));     // path_practice.js 


// Directory name 
console.log(path.dirname(__filename));      // /Users/andrew/Desktop/Node/NodeJS/reference


// File extension 
console.log(path.extname(__filename));      // .js


// Parse path object
console.log(path.parse(__filename));        

// {
//     root: '/',
//     dir: '/Users/andrew/Desktop/Node/NodeJS/reference',
//     base: 'path_practice.js',
//     ext: '.js',
//     name: 'path_practice'
// }


// Create path object
console.log(path.parse(__filename).base);       // path_practice.js


// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));        // /Users/andrew/Desktop/Node/NodeJS/reference/test/hello.html


// get the path delimiter base on the current OS Environment
const platSpec = path.delimiter;
console.log(platSpec);


// get the path format on POSIX : / and Windows : \
// more info : https://nodejs.org/dist/latest-v11.x/docs/api/path.html#path_path_format_pathobject
const pathformat = path.format({
    dir: '/Users/andrew/Desktop/Node/NodeJS/reference',
    root: '/ignored',
    base: 'path_create.js',
    name: 'path_create',
    ext: '.js',
});
console.log(pathformat);        // /Users/andrew/Desktop/Node/NodeJS/reference/path_create.js


// get the parent folder director
const parentDir = path.dirname(__dirname);
console.log(parentDir);     // /Users/andrew/Desktop/Node/NodeJS
