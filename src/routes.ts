import {Router} from "express";
import { AuthenticateUserController }  from "./controllers/AutheticateUserController";
import {CreateMessageController} from "./controllers/CreateMessageController";
import {ensureAuthenticated} from "./middleware/ensureAuthenticated";
import {Get3LastMessagesController} from "./controllers/GetLast3MessagesController";
import {ProfileUserController} from "./controllers/ProfileUserController"

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
    "/message",
    ensureAuthenticated, 
    new CreateMessageController().handle
    );

    router.get("/messages/last3", new Get3LastMessagesController().handle);

    router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };