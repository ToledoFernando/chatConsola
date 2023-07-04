import { Sequelize, Model, DataTypes } from "sequelize";

interface IChat {
  id: string;
  code: string;
}

interface IChatModel extends Model<IChat>, IChat {}

export default (database: Sequelize) => {
  database.define<IChatModel>("Chats", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING,
    },
  });
};
