const app = require("./app.js");
const { port } = require("./config.js");
const logger = require("./utils/logger.js");

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
