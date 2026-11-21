const http = require('http');

const PORT = process.env.PORT || 3000;

function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ status: 'ok', env: process.env.NODE_ENV || 'dev' }));
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from CI/CD Pipeline!');
  });
}

if (require.main === module) {
  createServer().listen(PORT, () => console.log());
}

module.exports = { createServer };
