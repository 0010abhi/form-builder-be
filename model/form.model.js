module.exports = (sequelize, Sequelize) => {
    const Form = sequelize.define("form", {
        name: Sequelize.STRING(30),
        description: Sequelize.STRING(256),
        data: Sequelize.JSON
    }, {
        freezeTableName: true
    });

    return Form;
};