const db = require('../../db');

module.exports = async (req, res) => {
    const items = await db.getItemByIotID(req.params.id);
    res.send(items);
};

