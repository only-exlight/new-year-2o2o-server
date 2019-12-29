import * as Mongoose from 'mongoose';

export const Postcard = new Mongoose.Schema({
  recipient: {
    type: String,
    required: true,
  },
  recipientEmail: {
    type: String,

  },
  screen_1_sticker_1: {
    type: String,
    required: true,
  },
  screen_1_sticker_2: {
    type: String,
    required: true,
  },
  screen_1_sticker_3: {
    type: String,
    required: true,
  },
  screen_2_sticker_1: {
    type: String,
    required: true,
  },
  screen_2_sticker_2: {
    type: String,
    required: true,
  },
  screen_2_sticker_3: {
    type: String,
    required: true,
  },
  screen_2_sticker_4: {
    type: String,
    required: true,
  },
  screen_2_text: {
    type: String,
    required: true,
  },
  your_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
});
