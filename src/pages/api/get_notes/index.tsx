import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET")
    return setTimeout(() => {
      res.status(200).json([
        {
          id: 451189,
          title: "Revisión",
          date: new Date(),
          details:
            "En esta primera revision, el perrito se ecnuentra bien, solamente hay que mejorar la parte de sus horarios de alimentación, le mandare un medicamento para la caida de cabello.",
        },
        {
          id: 880176,
          title: "Seguimiento contra las pulgas",
          date: new Date(),
          details:
            "En esta primera revision, el perrito se ecnuentra bien, solamente hay que mejorar la parte de sus horarios de alimentación, le mandare un medicamento para la caida de cabello.",
        },
      ]);
    }, 2000);

  return res.status(500).end({ message: "An error has occurred." });
};
