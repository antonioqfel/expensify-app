// path is built-in, so we don't need to manually install this one
const path = require('path');

//  Load in Express
const express = require('express');

// Create a new instance of Express
const app = express();

// Define the public path
const publicPath = path.join(__dirname, '../', 'public');

// Set the port for Heroku
const port = process.env.PORT || 3000;

// Serve the public server and everything inside
/**
 * app.use() is one way we can customize our express server and we're going
 * to be use this to register middleware.
 * Middleware is something that runs for each request. For example if someone
 * makes a request to the server we might want to run some code that logs
 * something to the screen. If something makes a request we might want
 * to run some code that serves up that asset from the public directory.
 */
// Now we have an Express application that is going to serve up all assets from that directory
app.use(express.static(publicPath));

// Set up our route
// The request object contains some information about the request.
// The response object lets us manipulate the response our Express server makes to whoever made the HTTP request
app.get('*', (req, res) => {

    // This is going to allow us to send that file back
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Start up the server
app.listen(port, () => {
    console.log('Server is up!');
});

