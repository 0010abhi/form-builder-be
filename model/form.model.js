module.exports = (sequelize, Sequelize) => {
    console.log('>>> field type model', sequelize, Sequelize);
    const Form = sequelize.define("form", {
        name: Sequelize.STRING(30),
        description: Sequelize.STRING(256),
        data: Sequelize.JSON,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at'
    }, {
        freezeTableName: true
    });
    console.log('>>> field type model define', Form);
    return Form;
};