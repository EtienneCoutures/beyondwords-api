import { Sequelize } from 'sequelize'
import { sequelize_config } from '../config/sequelizeConfig';


const sequelize = new Sequelize(
  sequelize_config.db_name,
  sequelize_config.db_user,
  sequelize_config.db_pw,
  sequelize_config.sequelize_info as any
)

export default sequelize