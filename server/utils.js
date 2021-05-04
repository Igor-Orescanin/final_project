const logger = {
    log: (msg) => console.log(`${new Date().toISOString()} ${msg}`),
    error: (error) => console.error(error),
  };
  
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  module.exports = {
    logger,
    sleep,
  };