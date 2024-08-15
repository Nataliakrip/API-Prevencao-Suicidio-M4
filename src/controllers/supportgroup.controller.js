import Group from '../models/supportgroup.model.js'

export const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json({ message: 'Group created successfully', group });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create resource' });
  }
};

export const getAllGroup = async (req, res) => {
  try {
    const groups = await Group.findAll();
    res.status(200).json(groups);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve resources' });
  }
};

export const getGroupById = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    if (group) {
      res.status(200).json(group);
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve resource' });
  }
};

export const updateGroup = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    if (group) {
      await group.update(req.body);
      res.status(200).json({ message: 'Group updated successfully!', group });
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update group' });
  }
};

export const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByPk(req.params.id);
    if (group) {
      await group.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Group not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete group' });
  }
};
