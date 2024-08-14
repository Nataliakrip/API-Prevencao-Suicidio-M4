import Resource from '../models/resource.model.js';

export const createResource = async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json({ message: 'Resource created successfully', resource });
  } catch (error) {
    res.status(400).json({ error: 'Failed to create resource' });
  }
};

export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve resources' });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to retrieve resource' });
  }
};

export const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      await resource.update(req.body);
      res.status(200).json({ message: 'Resource updated successfully', resource });
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to update resource' });
  }
};

export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      await resource.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete resource' });
  }
};
