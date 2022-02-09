import Travels from '../models/Travels.model.js';
import Testimonials from '../models/Testimonials.model.js';

export const homeController = async (req, res, next) => {
  const travels = await Travels.findAll({ limit: 3 });
  const testimonials = await Testimonials.findAll({ limit: 3 });

  res.render('index', {
    pageTitle: 'home',
    className: 'home',
    travels,
    testimonials,
  });
};

export const aboutController = (req, res, next) => {
  res.render('about', {
    pageTitle: 'About us',
  });
};

export const travelsController = async (req, res, next) => {
  const travels = await Travels.findAll();

  res.render('travels', {
    pageTitle: 'Upcoming Travels',
    travels,
  });
};

export const singleTravelController = async (req, res, next) => {
  const { id } = req.params;
  const travel = await Travels.findByPk(id);
  res.render('travel', {
    travel,
  });
};

export const getTestimonialsController = async (req, res, next) => {
  const testimonials = await Testimonials.findAll();

  res.render('testimonials', {
    pageTitle: 'Testimonials',
    testimonials,
  });
};

export const postTestimonialController = async (req, res, next) => {
  const { name, email, message } = req.body;

  // Validate the form
  let errors = [];

  if (!name) {
    errors.push({ message: 'Add your Name' });
  }
  if (!email) {
    errors.push({ message: 'Add your Email' });
  }
  if (!message || message.trim().length === 0) {
    errors.push({ message: 'Add your Message' });
  }

  // Check if there are any errors
  if (errors.length > 0) {
    // display warnings to the view
    const testimonials = await Testimonials.findAll();
    res.render('testimonials', {
      pageTitle: 'Testimonials',
      errors,
      testimonials,
      name,
      email,
      message,
    });
  } else {
    // save to the database
    await Testimonials.create({
      name,
      email,
      message,
    });
    res.redirect('/testimonials');
  }
};
