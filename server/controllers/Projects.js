import Project from '../models/Project.js';

export const getAll = async (req, res) => {
  try {
    const projects = await Project.find();

    res.json({ projects });
  } catch (error) {
    res.json({ message: 'Something went wrong' });
  }
};

export const getById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.json({ project });
  } catch (error) {
    res.json({ message: 'Something went wrong' });
  }
};
