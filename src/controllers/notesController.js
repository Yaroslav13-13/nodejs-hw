import { Note } from '../models/note.js';
import createHttpError from 'http-errors';

export const getAllNotes = async (req, res, next) => {
  try {
    // параметри запиту
    const { tag, search, page = 1, perPage = 10 } = req.query;

    // фільтрація
    const filter = {};
    if (tag) {
      filter.tag = tag;
    }
    if (search) {
      filter.$text = { $search: search };
    }

    // пропуск
    const skip = (page - 1) * perPage;

    // Запит базовий
    const notesQuery = Note.find(filter);

    // паралельні запити
    const [totalNotes, notes] = await Promise.all([
      notesQuery.clone().countDocuments(),
      notesQuery.skip(skip).limit(Number(perPage)).sort({ createdAt: -1 }),
    ]);

    // кількість сторінок
    const totalPages = Math.ceil(totalNotes / perPage);

    // відправка відповіді
    res.status(200).json({
      page: Number(page),
      perPage: Number(perPage),
      totalNotes,
      totalPages,
      notes,
    });
  } catch (error) {
    next(error);
  }
};

export const getNoteById = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);
    if (!note) {
      next(createHttpError(404, 'Note not found'));
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

export const deleteNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findOneAndDelete({
      _id: noteId,
    });

    if (!note) {
      next(createHttpError(404, 'Note not found'));
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { noteId } = req.params;
    const note = await Note.findOneAndUpdate({ _id: noteId }, req.body, {
      new: true,
    });
    if (!note) {
      next(createHttpError(404, 'Note not found'));
      return;
    }
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};
