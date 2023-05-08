const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const redis = require('redis');

const jwtKey = 'testing';
const Crypt = require("../middleware/Crypt");
let redisConfig = require('../config/redisClient.json');
const Users = require('../models/Users');

passport.serializeUser((users, done) => {
  console.log('serializeUser');
  return done(null, users);
});

passport.deserializeUser((users, done) => {
  return done(null, users);
});

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'account',
        passwordField: 'password',
        session: true,
      },
      function verify(account, password, result) {
        Users.findOne({
          where: {
            account: account,
          },
        })
          .then(async (response) => {
            if (response == null) {
              return result(null, null);
            } else {
              const hashedPass = await Crypt.decrypt(response.dataValues.salt, password)
              if(response.dataValues.password === hashedPass) {
                const token = jwt.sign(
                  {
                    account: response.dataValues.account,
                    address1: response.dataValues.address1,
                    address2: response.dataValues.address2,
                    address3: response.dataValues.address3,
                  },
                  jwtKey,
                  { 
                    algorithm: 'HS256',
                    expiresIn: 60 * 60 * 24,
                  }
                );

                const redisClient = redis.createClient(redisConfig[1]);
                    await redisClient.connect();
                    await redisClient.set(account, token);
                    await redisClient.expireAt(
                      account,
                      parseInt(+new Date() / 1000) + 86400
                    );
                    await redisClient.disconnect();

                    console.log(
                      'basicAuth success\nWelcome',
                      response.dataValues.account
                    );
                    console.log(`${account}'s token save in Redis`);
                    let data = token;
                    return result(null, data);
              } else {
                console.error('basicAuth Failed...');
                return result(null, null);
              }
            }
          })
          .catch((err) => {
            console.log('findOne catch');
            return result(null, err);
          });
      }
    )
  );
};
