module.exports = (sequelize, Sequelize) => {
    const FormMetadata = sequelize.define("form_metadata", {
        name: Sequelize.STRING(30),
        label: Sequelize.STRING(30),
        placeholder: Sequelize.STRING(100),
        sortOrder: Sequelize.INTEGER,
        is_required: Sequelize.BOOLEAN,
        min_length: Sequelize.INTEGER,
        max_length: Sequelize.INTEGER,
    }, {
        freezeTableName: true,
        paranoid: true
    });

    FormMetadata.associate = (model) => {
        FormMetadata.belongsTo(model.FieldType, {
            foreignKey: 'fieldTypeId',
        });
    };

    FormMetadata.associate = (model) => {
        FormMetadata.belongsTo(model.Form, {
            foreignKey: 'formId',
        });
    };

    return FormMetadata;
};