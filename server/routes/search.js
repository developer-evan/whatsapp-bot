import { Router } from 'express';
import WhatsappBot from '../controllers/WhatsAppBot';

const botRouter = Router();

botRouter.post('/incoming', 
               WhatsappBot.googleSearch);

export default botRouter;
