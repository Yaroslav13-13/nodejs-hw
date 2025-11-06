import pkg from 'celebrate';
import mongoose from 'mongoose';
import { TAGS } from '../constants/tags.js';

const { Joi, Segments } = pkg;

// Валідація GET /notes
export const getNotesSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(1).max(50).default(10),
    tag: Joi.string().optional(),
    search: Joi.string().trim().allow(''),
  }),
};

//Валідація noteId (GET, DELETE, PATCH)
export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string()
      .custom((value, helpers) => {
        if (!mongoose.isValidObjectId(value)) {
          return helpers.error('any.invalid');
        }
        return value;
      }, 'ObjectId validation')
      .messages({
        'any.invalid': 'Invalid note ID format',
      }),
  }),
};
// Валідація створення нотатки (POST /notes)
export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required(),
    content: Joi.string().allow('').optional(),
    tag: Joi.string()
      .valid(...TAGS)
      .optional(),
  }),
};

// Валідація PATCH /notes/:noteId
export const updateNoteSchema = {
  [Segments.PARAMS]: noteIdSchema[Segments.PARAMS],
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).optional(),
    content: Joi.string().allow('').optional(),
    tag: Joi.string()
      .valid(...TAGS)
      .optional(),
  })
    .or('title', 'content', 'tag')
    .messages({
      'object.missing':
        'At least one field (title, content, or tag) is required',
    }),
};
