import express from "express";
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimonials,
  paginaDetalleViaje,
} from "../controllers/paginasController.js";

import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaInicio);

router.get("/nosotros", paginaNosotros);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimonials", paginaTestimonials);

router.post("/testimonials", guardarTestimonial);

export default router;
