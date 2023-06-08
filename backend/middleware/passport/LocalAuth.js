const bcrypt = require("bcrypt");

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const jwt = require('jsonwebtoken');
const jwtKey = 'testing';

const SaveData = require("../redis/SaveData");
let redisConfig = require('../../config/redisClient.json');
const dotenv = require('dotenv');
dotenv.config({
  path: './config/.env',
});

const Users = require('../../models/Users');

module.exports = () => {
  passport.use(new LocalStrategy({
        usernameField: 'account',
        passwordField: 'password',
        session: true,
      }, function verify(account, password, result) {
        Users.findOne({
          where: {
            account: account,
            usersStatus: parseInt(1)
          },
        })
          .then(async (response) => {
            if (response == null) {
              return result(null, null);
            } else {
              const comparePassResult = bcrypt.compareSync(password, response.dataValues.password);
              if(comparePassResult == true) {
                const token = jwt.sign(
                  {
                    account: response.dataValues.account,
                  },
                  jwtKey,
                  { 
                    algorithm: 'HS256',
                    expiresIn: 60 * 60 * 24 * 1,
                  }
                );
                const data = {
                  account: account,
                  token: token
                }

                await SaveData.SaveData(redisConfig[1], data)
                .then(() => { 
                  console.log('LocalAuth success\nWelcome',response.dataValues.account)
                })
                .catch(() => {
                  console.error("failed saveData");
                })                
                return result(null, data);
              }
              else {
                console.error('basicAuth Failed...');
                return result(null, false);
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
