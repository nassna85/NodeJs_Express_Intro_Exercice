module.exports = {

    /**
     * @param {Object} newsletter - Table Newsletter
     * @return {Object}
     */
    insert:(con, newsletter, callback) => {
        const sql = "INSERT INTO newsletter SET ?";
        con.query(sql, newsletter, callback);
    }
}