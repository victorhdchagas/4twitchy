class TwitchPartnerController {
    constructor(models, sequelize = null) {
        this.TwitchPartner = models.twitchpartner;
        this.sequelize = sequelize;
    }

    create(param) {
        return this.sequelize.transaction((t) => {
            return this.TwitchPartner
                .findOne({ where: param })
                .then(partner => {
                    if (!partner)
                        return this.TwitchPartner.create(param, { transaction: t })
                            .then(ret => { msg: "User was created" });
                    else
                        return { msg: "User exists" }
                })

        })
    }


    createOrUpdate(model, where, newItem, transaction = null) {
        return this.TwitchPartner
            .findOne({ where: where })
            .then(function(foundItem) {
                if (!foundItem) {
                    return this.TwitchPartner
                        .create(newItem, { transction: transaction })
                        .then(function(item) { return { item: item, created: true }; })
                }
                return this.TwitchPartner
                    .update(newItem, { where: where }, { transaction: transaction })
                    .then(function(item) { return { item: item, created: false } });
            })
    }
}

export default TwitchPartnerController;