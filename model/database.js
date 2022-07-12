const { Sequelize } = require("sequelize");

//database Connection

console.log("Database is try to connecting");

const thread = new Sequelize("thread", "postgres", "12345", {
  dialect: "postgres",
  logging: false,
});

thread
  .authenticate()
  .then(() => {
    console.log("Database  is connected");
  })
  .catch((err) => {
    console.log("Database is Not connected Please Check the error");
    console.log(err.message);
  });

module.exports = thread;