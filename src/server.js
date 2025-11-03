import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import { logger } from './middleware/logger.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notesRouter } from './routes/notesRoutes.js';

dotenv.config();
const app = express();

app.use(helmet());
app.use(logger);
app.use(express.json());
app.use(cors());

// ======= ROUTES =======

app.use('/', notesRouter);

// ======= MIDDLEWARE =======

app.use(notFoundHandler);
app.use(errorHandler);

// ======= START SERVER =======

const PORT = process.env.PORT || 3000;

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
