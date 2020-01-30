module.exports = {
    selectAll: (con, callback) => {
        const sql = "SELECT * FROM posts";
        con.query(sql, callback);
    },
    selectById: (con, id, callback) => {
        const sql = "SELECT * FROM posts WHERE id = ?";
        con.query(sql, id, callback);
    },

    /**
     * @param {Object} post - Table Post
     * @return {Object}
     */
    insert: (con, post, callback) => {
        const sql = "INSERT INTO posts SET ?";
        con.query(sql, post, callback);
    }
}