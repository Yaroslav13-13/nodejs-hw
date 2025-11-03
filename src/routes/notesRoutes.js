import { Router } from 'express';
import {
  getAllNotes,
  getNotesById,
  createNote,
} from '../controllers/notesController.js';

export const notesRouter = Router();

notesRouter.get('/notes', getAllNotes);
notesRouter.get('./notes/:noteId', getNotesById);
notesRouter.post('/notes', createNote);
