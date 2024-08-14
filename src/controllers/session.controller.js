import Session from '../models/session.model.js';

export const createSession = async (req, res) => {
  try {
    const { title, description, date, time, location, contactInfo } = req.body;
    const newSession = await Session.create({ title, description, date, time, location, contactInfo });
    res.status(201).json(newSession);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSessionById = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (session) {
      res.status(200).json(session);
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.findAll();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSession = async (req, res) => {
  try {
    const { title, description, date, time, location, contactInfo } = req.body;
    const session = await Session.findByPk(req.params.id);
    if (session) {
      session.title = title;
      session.description = description;
      session.date = date;
      session.time = time;
      session.location = location;
      session.contactInfo = contactInfo;
      await session.save();
      res.status(200).json(session);
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const session = await Session.findByPk(req.params.id);
    if (session) {
      await session.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Session not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
