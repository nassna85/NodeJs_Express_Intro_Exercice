module.exports = {
    selectAll: (con, callback) => {
        const sql = "SELECT * FROM posts";
        con.query(sql, callback);
    }
}