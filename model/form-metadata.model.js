const FieldType = require('./field-type.model');
const Form = require('./form.model');

module.exports = (sequelize, Sequelize) => {
    console.log('>>> field type model', sequelize, Sequelize);
    const FormMetadata = sequelize.define("form_metadata", {
        name: Sequelize.STRING(30),
        label: Sequelize.STRING(30),
        placeholder: Sequelize.STRING(100),
        sortOrder: Sequelize.INTEGER,
        is_required: {
            type: Sequelize.BOOLEAN
        },
        min_length: Sequelize.INTEGER,
        max_length: Sequelize.INTEGER,
        is_deleted: Sequelize.BOOLEAN,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at'
    }, {
        freezeTableName: true
    });

    // Foreign Keys
    FormMetadata.belongsTo(FieldType, { foreignKey: 'field_type_id' });
    FormMetadata.belongsTo(Form, { foreignKey: 'form_id' });

    console.log('>>> field type model define', FormMetadata);

    return FormMetadata;
};