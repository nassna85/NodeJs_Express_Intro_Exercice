module.exports = {
    getHomePage: (req, res) => {
        res.send("<h1>Some Title</h1><a href=”/newsletter”>Newsletter</a>");
    }
}