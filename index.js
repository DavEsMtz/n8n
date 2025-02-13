const n8n = require('n8n');

const PORT = process.env.PORT || 5678;

n8n.start({
  webhook: process.env.WEBHOOK_URL || ⁠ http://localhost:${PORT}/ ⁠,
  port: PORT,
});
