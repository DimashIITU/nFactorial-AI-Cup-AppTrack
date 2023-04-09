import axios from 'axios';
export const chatToken =
  process.env.AI_KEY || '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';

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
