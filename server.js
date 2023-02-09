const app = require("./app.js");
const { port } = require("./config.js");
const logger = require("./utils/logger.js");

app.all('path', (req, res, next) => {
  
});
app.use(async (err, req, res, next) => {
  logger.error(err.message)
  return res.json(`${req.hostname}:${port}${req.url} invalid path`);
});
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
  console.log(`Server started on port ${port}`);
});
