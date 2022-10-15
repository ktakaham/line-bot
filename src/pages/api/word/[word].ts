import { NextApiResponse } from 'next'
import * as line from '@line/bot-sdk';

console.log(process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN!)

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN!,
  channelSecret: process.env.CHANNEL_SECRET!
};

const client = new line.Client(config);

export default ({ query: { word } }: { query: { word: string } }, res: NextApiResponse) => {
  console.info('res data', word)
  client.broadcast({
    type: "text",
    text: word
  }).then(data => console.log(data))
    .catch(e => console.log(e))
  res.status(200).json({ message: `you requested for ${word} ` });
};