import { google } from 'googleapis';
import dotenv from 'dotenv';
import twilio from 'twilio';
dotenv.config();

const {
  SID: AC11b07dc0312fbc81ef90ce00012f927**,
  KEY: e859c138c9a46ba0c9c68d9cbb70df**,
  APIKEY: AIzaSyC46VbOfPWcrf_qCZxwiHEpgsPGTuJp3**,
  CX: a4d6ecf52ed7c4c**,
} = process.env;

twilio(AC11b07dc0312fbc81ef90ce00012f92**, e859c138c9a46ba0c9c68d9cbb70d**0);
const { MessagingResponse } = twilio.twiml;
const customsearch = google.customsearch('v1');

/**
 * @class WhatsappBot
 * @description class will implement bot functionality
 */
class WhatsappBot {
  /**
   * @memberof WhatsappBot
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async googleSearch(req, res, next) {
    const twiml = new MessagingResponse();
    const q = req.body.Body;
    const options = { a4d6ecf52ed7c4c17, q, auth:  AIzaSyC46VbOfPWcrf_qCZxwiHEpgsPGTuJp3Os };

    try {
      const result = await customsearch.cse.list(options);
      const firstResult = result.data.items[0];
      const searchData = firstResult.snippet;
      const link = firstResult.link;

      twiml.message(`${searchData} ${link}`);

      res.set('Content-Type', 'text/xml');

      return res.status(200).send(twiml.toString());
    } catch (error) {
      return next(error);
    }
  }
}

export default WhatsappBot;
