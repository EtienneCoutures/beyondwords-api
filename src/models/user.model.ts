import { BelongsToManyAddAssociationMixin, BelongsToManyCountAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, DataTypes } from 'sequelize';
import { Categorie } from './categorie.model';
import sequelize from './index'
import { Model } from 'sequelize-typescript'

interface UserAttributes {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}


export class User extends Model<UserAttributes> implements UserAttributes {
  public firstname!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;
  public phone!: string;
  public address!: string;

  public getCategories!: BelongsToManyGetAssociationsMixin<Categorie>;
  public addCategories!: BelongsToManyAddAssociationMixin<Categorie, number>;
  public hasCategories!: BelongsToManyHasAssociationMixin<Categorie, number>;
  public countCategories!: BelongsToManyCountAssociationsMixin;
  public createCategories!: BelongsToManyCreateAssociationMixin<Categorie>;

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

User.belongsToMany(Categorie, {through: 'User_Cat'});
Categorie.belongsToMany(User, {through: 'User_Cat'});

// sequelize.sync({ force: true });

