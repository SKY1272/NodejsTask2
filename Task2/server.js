const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the form HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <form method="POST" action="/submit">
        <input type="text" name="message" placeholder="Enter message" required />
        <button type="submit">Submit</button>
      </form>
    `);
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Collect POST data
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      // Parse form data (assuming urlencoded)
      const params = new URLSearchParams(body);
      const message = params.get('message') || 'No message';

      // Write to a file (append)
      const filePath = path.join(__dirname, 'messages.txt');
      fs.appendFile(filePath, message + '\n', err => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        // Redirect with 302
        res.writeHead(302, { Location: '/' });
        res.end();
      });
    });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
