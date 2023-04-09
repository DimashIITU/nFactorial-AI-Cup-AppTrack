import axios from 'axios';
export const chatToken = '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';

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
