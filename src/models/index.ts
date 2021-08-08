import { Sequelize } from 'sequelize'

const db_name: string = 'db_beyond_words';
const db_user: string = 'root';
const db_pw: string = '';
const sequelize_info: Object = {
  dialect: 'mysql',
  host: 'localhost'
};

const sequelize = new Sequelize(
  db_name,
  db_user,
  db_pw,
  sequelize_info
)

export default sequelize