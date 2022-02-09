import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';
import configs from './config/index.js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const config = configs[app.get('env')];

// Checking for the connection

// database
//   .authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err) => console.log(err.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Get the current year
app.use((req, res, next) => {
  const year = new Date().getFullYear();
  res.locals.currentYear = year;
  res.locals.currentPage = req.path;
  next();
});

// Pass the sitename to the views
app.locals.siteTitle = config.sitename;

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Listening to on PORT: ' + PORT);
});
