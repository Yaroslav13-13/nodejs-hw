import { Note } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res, next) => {
  try {
    const note = await Note.find();
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const getNotesById = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);
    if (!note) {
      next(createHttpError(404, 'Student not found'));
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};
