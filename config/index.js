var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds251799.mlab.com:51799/nodetodosample';
    }
}