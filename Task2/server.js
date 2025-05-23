const http = require('http');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Determine response based on URL
    let responseMessage = '';

    switch (req.url) {
        case '/home':
            responseMessage = '<h1>Welcome home</h1>';
            break;
        case '/about':
            responseMessage = '<h1>Welcome to About Us</h1>';
            break;
        case '/node':
            responseMessage = '<h1>Welcome to my Node Js project</h1>';
            break;
        default:
            responseMessage = '<h1>Page Not Found</h1>';
    }

    // Send the response
    res.end(responseMessage);
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});