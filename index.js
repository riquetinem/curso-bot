const env = require('./.env');
const Telegraf = require('telegraf');
const bot = new Telegraf(env.token);

bot.start(ctx => {
  const from = ctx.update.message.from
  if (from.id == '562965867')
    ctx.reply(`Ao seu dispor, mestre! 😀`)
  else
    ctx.reply(`Sinto muito, mas eu só falo com o meu mestre seu 💩`)

  ctx.replyWithPhoto('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmya-2R7gvZ6YwfTMdxWGfEmLHv2Lc3zhm-yQZ5NqpXaA_hdOW&s',
                    {caption: 'Num pisa na minhóca!'})
  ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')

})

bot.on('text', (ctx, next) => {
  ctx.reply(`Texto '${ctx.update.message.text}' recebido com sucesso`)
  next()
})

bot.on('location', ctx => {
  const location = ctx.update.message.location
  console.log(location)
  ctx.reply(`Entendi, você está extá em
      Lat: ${location.latitude},
      Lon: ${location.longitude}!`)
})

bot.on('contact', ctx => {
  const contact = ctx.update.message.contact
  console.log(contact)
  ctx.reply(`Vou lembrar do(a)
      ${contact.first_name} (${contact.phone_number})`)
})

bot.on('voice', ctx => {
  const voice = ctx.update.message.voice
  console.log(voice)
  ctx.reply(`Duração do audio: ${voice.duration} segundos`)
})

bot.on('photo', ctx => {
  const photo = ctx.update.message.photo
  console.log(photo)

  photo.forEach((ph, i) => {
    ctx.reply(`Foto ${i} tem resolução de ${ph.width}x${ph.height}`)
  })
})

bot.on('sticker', ctx => {
  const sticker = ctx.update.message.sticker
  console.log(sticker)
  ctx.reply(`Estou vendo que você enviou o ${sticker.emoji} do conjunto ${sticker.set_name}`)
})

// reply com html e outras coisas
/*
  bot.start(async ctx => {
    await ctx.replyWithHTML(`Destacando msg <b>HTML</b>`)
    await ctx.replyWithMarkdown('Destacando msg *Markdown*')

    await ctx.replyWithPhoto({
      source: `${__dirname}/photo.jpeg`
    })

    await ctx.replyWithPhoto('link', {caption: 'text'})
  })
*/

console.log("Bot Iniciado")

bot.startPolling()
