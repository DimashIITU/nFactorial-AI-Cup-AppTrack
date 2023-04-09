import axios from 'axios';
export const chatToken = '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';

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
