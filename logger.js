    console.log(__filename);
    console.log(__dirname);

    var url = 'http://mylogger.io/log';

    function log(message){
        //TODO - Send an HTTP request
        console.log(message); //just log in the console for now
    }

    module.exports.log = log;