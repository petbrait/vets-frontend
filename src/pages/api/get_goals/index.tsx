import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return setTimeout(() => {
      res.status(200).json([
        {
          id: 445512,
          title: "Snacks",
          date: new Date(),
          details: "Tratar de comer 5 galletas pedigree al dia",
          status: 1,
        },
      ]);
    }, 2000);

  return res.status(500).end({ message: "An error has occurred." });
};
