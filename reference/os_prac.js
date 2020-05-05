const os = require('os');

// Platform 
console.log(os.platform());     // darwin => platform for mac


// CPU Arch 
console.log(os.arch());     // x64

// CPU info 
console.log(os.cpus());     // objects 


// Free memory 
console.log(os.freemem());      // 439046144


//  Total memory
console.log(os.totalmem());     // 17179869184


// Home dir
console.log(os.homedir());      // /Users/andrew


// Uptime
console.log(os.uptime());       // 3680683 <= in sec 

