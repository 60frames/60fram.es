var express = require('express'),
    app = express(),
    colors = require('colors'),
    path = require('path');

// Set view engine to underscore.
app.engine('html', require('consolidate').underscore);
app.set('view engine', 'html'); // .html extension
app.set('views', path.join(__dirname, '/views'));

app.set('port', process.env.PORT || 9001);

app.use(express.static(path.join(__dirname, './www')));
app.get('/', function(req, res) {
    'use strict';
    res.render('index', {
        title: '60fram.es'
    });
});
app.use(function(req, res) {
    'use strict';
    res.status(404);
    res.render('index', {
        title: '404'
    });
});

app.listen(app.get('port'), function() {
    'use strict';
    console.log('Environment: '.cyan + process.env.NODE_ENV);
    console.log('Server started: '.cyan +
        'http://localhost:' + app.get('port'));
    console.log('Press \'ctrl + c\' to terminate server'.grey);
});