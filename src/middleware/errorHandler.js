export const errorHandler = (err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ message: err.message });
};
