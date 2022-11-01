const db = require('../../db');
const uuid = require('uuid/v4');
const moment = require('moment');

module.exports = async (req, res) => {
    var mysqlTimestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const item = {
        id: uuid(),
        iot_id: req.body.iot_id,
        consumption: req.body.consumption,
        timing: mysqlTimestamp,
    };

    await db.storeItem(item);
    res.send(item);
};
