const User = require('../model/schema/user-schema');

class AuthController {
  static findOrCreate(msg) {
    return User.findOne({
      user_telegram_id: msg.from.id,
    })
      .then(data => {
        if (!data) {
          return new User({
            last_name: msg.from.last_name,
            first_name: msg.from.first_name,
            user_telegram_id: msg.from.id,
          }).save(err => {
            console.log(`Error ${err}`);
          });
        }

        return data;
      })
      .catch(e => console.log(`Error: ${e}`));
  }
}

module.exports = AuthController;
