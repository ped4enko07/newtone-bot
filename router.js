const AuthController = require('./controller/UserController');
const { options } = require('./config');

function Router(bot) {
  bot.onText(/\/start/, msg => {
    const { id } = msg.chat;
    AuthController.findOrCreate(msg).then(user => {
      bot.sendMessage(id, `Hello ${user.last_name} ${user.first_name}`, {
        reply_markup: {
          keyboard: [
            [options.engTest, options.rusTest],
            [options.ivTest],
            [options.addWords],
            [options.addToIV],
          ],
        },
      });
    });
  });

  bot.on('message', msg => {
    const { id } = msg.chat;

    switch (msg.text) {
      case options.engTest:
        console.log('english test');
        break;
      case options.rusTest:
        console.log('russian test');
        break;
      case options.ivTest:
        console.log('ivv test');
        break;
      case options.addToIV:
        console.log('add to iv');
        break;
      case options.addWords:
        console.log('add to words');
        break;
      default:
        bot.sendMessage(id, "I don't this is command!!!");
    }
  });
}

module.exports = Router;
