import { Sequelize } from "sequelize";
import defineModelUser from "../Models/users/Users";
import defineModelMessage from "../Models/messages/Messages";
import defineModelChat from "../Models/Chats/Chats";
import { PSQL } from "../config/config";

const database = new Sequelize(PSQL, {
  logging: false,
  native: false,
});

defineModelUser(database);
defineModelMessage(database);
defineModelChat(database);

const { Users, Messages, Chats } = database.models;

Chats.hasMany(Messages);
Users.hasMany(Messages);
Chats.belongsTo(Users, { as: "user1" });
Chats.belongsTo(Users, { as: "user2" });

export default database;
