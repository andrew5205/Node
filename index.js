
// const person = require('./person');

// console.log(person);



// const Person = require('./person');

// const person1 = new Person('John', 30);

// person1.greeting();


// // ***************************** Logger **************************************** //
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log(`Called Listener:`, data));

// logger.log('Hello World!!');
// logger.log('Hi');
// logger.log('Hello');
// // ************************************************************************** //




// express can to the same but easier 
// app.get ()
// *Note below is just using core Node.js module
const http = require("http");
const path = require("path");
const fs = require("fs");

// http.createServer()
// store in variable called server
// takes in req and res 
const server = http.createServer((req, res) => {

    // console.log(req.url);   // to check what url is getting called 
    // // go to localhodt:5000         // terminal shows /
    // // go to localhodt:5000/about   // terminal shows /about 


    // // having respond end with a <h1> tag, showing on browser  
    // if(req.url === '/') {

    //     // // simple example to load element 
    //     // res.writeHead(200, { 'Content-Type': 'text/html'});
    //     // res.end('<h1>HOME page</h1>')



    //     // use fs module to reaf/ load files 
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), 
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { 'Content-Type': 'text/html'});
    //             res.end(content);
    //         });
    // }


    // if ( req.url === '/api/users') {
    //     const users = [
    //         { name: 'Bob Smith', age: 40 },
    //         { name: 'John Doe', age: 30 }
    //     ];
    //     // application/json => Content-Type
    //     res.writeHead(200, { 'Content-Type': 'application/json'});
    //     // stringigy => turn object into json
    //     res.end(JSON.stringify(users));
    // }


    // ******************* //
    // Build file path
    let filePath = path.join(
    __dirname,
    "public",
    // callback 
    // ternary operator
    // if its index, load index.hrtml
    // if not load requested url 
    req.url === "/" ? "index.html" : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html";


    // *NOTE
    // If not checking extension, can only load .html (which is set as default)
    // Check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }
    

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    console.log(filePath);

    // Read File
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // in err
            if (err.code == "ENOENT") {
                // load 404.html if err.code == ENOENT 
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(404, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                        }
                );
            } else {
                //  Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
            // err end
        } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            // send the content to the file 
            res.end(content, "utf8");
        }
    });
});

// while deploy, will look in port of process.env.PORT
// if NOT found, then look into the port 5000 like localhost:5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));










