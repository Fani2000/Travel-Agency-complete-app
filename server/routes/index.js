import { Router } from 'express';
import {
  aboutController,
  getTestimonialsController,
  homeController,
  postTestimonialController,
  singleTravelController,
  travelsController,
} from '../controller/index.js';

const router = Router();

router.get('/', homeController);

router.get('/about', aboutController);

router.get('/travels', travelsController);

router.get('/travels/:id', singleTravelController);

router.get('/testimonials', getTestimonialsController);

router.post('/testimonials', postTestimonialController);

export default router;
