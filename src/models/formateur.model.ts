import { Model, DataTypes } from 'sequelize';
import { Categorie } from './categorie.model';
import sequelize from './index'
import { User } from './user.model';


interface FormateurAttributes {
   id: number;
   firstname: string;
   lastname: string;
   phone: string;
   email: string;
   description: string;
   url: string;
}


export class Formateur extends Model<FormateurAttributes> implements FormateurAttributes {
  public id!: number;
  public firstname!: string;
  public lastname!: string;
  public phone!: string;
  public email!: string;
  public description!: string;
  public url!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Formateur.init({
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
  phone: {
    type: new DataTypes.STRING(64),
    allowNull: false,
  },
  description: {
    type: new DataTypes.TEXT,
    allowNull: true,
  },
  url: {
    type: new DataTypes.STRING(256),
    allowNull: false,
  }
}, {
  tableName: 'Formateur',
  sequelize
})

Formateur.hasMany(User, {as: "Users"});
Formateur.hasMany(Categorie, {as: "Users"});

//let debug: any
//sequelize.sync({ force: true });

