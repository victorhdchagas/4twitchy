export default (models) => {
    // models['finaz'].belongsTo(models['usuarios'], { foreignKey: 'idsistemaintegrado', targetKey: 'id' });
    // models['usuarios'].hasOne(models['finaz'], { foreignKey: 'idsistemaintegrado', targetKey: 'idsistemaintegrado' });
    // models['empresas'].hasMany(models['usuarios'], { foreignKey: 'idempresa', sourceKey: 'id' });
    // models["usuarios"].belongsTo(models['empresas'], { foreignKey: 'idempresa', targetKey: 'id' });

    // models['empresas'].hasMany(models['carteiras'], { foreignKey: 'idempresa', sourceKey: 'id' });
    // models["carteiras"].belongsTo(models['empresas'], { foreignKey: 'idempresa', targetKey: 'id' });
    // models['produtos'].hasMany(models['carteiras'], { foreignKey: 'idproduto', sourceKey: 'id' });
    // models["carteiras"].belongsTo(models['produtos'], { foreignKey: 'idproduto', targetKey: 'id' });


    // models['mailings'].hasMany(models['mailingitens'], { foreignKey: 'idmailing', sourceKey: 'id' });
    // models["mailingitens"].belongsTo(models['mailings'], { foreignKey: 'idmailing', targetKey: 'id' });


    // models['mailingitens'].hasMany(models['mailingitemfones'], { foreignKey: 'idmailingitem', sourceKey: 'id' });
    // models["mailingitemfones"].belongsTo(models['mailingitens'], { foreignKey: 'idmailingitem', targetKey: 'id' });


    // models['clienteposvenda'].hasMany(models['clienteposvendafones'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["clienteposvendafones"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });
    // models['clienteposvenda'].hasMany(models['clienteposvendaenderecos'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["clienteposvendaenderecos"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });
    // models['clienteposvenda'].hasMany(models['clienteposvendacontratos'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["clienteposvendacontratos"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });
    // models['clienteposvenda'].belongsTo(models['usuarios'], { foreignKey: 'idusuario', targetKey: 'id' });
    // models['usuarios'].hasOne(models['clienteposvenda'], { foreignKey: 'idusuario', targetKey: 'idusuario' });
    // models['clienteposvenda'].hasMany(models['clienteposvendacontrolefluxo'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["clienteposvendacontrolefluxo"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });
    // models['clienteposvenda'].hasMany(models['clienteposvendadocumentos'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["clienteposvendadocumentos"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });
    // models['clienteposvendadocumentos'].hasMany(models['clienteposvendadocumentosstatus'], { foreignKey: 'iddocumento', sourceKey: 'id' }, { as: 'status' });
    // models["clienteposvendadocumentosstatus"].belongsTo(models['clienteposvendadocumentos'], { foreignKey: 'iddocumento', targetKey: 'id' });

    // models['atendimentos'].belongsTo(models['usuarios'], { foreignKey: 'idusuario', targetKey: 'id' });
    // models['usuarios'].hasOne(models['atendimentos'], { foreignKey: 'idusuario', targetKey: 'idusuario' });
    // models['atendimentos'].belongsTo(models['mailingitens'], { foreignKey: 'idmailingitem', targetKey: 'id' });
    // models['mailingitens'].hasOne(models['atendimentos'], { foreignKey: 'idmailingitem', targetKey: 'idmailingitem' });

    // // models['usuarios'].hasOne(models['equipescolaborador'], {foreignKey:'id', targetKey:'id'});
    // models['equipescolaborador'].belongsTo(models['usuarios'], { foreignKey: 'idcolaborador', targetKey: 'id' });
    // //UM dia vai estar tudo unificado em uma tabela.	
    // // models["empresas"].belongsToMany(models['informacaobeneficio'],  {through: models['consultasonline']})
    // // models["informacaobeneficio"].belongsToMany(models['empresas'], {through: models['consultasonline']})

    // models["usuarios"].belongsToMany(models['permissao'], { through: models['permissaousuario'] })
    // models["permissao"].belongsToMany(models['usuarios'], { through: models['permissaousuario'] })
    // models["empresas"].belongsToMany(models['produtos'], { through: models['empresasprodutos'] })
    // models["produtos"].belongsToMany(models['empresas'], { through: models['empresasprodutos'] })
    // models['discador'].belongsTo(models['empresas'], { foreignKey: 'idempresa', targetKey: 'id' });
    // models['empresas'].hasOne(models['discador'], { foreignKey: 'idempresa', targetKey: 'idempresa' });

    // models['empresas'].hasMany(models['historicotransacoes'], { foreignKey: 'idempresa', sourceKey: 'id' });
    // models["historicotransacoes"].belongsTo(models['empresas'], { foreignKey: 'idempresa', targetKey: 'id' });

    // models['empresas'].hasMany(models['equipes'], { foreignKey: 'idempresa', sourceKey: 'id' });
    // models["equipes"].belongsTo(models['empresas'], { foreignKey: 'idempresa', targetKey: 'id' });

    // models['usuarios'].hasMany(models['historicotransacoes'], { foreignKey: 'idusuario', sourceKey: 'id' });
    // models["historicotransacoes"].belongsTo(models['usuarios'], { foreignKey: 'idusuario', targetKey: 'id' });

    // models['produtos'].hasMany(models['historicotransacoes'], { foreignKey: 'idproduto', sourceKey: 'id' });
    // models["historicotransacoes"].belongsTo(models['produtos'], { foreignKey: 'idproduto', targetKey: 'id' });

    // models['dadoscadastrais'].hasMany(models['telefones'], { foreignKey: 'iddadoscadastrais', sourceKey: 'id' })
    // models['telefones'].belongsTo(models['dadoscadastrais'], { foreignKey: 'iddadoscadastrais', targetKey: 'id' })

    // models['dadoscadastrais'].hasMany(models['contascorrentes'], { foreignKey: 'iddadoscadastrais', sourceKey: 'id' })
    // models['contascorrentes'].belongsTo(models['dadoscadastrais'], { foreignKey: 'iddadoscadastrais', targetKey: 'id' })


    // models["empresas"].belongsToMany(models['informacaobeneficio'], { through: models['empresasbeneficios'] })
    // models["informacaobeneficio"].belongsToMany(models['empresas'], { through: models['empresasbeneficios'] })

    // models['empresasbeneficios'].hasMany(models['informacaobeneficio'], { foreignKey: 'id', sourceKey: 'informacaobeneficio_id' })
    // models['informacaobeneficio'].belongsTo(models['empresasbeneficios'], { foreignKey: 'id', targetKey: 'informacaobeneficio_id' })


    // models['usuarios'].hasMany(models['comentarios'], { foreignKey: 'idusuario', sourceKey: 'id' });
    // models["comentarios"].belongsTo(models['usuarios'], { foreignKey: 'idusuario', targetKey: 'id' });

    // models['mailingitens'].hasMany(models['comentarios'], { foreignKey: 'idcliente', sourceKey: 'id' });
    // models["comentarios"].belongsTo(models['mailingitens'], { foreignKey: 'idcliente', targetKey: 'id' });

    // models['clienteposvenda'].hasMany(models['comentarios'], { foreignKey: 'idclienteposvenda', sourceKey: 'id' });
    // models["comentarios"].belongsTo(models['clienteposvenda'], { foreignKey: 'idclienteposvenda', targetKey: 'id' });

    // models['mailingitens'].hasMany(models['agendamentos'], { foreignKey: 'idcliente', sourceKey: 'id' });
    // models["agendamentos"].belongsTo(models['mailingitens'], { foreignKey: 'idcliente', targetKey: 'id' });

    return models;
}