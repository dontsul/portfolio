import Technology from '../models/Technology.js';

export const getAllTechnologies = async (req, res) => {
  try {
    const technologies = await Technology.find();

    // const imagesData = await technologies.map((item) => {
    //   console.log(item.title);
    //   return {
    //     title: item.title,
    //     image: `/images/${item.image}`,
    //   };
    // });

    res.json({ technologies });
  } catch (error) {
    res.json({ message: 'Something went wrong' });
  }
};
