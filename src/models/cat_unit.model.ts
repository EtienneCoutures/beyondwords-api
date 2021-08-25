import { Model, DataTypes } from 'sequelize';
import sequelize from './index'

interface CatUnitAttributes {
    id: number;
    cat_id: number;
    unit_id: number;
    prog: number;
}


export class CatUnit extends Model<CatUnitAttributes> implements CatUnitAttributes {
    public id!: number;
    public cat_id!: number;
    public unit_id!: number;
    public prog!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

CatUnit.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    cat_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    unit_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    prog: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    }
}, {
    tableName: 'CatUnit',
    sequelize
})

//sequelize.sync({ force: true });

