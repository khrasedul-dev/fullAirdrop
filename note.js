// (ctx) => {

//     ctx.telegram.sendMessage(ctx.chat.id, `<b>Task 8:</b> \n\n1. Enter your ERC-20 Crypto wallet address `, {
//         reply_markup: {
//             remove_keyboard: true
//         },
//         parse_mode: "HTML"
//     }).catch((e) => console.log(e))

//     return ctx.wizard.next()

// },