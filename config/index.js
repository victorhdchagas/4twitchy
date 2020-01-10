import twitch from "./twitch.json"
module.exports = {
    twitch,
    server: {
        defaultPort: 80,

    },
    database: {
        database: 'Setor8',
        username: '',
        password: '',
        params: {
            dialect: 'sqlite',
            storage: `./database/database.sqlite`,
            define: {
                underscored: true,
            },
            dialectOptions: {
                useUTC: false
            }
        }
    }
}