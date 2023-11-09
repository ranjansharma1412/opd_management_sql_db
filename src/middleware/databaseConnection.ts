import { Sequelize } from 'sequelize-typescript';
import User from '../models/User';

const sequelize = new Sequelize({
    database: 'opd_management',
    dialect: 'mysql',
    username: 'root',
    password: '',
    models: [User], // or [Player, Team],
});
// sequelize.addModels([User])
export default sequelize;