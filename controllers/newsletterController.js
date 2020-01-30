const newsletterModel = require('../models/newsletterModel');

module.exports = {
    getIndex: (req, res) => {
        res.send(
            '<form action="/newsletter" method="post"><input type="email" name="email"><input type="submit"></form>'
          );
    },
    new: (req, res) => {
        const newsletter = req.body;
        /*
        const newsletter = {
            email: email
        }
        */
        newsletterModel.insert(req.con, newsletter, (error, result) => {
            if(error) throw error;
            res.json({ status: 200, email });
        })
    }
}