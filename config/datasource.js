import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import relationship from '../models/_relationship'
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
let database = null;

const loadModels = (sequelize) => {
    const dir = path.join(__dirname, '../models');
    const models = [];
    fs.readdirSync(dir).forEach((file) => {
        if (file != '_relationship.js') {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            models[model.name] = model;
        }
    });

    return relationship(models);
};

export default (app) => {
    if (!database) {
        const config = app.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        database = {
            sequelize,
            Sequelize,
            models: {},
        };
        database.models = loadModels(sequelize);
        sequelize.sync().done(() => database);
    }

    return database;
};