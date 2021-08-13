import { Model, DataTypes } from 'sequelize';
import sequelize from './index'

interface UserCatAttributes {
    id: number;
    user_id: number;
    cat_id: number;
    prog: number;
}


export class UserCat extends Model<UserCatAttributes> implements UserCatAttributes {
    public id!: number;
    public user_id!: number;
    public cat_id!: number;
    public prog!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserCat.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    cat_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    prog: {
        type: DataTypes.INTEGER.UNSIGNED,
        defaultValue: 0
    }
}, {
    tableName: 'UserCat',
    sequelize
})

//sequelize.sync({ force: true });

