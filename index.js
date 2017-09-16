const { token } = require('./config');

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, { polling: true });

bot.on('text', (msg) => {
  const fromId = msg.from.id;
  bot.sendMessage(fromId, `${msg.from} hello world!`);
});

