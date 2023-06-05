import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  links: {
    url: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model('Project', ProjectSchema);
