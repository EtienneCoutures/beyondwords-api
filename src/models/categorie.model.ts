import { BelongsToManyAddAssociationMixin, BelongsToManyCountAssociationsMixin, BelongsToManyCreateAssociationMixin, BelongsToManyGetAssociationsMixin, BelongsToManyHasAssociationMixin, DataTypes } from 'sequelize';
import sequelize from './index'
import { Model } from 'sequelize-typescript'
import { Unit } from './unit.model';

interface CategorieAttributes {
    index: number;
    title: string;
    img: string;
    label: string;
    eval_intro: string;
    eval_mid: string;
}

export class Categorie extends Model<CategorieAttributes> implements CategorieAttributes {
    public index!: number;
    public title!: string;
    public img!: string;
    public label!: string;
    public eval_intro!: string;
    public eval_mid!: string;

    public getUnits!: BelongsToManyGetAssociationsMixin<Unit>;
    public addUnits!: BelongsToManyAddAssociationMixin<Unit, number>;
    public hasUnits!: BelongsToManyHasAssociationMixin<Unit, number>;
    public countUnits!: BelongsToManyCountAssociationsMixin;
    public createUnits!: BelongsToManyCreateAssociationMixin<Unit>;

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

Categorie.belongsToMany(Unit, { through: 'Cat_Unit' });
Unit.belongsToMany(Categorie, { through: 'Cat_Unit' });


// sequelize.sync({ force: true });


