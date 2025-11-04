import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({ status: err.status, message: err.message });
    return;
  }
  console.error('Server error:', err);
  const isProd = process.env.NODE_ENV === 'production';
  res
    .status(500)
    .json({ message: isProd ? 'Internal Server Error' : err.message });
};
