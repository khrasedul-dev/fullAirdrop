const startMenu = (ctx,data)=>{
    ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWellcome to ${ctx.botInfo.username} \n\nAccount information: \nUserId: ${data[0].userId} \nName: ${data[0].name}` , {
        reply_markup:{
            keyboard: [
                [{text: "Claim Rewards"},{text: "Withdraw"}],
                [{text: "My account"},{text: "Help"}]
            ],
            resize_keyboard: true
        }
    }).catch((e)=>console.log(e))
}



module.exports = startMenu