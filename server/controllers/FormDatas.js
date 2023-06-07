import FormData from '../models/FormData.js';

export const postForm = async (req, res) => {
  console.log(req);
  try {
    const { name, email, message } = req.body;

    console.log(name);

    const newFormData = new FormData({
      name,
      email,
      message,
    });

    await newFormData.save();

    return res.json(newFormData);
  } catch (error) {
    res.json({ message: error.message });
    // res.json({ message: 'Something went wrong' });
  }
};
