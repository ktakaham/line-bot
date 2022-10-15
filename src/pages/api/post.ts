import { NextApiRequest, NextApiResponse } from "next";
import * as line from "@line/bot-sdk";

console.log(process.env.NEXT_PUBLIC_LINE_ACCESS_TOKEN!);

const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN!,
  channelSecret: process.env.CHANNEL_SECRET!,
};

const client = new line.Client(config);

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "POST") {
    // Handle events
    const body = req.body;
    console.info("res data", body);

    client
      .broadcast({
        type: "text",
        text: body.message,
      })
      .then((data) => {
        console.log(data)
        res.status(200).json({ message: "line message done" });
      })
      .catch((e) => console.log(e));
  }
};
