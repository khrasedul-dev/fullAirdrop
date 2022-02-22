const query = {
    id: settingsId
}

  settingsModel.find(query, (e,data)=>{

      if (e) {

          console.log(e)

      } else {

        
      }

  })






  const status = parseInt(data[0].airdrop_status) 
  

          if(status > 0){
            
              const query = {
                userId : ctx.from.id
              }

              userModel.find(query , (e,data)=>{

                if (e) {
                    console.log(e)
                } else {
                    
                    const user_length_count = data.length

                    if (user_length_count >0) {

                          ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWellcome Back ${ctx.botInfo.username} \n\nYou have already an account.\nPlease go to your <a href="https://t.me/airdrop_wallet454_bot"> Wallet </a>  \n\nReferral Link: \nhttps://t.me/${ctx.botInfo.username}?start=${ctx.from.id}` , {
                              reply_markup: {
                                  remove_keyboard:true
                              },
                              parse_mode: "HTML"
                          })


                    } else {

                        const referrId = ctx.startPayload

                        if (referrId) {


                              userModel.find({userId: referrId} , (e,data)=>{

                                  if (e) {

                                      console.log(e)

                                  } else {

                                      const userdata = new userModel({

                                          referr_id: referrId,
                                          userId: ctx.from.id,
                                          referr_by: data[0].name

                                      })

                                      userdata.save( (e,data)=>{

                                          if (e) {

                                              console.log(e)
                                              
                                          } else {

                                              settingsModel.find({id: settingsId},(e,data)=>{
                                                    if (e) {
                                                        console.log(e)
                                                    } else {

                                                        const join_bonus = data[0].join_bounus
                                                        const referral_bounus = data[0].referral_bounus
                                                        const coin_name = data[0].coin_name


                                                        ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWellcome to our AirdropBot \n\n⚡ Get ${join_bonus} ${coin_name} Join Bonus \n👮 Earn ${referral_bounus} ${coin_name} for each referral \n\nComplete some tasks and win your rewards \n\nPlease tap on join button` , {
                                                          reply_markup: {
                                                              keyboard:[
                                                                  [{text: "💻 Join Airdrop"}]
                                                              ],
                                                              resize_keyboard: true
                                                          },
                                                          parse_mode: "HTML"
                                                      })

                                                    }
                                              })

                                              
                                              

                                          }

                                      } )


                                  }
                              })
                            
                    
                        } else {
                    
                          settingsModel.find({id: settingsId},(e,data)=>{
                            if (e) {
                                console.log(e)
                            } else {

                                const join_bonus = data[0].join_bounus
                                const referral_bounus = data[0].referral_bounus
                                const coin_name = data[0].coin_name


                                ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWellcome to our AirdropBot \n\n⚡ Get ${join_bonus} ${coin_name} Join Bonus \n👮 Earn ${referral_bounus} ${coin_name} for each referral \n\nComplete some tasks and win your rewards \n\nPlease tap on join button` , {
                                        reply_markup: {
                                              keyboard:[
                                                  [{text: "💻 Join Airdrop"}]
                                              ],
                                              resize_keyboard: true
                                          },
                                          parse_mode: "HTML"
                                        })

                                    }

                              })
                    
                        }

                    }
                }

              })

          }else{
            
            ctx.telegram.sendMessage(ctx.chat.id , `Hello ${ctx.from.first_name} \nWellcome to our AirdropBot \n\nThe airdrop has been close.\nIf you already created account go to your wallet \nFor more update Join our <a href="https://t.me/amdg_global">Telegram group</a> . \nWe will come back soon. \n\nStay with us \nThank you` , 
              {
                  parse_mode: "HTML"

              }).catch((e)=>console.log(e))

          }