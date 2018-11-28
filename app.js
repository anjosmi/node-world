//Having fun with Node.js
const fs = require('fs');
const files = fs.readdirSync("./");
console.log(files);

fs.readdir('./', function(err, files){
	if (err) console.log('Error', err);
	else console.log('Result', files);
});

//log Host Information
const os = require('os');
const hostName =  os.hostname();
const totalMem =  os.totalmem();
const freeMem = os.freemem();

const message = "Logging message... Host: " + hostName + " - Total mem: " + totalMem + " - Free mem: " + freeMem;
const logger = require('./logger.js');
logger.log(message);
