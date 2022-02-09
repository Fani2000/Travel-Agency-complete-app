import { Sequelize } from 'sequelize';
import database from '../config/database.js';

const Travels = database.define('travels', {
  title: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  departure_date: {
    type: Sequelize.DATE,
  },
  return_date: {
    type: Sequelize.DATE,
  },
  image: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  available: {
    type: Sequelize.STRING,
  },
});

export default Travels;
