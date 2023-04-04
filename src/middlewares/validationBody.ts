import { Request, Response, NextFunction } from "express";

const ValidationBody = (req: Request, res: Response, next: NextFunction) => {
  const bodyValid = [
    "name",
    "description",
    "email",
    "createdAt",
    "updatedAt",
    "senderId",
    "recipientId",
    "address",
    "code",
  ];

  Object.entries(req.body).find(([key, value]) => {
    if (!bodyValid.includes(key)) {
      req.body = {};
      return true;
    }
  });

  next();
};

export { ValidationBody };
