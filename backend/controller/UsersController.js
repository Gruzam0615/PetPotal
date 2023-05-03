const Users = require('../models/Users');
const Crypt = require('../middleware/Crypt');
const CurrentDate = require('../middleware/CurrentDate');
const CheckToken = require('../middleware/CheckToken');

exports.signOut = async (request, response, result) => {
  request.logout((err) => {
    if (err) {
      return result(err);
      // response.send(err);
    } else {
      response.clearCookie('petpotal');
      response.clearCookie('token');
      // response.redirect('/');
      response.send(true);
    }
  });
};

exports.insertUser = async (request, response) => {
  let hashed = await Crypt.encrypt(request.body.password);
  let salt = hashed.salt;
  let hashedPass = hashed.hashedpw;

  let currentTimeStamp = CurrentDate.CurrentTimeStamp();

  const insertUser = await Users.create({
    account: request.body.account,
    password: hashedPass,
    salt: salt,
    name: request.body.name,
    nickName: request.body.nickName,
    phone: request.body.phone,
    email: request.body.email,
    address1: request.body.address1,
    address2: request.body.address2,
    address3: request.body.address3,
    joinDate: currentTimeStamp,
    modifiedDate: currentTimeStamp,
  });

  if (insertUser == null) {
    response.send({
      responseCode: 200,
      message: '회원가입 실패',
    });
  } else {
    response.send({
      responseCode: 200,
      message: '회원가입 완료',
    });
  }
};

exports.findByAccount = (request, response) => {
  Users.findOne({
    attributes: ['account'],
    where: { account: request.body.account },
  }).then((res) => {
    if (res == null) {
      // account가 중복이 아닌경우
      response.send({
        responseCode: 200,
        data: true,
      });
    } else {
      response.send({
        responseCode: 304,
        data: false,
      });
    }
  });
};

exports.findByNickName = (request, response) => {
  Users.findOne({
    attributes: ['nickName'],
    where: { account: request.body.nickName },
  }).then((res) => {
    if (res == null) {
      response.send({
        responseCode: 200,
        data: true,
      });
    } else {
      response.send({
        responseCode: 304,
        data: false,
      });
    }
  });
};

exports.findByEmail = (request, result) => {
  Users.findOne({
    attributes: ['email'],
    where: { account: request.body.email },
  }).then((response) => {
    if (response == null) {
      result.send({
        responseCode: 200,
        data: true,
      });
    } else {
      result.send({
        responseCode: 304,
        data: false,
      });
    }
  });
};

exports.findByPhone = (request, result) => {
  Users.findOne({
    attributes: ['phone'],
    where: { account: request.body.phone },
  }).then((response) => {
    if (response == null) {
      result.send({
        responseCode: 200,
        data: true,
      });
    } else {
      result.send({
        responseCode: 304,
        data: false,
      });
    }
  });
};

/*
회원가입 메서드 no sequelize
let salt = crypto.randomBytes(16).toString("base64");
    crypto.pbkdf2(req.body.password, salt, 310000, 32, "sha256", (err, hashedPassword) => {
        let convertedPw = hashedPassword.toString("base64");
        if(err) { return next(err); }
        mysql.query("INSERT INTO Users " +
        "(account, password, salt, name, nickName, phone, email, address1, address2, address3, " +
        "joinDate, modifiedDate) " +
        "VALUES(?, ?, ?, ?, ?, " +
        "?, ?, ?, ?, ?, " +
        "?, ?)",
        [
            req.body.account,
            convertedPw,
            salt,
            req.body.name,
            req.body.nickName,
            req.body.phone,
            req.body.email,
            req.body.address1,
            req.body.address2,
            req.body.address3,
            req.body.joinDate,
            req.body.modifiedDate,
        ], (err) => {
            if(err) { return next(err); }
            else { 
                return res.send("ok"); 
            }
            // req.login(function (err) {
            //     if (err) { return next(err); }
            //     res.redirect('/');
            // });
        });
    });
*/

// 새로고침 또는 주소 직접 입력 시 로그인 유지 체크 함수
exports.loginStatusCheck = async (req, res) => {
  try {
    const { token } = req.signedCookies;
    // console.log('token : ', token);

    if (!token) {
      res.send({
        account: '',
        responseCode: 401,
        message: 'Not Have Cookie',
      });
      return;
    }

    const checkTokenResult = await CheckToken.CheckTokenLoginStatus(1, token);
    // console.log('checkTokenResult : ', checkTokenResult);

    if (checkTokenResult.status === true) {
      res.send({
        account: checkTokenResult.decodeData.account,
        address1: checkTokenResult.decodeData.address1,
        address2: checkTokenResult.decodeData.address2,
        address3: checkTokenResult.decodeData.address3,
        responseCode: 200,
        message: 'Login Success',
      });
    } else {
      res.send({
        account: '',
        responseCode: 401,
        message: 'Login Failed...',
      });
    }
  } catch (err) {
    console.log('loginStatusCheck Error : ', err);
  }
};
