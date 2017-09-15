const { token } = require('./config');

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const fromId = msg.from.id;
  const resp = match[1];
  bot.sendMessage(fromId, resp);
});
