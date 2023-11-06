module.exports = (sequelize, Sequelize) => {
    const FieldType = sequelize.define("field_type", {
        name: Sequelize.STRING,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at'
    }, {
        freezeTableName: true
    });
    return FieldType;
};