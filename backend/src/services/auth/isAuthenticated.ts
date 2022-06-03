import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const isAuthenticated = (req: Request, res: Response) => {  

  
  const token:any  = req.query.token;
  
  if (!token) {
    res.status(403);
    res.send("Can't verify user.");
    return;
  }
  let decoded;
  try {
    decoded = jwt.verify(token, 'root');

  }
  catch {
    res.status(403);
    res.send("Invalid auth credentials.");
    return;
  }
  if (!decoded.hasOwnProperty("email") || !decoded.hasOwnProperty("expirationDate")) {
    res.status(403);
    res.send("Invalid auth credentials.");
    return;
  }
  const { expirationDate }:any = decoded;
  if (expirationDate < new Date()) {
    res.status(403);
    res.send("Token has expired.");
    return;
  }
  res.status(200);
  res.send("User has been validated.");
};


