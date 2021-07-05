const { app, request, User } = require('../commonJest')

describe('API: user list', () => {
    const userData = [{name: "Tick", age: 10},{name: "Trick", age: 11},{name: "Track", age: 12}];

    beforeAll( done => {
        User.insertMany(userData, (err, docs) =>{
            done()
        })
    })

    it('show all users in db', function (done) {
        request(app)
            .get('/api')
            .then((response) => {
                const body = response.text
                for (const user of userData) {
                    expect(body).toContain(user.name)
                }
                done()
            })
            .catch((err) =>{
                done(err)
            })
    })

})
