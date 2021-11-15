const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');

const bot = new VkBot("f720978b21b2ad3afd278b9537291f38e9633f3bb71fea096739083e299b46fed6fc3d660f6e7627e6ac9");

bot.command('/start', (ctx) => {
    ctx.reply('Hello!');
  });
  

bot.command('Начать', (ctx) => {


    ctx.reply("Добрый день) Нажми на кнопку ", null, Markup
      .keyboard([
        [
          Markup.button('Регистрация', 'primary'),
        ],
  
      ]));
  });


bot.startPolling();