const { token } = require('./config');
const TelegramBot = require('node-telegram-bot-api');
const Router = require('./router');

const bot = new TelegramBot(token, { polling: true });

Router(bot);

console.log('NewTone Bot start');
