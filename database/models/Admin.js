module.exports = (sequelize, DataTypes) => {
    let alias = 'Admins'
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        user_id: {
            type: DataTypes.INTEGER(11)
        },
    };
    let config = {
        tableName: 'admins',
        timestamps: false
    }

    let Admin = sequelize.define(alias, cols, config)

    return Admin
};