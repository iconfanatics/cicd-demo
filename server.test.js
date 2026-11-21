const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('./server');

test('GET /health returns status ok', async () => {
  const server = createServer();
  await new Promise((resolve) => server.listen(0, resolve));
  const { port } = server.address();

  const res = await fetch();
  const data = await res.json();

  assert.strictEqual(res.status, 200);
  assert.strictEqual(data.status, 'ok');
  server.close();
});
