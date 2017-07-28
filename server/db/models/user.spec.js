const {expect} = require('chai')
<<<<<<< HEAD
const db = require('../db')
const User = db.model('user')

describe('User model', () => {

  beforeEach(() => {
    return db.sync({force: true})
  });

  describe('instanceMethods', () => {

    describe('correctPassword', () => {

=======
const db = require('../index')
const User = db.model('user')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
>>>>>>> boilermaker/master
      let cody

      beforeEach(() => {
        return User.create({
          email: 'cody@puppybook.com',
          password: 'bones'
        })
          .then(user => {
            cody = user
          })
      })

      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
<<<<<<< HEAD

    }) // end describe('correctPassword')

  }) // end describe('instanceMethods')

=======
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
>>>>>>> boilermaker/master
}) // end describe('User model')
