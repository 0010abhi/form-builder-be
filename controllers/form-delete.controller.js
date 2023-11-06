const db = require("../model");
// models path depends on your structure
const FieldType = db.fieldType;

exports.getFieldTypes = (req, res) => {
    FieldType.findAll().then(data => {
        console.log('>>> data', data);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            Message:
                err.message || "Some errors will occur when creating a tutorial"
        });
    });
};