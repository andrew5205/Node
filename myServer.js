const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log(req.url);   // to check what url is getting called 
    // go to localhodt:5000         // terminal shows /
    // go to localhodt:5000/about   // terminal shows /about 


    // having respond end with a <h1> tag, showing on browser  
    if(req.url === '/') {
        res.end('<h1>HOME Page</h1>')
    }
});

// while deploy, will look in port of process.env.PORT
// if NOT found, then look into the port 5000 like localhost:5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));