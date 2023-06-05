import mongoose from 'mongoose';

const TechnologySchema = new mongoose.Schema({
  technology: {
    image: { type: String, required: true },
    title: {
      type: String,
      required: true,
    },
  },
});

export default mongoose.model('Technology', TechnologySchema);
// Technologies
