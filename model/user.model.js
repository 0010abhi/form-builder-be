module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        first_name: Sequelize.STRING(30),
        last_name: Sequelize.STRING(30),
        email: Sequelize.STRING(50),
        password: Sequelize.STRING(30)
    }, {
        freezeTableName: true,
        paranoid: true
    });
    return User;
};