import { Document } from 'mongoose';

export interface IPostcard extends Document {
  recipient: string;
  recipientEmail: string;
  screen_1_sticker_1: string;
  screen_1_sticker_2: string;
  screen_1_sticker_3: string;
  screen_2_sticker_1: string;
  screen_2_sticker_2: string;
  screen_2_sticker_3: string;
  screen_2_sticker_4: string;
  screen_2_text: string;
  your_name: string;
}
