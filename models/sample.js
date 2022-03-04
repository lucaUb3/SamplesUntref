module.exports = (sequelize, dataTypes) => {

    let alias = "Samples";
    let cols  = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true ,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING
        },
        autor: {
            type: dataTypes. STRING
        },

        
    };
    let config = {
        tableName:"samples",
        timestamps:false
    }

    const Sample = sequelize.define(alias, cols, config);

    return Sample;
}