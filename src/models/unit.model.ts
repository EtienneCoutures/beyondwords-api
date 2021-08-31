import { Model, DataTypes } from 'sequelize';
import sequelize from './index'

interface UnitAttributes {
    id: number;
    index: number; //index d'apparition
    title: string;
    img: string;
    label: string;
}

export class Unit extends Model<UnitAttributes> implements UnitAttributes {
    public id!: number;
    public index!: number;
    public title!: string;
    public img!: string;
    public label!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Unit.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    index: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        defaultValue: 0
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
    }
}, {
  tableName: 'Unit',
  sequelize
})


// sequelize.sync();


