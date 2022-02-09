import { Sequelize } from 'sequelize';
import database from '../config/database.js';

const Testimonials = database.define('testimonials', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
});

export default Testimonials;
