import { Join, Segments } from 'celebrate';

export const createNoteSchema = {
  [Segments.BODY]: Join.object({
    [Segments.BODY]: Joi.object({
      page: Joi.bumber().min(1).max(30).required(),
      age: Joi.number().integer().min(12).max(65).required(),
      gender: Joi.string().valid("male", "female", "other").required(),
      avgMark: Joi.number().min(2).max(12).required(),
      onDuty: Joi.boolean(),
    }),
  }
};
