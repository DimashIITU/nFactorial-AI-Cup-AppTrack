import axios from 'axios';
export const chatToken =
  process.env.AI_KEY || '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';

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
