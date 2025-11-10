import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import notesRouter from './routes/notesRoutes.js';
import { errors } from 'celebrate';
import authRoutes from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(helmet());
app.use(logger);
app.use(
  express.json({
    limit: '100kb',
  }),
);
app.use(cors());
app.use(cookieParser());

// ======= ROUTES =======

app.use('/', notesRouter);
app.use('/', authRoutes);

// ======= MIDDLEWARE =======
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

// ======= START SERVER =======

const PORT = process.env.PORT || 3000;

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
