import { Router } from 'express';
import { celebrate } from 'celebrate';

import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

import {
  getNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';

const notesRouter = Router();

notesRouter.get('/notes', celebrate(getNotesSchema), getAllNotes);
notesRouter.get('/notes/:noteId', celebrate(noteIdSchema), getNoteById);
notesRouter.post('/notes', celebrate(createNoteSchema), createNote);
notesRouter.patch('/notes/:noteId', celebrate(updateNoteSchema), updateNote);
notesRouter.delete('/notes/:noteId', celebrate(noteIdSchema), deleteNote);

export default notesRouter;
