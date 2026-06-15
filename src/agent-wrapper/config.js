require('dotenv').config();

module.exports = {
  directLineSecret: process.env.DIRECT_LINE_SECRET,
  botId: process.env.BOT_ID,
  tenantId: process.env.TENANT_ID,
  environment: process.env.ENVIRONMENT || 'dev',
  maxRetries: parseInt(process.env.MAX_RETRIES) || 1,
  timeoutMs: parseInt(process.env.TIMEOUT_MS) || 30000,
  logLevel: process.env.LOG_LEVEL || 'info'
};
