import { Model, DataTypes } from 'sequelize';
import { CatUnit } from './cat_unit.model';
import sequelize from './index'
import { Unit } from './unit.model';

interface CategorieAttributes {
    id: number;
    index: number; //index d'apparition
    title: string;
    img: string;
    label: string;
    eval_intro: string;
    eval_mid: string;
}

export class Categorie extends Model<CategorieAttributes> implements CategorieAttributes {
    public id!: number;
    public index!: number;
    public title!: string;
    public img!: string;
    public label!: string;
    public eval_intro!: string;
    public eval_mid!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Categorie.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    index: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
    },
    title: {
        type: new DataTypes.STRING(256),
        allowNull: false,
    },
    img: {
        type: new DataTypes.STRING(256),
        allowNull: true,
    },
    label: {
        type: new DataTypes.TEXT,
        allowNull: false,
    },
    eval_intro: {
        type: new DataTypes.STRING(256),
        allowNull: true,
    },
    eval_mid: {
        type: new DataTypes.STRING(256),
        allowNull: true,
    }
}, {
  tableName: 'Categorie',
  sequelize
})

Categorie.hasMany(CatUnit, {as: "Units"});

//sequelize.sync({ force: true });


