import prismaClient from "../prisma";
import {io} from "../app"



class CreateMessageService {
    async execute (text: string, user_Id: string) {
      const message = await prismaClient.message.create({
          data: {
            text,
            user_Id,
          },
          include: {
              user: true,
          }
      });

      const infoWS = {
        text: message.text,
        user_Id: message.user_Id,
        created_at: message.created_at,
        user:{
          name: message.user.name,
          avatar_url: message.user.avatar_url
        },
      };

      io.emit("new_message", infoWS )

      return  message;
    }
}

export {CreateMessageService}