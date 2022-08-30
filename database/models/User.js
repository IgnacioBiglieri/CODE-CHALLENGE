module.exports = (sequelize, DataTypes) => {
    let alias = 'Users'
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING(100)
        },
        apellido: {
            type: DataTypes.STRING(100)
        },
        dni: {
            type: DataTypes.INTEGER(11),
            unique: true
        },
        telefono: {
            type: DataTypes.INTEGER(11)
        },
        email: {
            type: DataTypes.STRING(100)
        },
        domicilio: {
            type: DataTypes.STRING(100)
        }
    };
    let config = {
        tableName: 'users',
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config)

    return User
};