import { Configuration, OpenAIApi } from 'openai';
import { chatToken, instance } from './axios';

const configuration = new Configuration({
  organization: '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',
  apiKey: chatToken,
});
const openai = new OpenAIApi(configuration);

type api = ReturnType<typeof API>;

const API = () => ({
  async sendRequest(content: string) {
    const res = await instance.post<string, { data: { choices } }>(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content }],
        temperature: 0.7,
      },
    );
    return res;
  },
  async sendImageRequest(content: string) {
    const res = await openai.createImage({
      prompt: content,
      n: 1,
      size: '1024x1024',
    });
    return res;
  },
});

export const AI: api = API();
