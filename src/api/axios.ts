import axios from 'axios';
export const chatToken = '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';

export const instance = axios.create({
  headers: {
    Authorization: 'Bearer ' + chatToken,
    'Content-Type': 'application/json',
  },
});
