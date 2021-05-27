const fs = require('fs');
const https = require('http');
const path = require('path');

const server = https.createServer((req, res) => {
  let filePath = path.join(__dirname, '../public', req.url === '/' ? 'index.html' : req.url);
  console.log(filePath);
  let extName = path.extname(filePath);
  let contentType = 'text/html';
  switch (extName) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      throw new Error('page doesn\'t exist')
    } else {
      res.writeHead(200, { 'ContentType': contentType })
      res.end(content, 'UTF-8');
    }
  })
});

const PORT = 5000;
server.listen(PORT, () => console.log(`bzzbzz.Server running on ${PORT}. BZZBZZ..`))