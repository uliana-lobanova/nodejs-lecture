// import of the http module
const http = require('http');

// import of fs http module
const fs = require('fs');

const port = 3000;

// create a stream for writing to a file
const logFile = fs.createWriteStream('log.txt', { flags: 'a' });


// callback on each HTTP request
const requestHandler = (request, response) => {
    console.log(request.url);
    logFile.write(`Request url: ${request.url}\n`);
    response.end("How you doin'?");
};

// create HTTP-server
const server = http.createServer(requestHandler);

// run the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
