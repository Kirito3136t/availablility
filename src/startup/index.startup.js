const { PORT } = process.env;
const Logger = require("../helpers/logger.helpers");
const cookieParser = require('cookie-parser');



module.exports = async (app) => {
  app.use(cookieParser());
  await require("./db.startup")(app); //intiate db connection
  require("./routes.startup")(app); // intiate routes
  require("./error.startup")(app); // intiate error handlers
  
  //Starting Server
  app.listen(PORT || 3001, () => {
    Logger.info(`🚀 Server is Running on PORT =>${PORT}`, PORT || 3001);
  });
};
