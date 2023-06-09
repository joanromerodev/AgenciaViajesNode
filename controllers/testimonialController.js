import { Testimonial } from "../models/Testimonials.js";

const guardarTestimonial = async (req, res) => {
  const { nombre, correo, mensaje } = req.body;
  const errores = [];
  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre no puede ir vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo no puede ir vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje no puede ir vacio" });
  }

  if (errores.length > 0) {
    const testimonials = await Testimonial.findAll();
    //   Mostrar la vista con errores
    res.render("testimonials", {
      pagina: "Testimonios",
      errores,
      nombre,
      correo,
      mensaje,
      testimonials,
    });
  } else {
    //Almacenarlo en la base de datos
    try {
      const dbResponse = {
        icon: "success",
        text: "Testimonio registrado exitosamente",
      };
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });
      const testimonials = await Testimonial.findAll();
      res.render("testimonials", {
        pagina: "Testimonios",
        dbResponse,
        testimonials,
      });
    } catch (error) {
      const testimonials = await Testimonial.findAll();
      const dbResponse = {
        icon: "error",
        text: "Hubo un error, contacte al administrador",
      };
      res.render("testimonials", {
        pagina: "Testimonios",
        dbResponse,
        testimonials,
      });
      console.log(error);
    }
  }
};

export { guardarTestimonial };
