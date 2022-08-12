const { db } = require("../db");
const { Sequelize, DataTypes } = require("sequelize");

// TODO - create a Menu model

const Menu = db.define("menu", {
  title: {
    type: DataTypes.STRING,
  },
});

async function main() {
  await Menu.sync();

  await Menu.create({
    title: "saver menu",
  });
}

main();

module.exports = { Menu };
