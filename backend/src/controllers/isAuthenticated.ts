import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const isAuthenticated = (req: Request, res: Response) => {
  const token: any = req.query.token;

  if (!token) {
    res.status(403);
    res.send("Can't verify user.");
    res.redirect('/');
    return;
  }
  try {
    jwt.verify(token, process.env.SECRET_KEY);
  } catch {
    res.status(403);
    res.send('Invalid auth credentials.');
    res.redirect('/');
    return;
  }

  res.status(200);
  res.send('challengePage');
  return;
};
