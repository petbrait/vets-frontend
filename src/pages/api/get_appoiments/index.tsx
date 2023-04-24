import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return setTimeout(() => {
      res.status(200).json([
        {
          id: 262623,
          objetive: "Revision general",
          pet_name: "Pedrito",
          time: "10:30am",
          session_duration: 30,
          session_link: "https://www.linkedin.com/in/midudev/recent-activity/",
        },
        {
          id: 992312,
          objetive: "Revision de dolor de pata",
          pet_name: "Tiburonsin",
          time: "11:30am",
          session_duration: 20,
          session_link: "https://www.linkedin.com/in/midudev/recent-activity/",
        },
      ]);
    }, 2000);

  return res.status(500).end({ message: "An error has occurred." });
};
