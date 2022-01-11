import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { SPOTIFY_CLONE_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user;
      try {
        const { id }: { id: number } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
          throw new Error("Not a real user");
        }
      } catch (e) {
        res.status(401);
        res.json({ error: "Not authorised" });
        return;
      }

      return handler(req, res, user);
    }
  };
};
