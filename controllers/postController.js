const postModel = require('../models/postModel');

module.exports = {
    index:(req, res) => {
        postModel.selectAll(req.con, (error, results) => {
            if(error) throw error;
            res.json(results);
        });
    }
}