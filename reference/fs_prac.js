// https://nodejs.org/dist/latest-v12.x/docs/api/fs.html

// All file system operations have synchronous and asynchronous forms

// The asynchronous form always takes a completion callback as its last argument. 
// The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. 
// If the operation was completed successfully, then the first argument will be null or undefined.



const fs = require('fs');
const path = require('path');

// Create folder 
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log("folder created");
});


// Create and write to file 
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
'Hello World!', 
err => {
    if (err) throw err;
    console.log("file created and written");

    // File append 
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
    'I love Node.js', 
    err => {
        if (err) throw err;
        console.log("file appened");
    });
});


// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 
    'utf8',     // without 'utf8'  -> <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 49 20 6c 6f 76 65 20 4e 6f 64 65 2e 6a 73>
    (err, data) => {
    if (err) throw err;
    console.log(data);
});                     // Hello World!I love Node.js


// Rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed');
    }
);



// delete a folder
// NOTE : you must create a folder named "folderToDelete".
// NOTE : FolderToDelete must be an empty folder.
fs.rmdir(path.join(__dirname, "/folderToDelete"), (err) => {
    if (err) throw err;
    console.log("Folder deleted");
});


// Read the contents of a folder
// NOTE: the first argument can be whatever route you want, it doesn't have to be the actual dirname.
fs.readdir(__dirname, (err, files) => {
    if (err) throw err
    console.log(files)
}) 


// Copy a file 
fs.copyFile('source.txt', 'destination.txt', err => {
    if (err) throw err;
    console.log('File copied...')
})


