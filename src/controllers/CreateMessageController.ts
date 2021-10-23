import { Request, Response } from "express";   
import {CreateMessageService} from "../services/CreateMessageService";


class CreateMessageController{
    async handle(request: Request, response: Response){
      const {message} = request.body;
      const {user_Id} =  request;

      const service = new CreateMessageService();

      const result = await service.execute(message, user_Id);
      
      console.log('teste')

      return response.json(result);
    } 
        
}

export {CreateMessageController}