import { Router } from 'express';
import { getAllNotes, getNotesById } from '../controllers/notesController.js';

export const notesRouter = Router();

notesRouter.get('/notes', getAllNotes);
notesRouter.get('./notes/:noteId', getNotesById);
