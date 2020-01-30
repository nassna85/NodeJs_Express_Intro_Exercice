module.exports = {
    getIndex: (req, res) => {
        res.send(
            '<form action="/newsletter" method="post"><input type="email" name="email"><input type="submit"></form>'
          );
    }
}