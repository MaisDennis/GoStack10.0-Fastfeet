import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // transforma callback em async/await

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization; // busca o token bearer

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' '); // divide o bearer do token

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }

  return next();
};
