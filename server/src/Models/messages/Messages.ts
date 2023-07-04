import { Sequelize, DataTypes, Model } from "sequelize";

interface IMessage {
  id: string;
  content: string;
}

interface IMessageModel extends Model<IMessage>, IMessage {}

export default (database: Sequelize) => {
  database.define<IMessageModel>("Messages", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
