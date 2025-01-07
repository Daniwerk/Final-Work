import React from 'react'
import video from "../../assets/video/video1.mp4";
const Contact = () => {
  return (
    <section id='Contact' className="contact-form-section">
    <video className="background-video" src={video} autoPlay muted loop></video>
    <div className="form-container">
      <h2>Contáctanos</h2>
      <form>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input type="text" id="firstName" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" placeholder="Tu apellido" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" placeholder="Tu correo electrónico" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Escribe un mensaje</label>
          <textarea id="message" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <div className="form-row">
          <button type="submit">Enviar</button>
          <p className="thank-you">¡Gracias por tu mensaje!</p>
        </div>
      </form>
    </div>
  </section>

  )
}

export default Contact

