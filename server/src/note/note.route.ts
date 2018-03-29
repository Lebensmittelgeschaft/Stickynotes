import { NoteController } from './note.controller';
import { note as NoteModel, INote, note } from './note.model';
import { Router } from 'express';

export const noteRouter = Router();

// GET methods
noteRouter.get('/', async (req, res, next) => {
  if (req.query.roomId) {
    try {
      const notes = await NoteController.getAllNotesInRoom(req.query.roomId);
      if (notes) res.json(notes);
      else res.sendStatus(404);
    } catch (err) {
      next(err);
    }
  }

  res.sendStatus(400);
});

noteRouter.get('/:id', async (req, res, next) => {
  if (req.params.id) {
    try {
      const note = await NoteController.getNoteById(req.params.id);
      if (note) res.json(note);
      else res.sendStatus(404);
    } catch (err) {
      next(err);
    }
  }
});

// POST methods
/**
 * Save new note
 */
noteRouter.post('/', async (req, res, next) => {
  try {
    const note = new NoteModel(req.body);
    const savedNote = await NoteController.saveNote(note);
    if (savedNote) res.send(savedNote);
    else res.sendStatus(400);
  } catch (err) {
    next(err);
  }
});

// PUT methods
/**
 * Update an existing note
 */
noteRouter.put('/', async (req, res, next) => {
  if (req.body._id) {
    try {
      const note = req.body;
      const updatedNote = await NoteController.updateNoteById(note._id, note as Partial<INote>);
      if (updatedNote) res.json(updatedNote);
      else res.sendStatus(400);
    } catch (err) {
      next(err);
    }
  }
  else res.sendStatus(400);

});

// Delete methods
/**
 * Delete note by id
 */
noteRouter.delete('/:id', async (req, res, next) => {
  if (req.params.id) {
    try {
      const deletedNote = await NoteController.deleteNoteById(req.params.id);
      if (deletedNote) res.json(deletedNote);
      else res.sendStatus(404);
    } catch (err) {
      next(err);
    }
  }
  else res.sendStatus(400);
});