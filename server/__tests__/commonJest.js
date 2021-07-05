process.env.NODE_ENV = 'test'

module.exports = {
    app: require('../server'),
    User: require('../models/user_schema'),
    request: require('supertest')
}
