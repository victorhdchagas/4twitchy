export default (sequelize, DataType) => {
    const twitchpartner = sequelize.define('twitchpartner', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: true,
        },
        nick: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataType.DATE,
            allowNull: false,
            defaultValue: DataType.NOW
        }
    });
    return twitchpartner;
};