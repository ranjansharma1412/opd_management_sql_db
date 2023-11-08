import { Sequelize } from 'sequelize-typescript';

const database = new Sequelize({
    database: 'opd_management',
    dialect: 'mysql',
    username: 'root',
    password: '',
    models: [__dirname + '/src/models'], // or [Player, Team],
});

export default database;