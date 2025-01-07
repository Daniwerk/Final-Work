import React, { useState } from 'react';
import img1 from "../../assets/img/receta1.png";
import img2 from "../../assets/img/receta2.png";
import img3 from "../../assets/img/receta3.png";
import img4 from "../../assets/img/receta4.png";
import img5 from "../../assets/img/receta5.png";
import img6 from "../../assets/img/receta6.png";
import video from "../../assets/video/video1.mp4";



const Hero = () => {

    const [Visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!Visible)
    }

    return (
    <section id='Nuestras-recetas' className='secction-hero' >
      


      <div className="hero-content" >
        
        <h1>¡Descubre Recetas Saludables y Deliciosas!</h1>
        <p>
          Encuentra tus platos favoritos, explora nuevas ideas, y cocina como
          nunca antes. ¡Saludable nunca fue tan fácil!
        </p>
        <button className="hero-button" onClick={handleClick}>Explorar Recetas</button>
      </div>
      
      <div className="hero">
        


        {Visible && (
          

          

          <div className='recetas-name'>
            <h2>Nuestras recetas para ti</h2>
          <div className='card-container'>
              
            
            <div className='card'>
              <img src={img1} alt="" />
              <div className='card-info'>
              <h3>Tacos de Pollo al Chipotle</h3>
              <p>Tiras de pollo marinadas en salsa de chipotle y especias, servidas en tortillas de maíz con cebolla, cilantro y una pizca de limón. Perfectos para una cena rápida y sabrosa.</p>
              <p>Ingredientes principales:</p>
              <ul>
                <li> Pollo, tortillas, aguacate, tomate, cilantro, salsa.</li>


              </ul>
              <p></p>
              </div>
            </div>

            <div className='card'>
              <img src={img2} alt="" />
              <div className='card-info'>
              <h3>Ensalada Mediterránea</h3>
              <p>Una mezcla refrescante de tomates, pepinos, cebolla roja, aceitunas negras y queso feta, sazonada con aceite de oliva, limón y orégano. Ideal para una comida ligera y saludable.</p>
              <p>Ingredientes principales:</p>
              <ul>
                <li>Quinoa, vegetales frescos, jugo de limón, aceite de oliva, perejil.</li>

              </ul>
              <p></p>
              </div>
            </div>

            <div className='card'>
              <img src={img3} alt="" />
              <div className='card-info'>
              <h3>Lasaña de Vegetales</h3>
              <p>Capas de berenjena, calabacín, espinacas y una cremosa salsa de tomate, gratinadas con queso mozzarella. Una opción deliciosa y vegetariana para los amantes de la pasta.</p>
              <p>Ingredientes Principales:</p>
              <ul>
                <li>Garbanzos, leche de coco, curry, tomate, jengibre.</li>
              </ul>

              <p></p>
              </div>
            </div>

            <div className='card'>
              <img src={img4} alt="" />
              <div className='card-info'>
              <h3>Curry de Garbanzos y Espinacas</h3>
              <p>Garbanzos tiernos y espinacas en una rica salsa de curry con leche de coco, jengibre y especias. Un plato vegano lleno de sabor y nutrientes facil de preparar, y excelente para tus comidas.</p>
              <p>Ingredientes Principales:</p>
              <ul>
                <li>Salmón, ajo, hierbas frescas, eneldo o perejil, limón.</li>
              </ul>

              <p></p>
              </div>
            </div>

            <div className='card'>
              <img src={img5} alt="" />
              <div className='card-info'>
              <h3>Salmón al Horno con Limón y Hierbas</h3>
              <p>Filetes de salmón horneados con rodajas de limón, ajo y hierbas frescas como el eneldo y el tomillo. Una receta ligera y fácil de preparar que resalta el sabor increible y natural del pescado.</p>
              <p>Ingredientes Principales:</p>
              <ul>
                <li>Pasta, crema, queso parmesano, espinacas, champiñones.</li>
              </ul>

              <p></p>
              </div>
            </div>

            <div className='card'>
              <img src={img6} alt="" />
              <div className='card-info'>
              <h3>Brownies de Chocolate Saludables</h3>
              <p>Deliciosos brownies hechos con cacao, puré de plátano y harina de avena, un poco endulzados naturalmente con miel. Una alternativa más ligera al postre clásico, pero igual de irresistible.</p>
              <p>Ingredientes Principales:</p>
              <ul>
                <li>Chocolate, cacao en polvo, mantequilla, azúcar, nueces.</li>
              </ul>

              <p></p>
              </div>
            </div>


            </div>
            </div>
        )}

      </div>
    </section>
  );
};

export default Hero
