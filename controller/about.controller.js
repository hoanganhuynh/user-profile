module.exports.index = function(req, res) {
    res.render('about/all');
}

module.exports.changepwd = function(req, res) {
    res.render('about/change-pass');
}

module.exports.exedone = function(req, res) {
    res.render('about/exe-done');
}

module.exports.info = function(req, res) {
    res.render('about/my-info');
}