import axios from 'axios';
export const chatToken = process.env.AI_KEY;

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
