module.exports = {
    insert:(con, newsletter, callback) => {
        const sql = "INSERT INTO newsletter SET ?";
        con.query(sql, newsletter, callback);
    }
}