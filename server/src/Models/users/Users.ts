import { Sequelize, DataTypes, Model } from "sequelize";

interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface IModelUser extends Model<IUser>, IUser {}

export default (database: Sequelize) => {
  database.define<IModelUser>("Users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
