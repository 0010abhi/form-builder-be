module.exports = (sequelize, Sequelize) => {
    console.log('>>> field type model', sequelize, Sequelize);
    const FieldType = sequelize.define("field_type", {
        name: Sequelize.STRING,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at'
    }, {
        freezeTableName: true
    });
    console.log('>>> field type model define', FieldType);
    return FieldType;
};