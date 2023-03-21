import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return setTimeout(() => {
      res.status(200).json([
        {
          id: 8768762,
          name: "Pedrito",
          race: "Chihuaheño",
          owner_name: "Jared Ortega",
          owner_phone: "5615141075",
          total_sessions: 10,
        },
        {
          id: 1102887,
          name: "Tiburonsin",
          race: "Albino",
          owner_name: "Raquel Sanchez",
          owner_phone: "5540034243",
          total_sessions: 6,
        },
      ]);
    }, 2000);

  return res.status(500).end({ message: "An error has occurred." });
};
