var assert = require('assert')
  , jsonChance = require('../lib')

describe('jsonChance', function () {
  it('should spawn a new object with the specified fields', function () {
    var r = jsonChance('user(id:guid,enabled:bool,profile(url,first,last,age,city,country,twitter,fbid,friends{5;9}(id:guid)))')

    assert.deepEqual(typeof r.user, 'object')
    assert.deepEqual(typeof r.user.id, 'string')
    assert.deepEqual(typeof r.user.enabled, 'boolean')
    assert.deepEqual(typeof r.user.profile, 'object')
    assert.deepEqual(typeof r.user.profile.url, 'string')
    assert.deepEqual(typeof r.user.profile.first, 'string')
    assert.deepEqual(typeof r.user.profile.last, 'string')
    assert.deepEqual(typeof r.user.profile.age, 'number')
    assert.deepEqual(typeof r.user.profile.city, 'string')
    assert.deepEqual(typeof r.user.profile.country, 'string')
    assert.deepEqual(typeof r.user.profile.twitter, 'string')
    assert.deepEqual(typeof r.user.profile.fbid, 'number')
    assert.deepEqual(typeof r.user.profile.friends, 'object')
    assert(r.user.profile.friends.length >= 5 && r.user.profile.friends.length <= 9)
    assert.deepEqual(typeof r.user.profile.friends[0].id, 'string')
  })
})
