exports.errorPage = (req, res, next) => {
    // res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page Not Found', path: ''});
};