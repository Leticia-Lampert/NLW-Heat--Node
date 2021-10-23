import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
    async handle(request: Request, response: Response) {
        const {user_Id} = request;

        const service = new ProfileUserService;

        const result = await service.execute(user_Id);

        return response.json(result);
        
    }
}


export { ProfileUserController };