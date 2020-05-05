const url = require('url');

// const URL = require('url').URL;
/* NOTE: if you are using v6 (LTS), line 1 gives errors,
*  if you get an error saying, TypeError: URL is not a constructor, 
*  comment line 1, and uncomment line 2 */


const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL 
console.log(myUrl.href);        // http://mywebsite.com:8000/hello.html?id=100&status=active

// calling toString() 
console.log(myUrl.toString());  // http://mywebsite.com:8000/hello.html?id=100&status=active

// calling toJSON()
console.log(myUrl.toJSON());    // http://mywebsite.com:8000/hello.html?id=100&status=active


// ************************************************************************************************ // 
const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org')
    ];
// JSON.stringify()
console.log(JSON.stringify(myURLs));    // ["https://www.example.com/","https://test.example.org/"]
// ************************************************************************************************ // 


// Host (root domain)
console.log(myUrl.host);        // mywebsite.com:8000


// Hostname (does not get port)
console.log(myUrl.hostname);    // mywebsite.com


// Pathname (the actual file)
console.log(myUrl.pathname);    // /hello.html


// Serialized query (everything after ?)
console.log(myUrl.search);      // ?id=100&status=active


// Params object (return as object)
console.log(myUrl.searchParams);    // URLSearchParams { 'id' => '100', 'status' => 'active' }


// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);        // URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }


// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

// id: 100
// status: active
// abc: 123


// get val from Url object
console.log(myUrl.searchParams.get('abc'));     // 123


// get all 
console.log(myUrl.searchParams.getAll('status'));       // [ 'active' ]





