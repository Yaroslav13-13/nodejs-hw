import { Router } from 'express';

export const notesRouter = Router();

notesRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello world!' });
});

notesRouter.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

notesRouter.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});
