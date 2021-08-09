import { Model, DataTypes } from 'sequelize';
import sequelize from './index'


interface UserAttributes {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}


export class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public phone!: string;
  public address!: string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  lastname: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
    unique: true,
  },
  password: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  phone: {
    type: new DataTypes.STRING(64),
    allowNull: false,
  },
  address: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  },
}, {
  tableName: 'User',
  sequelize
})

//let debug: any
//sequelize.sync({ force: true });
