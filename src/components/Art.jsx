import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Art = () => {
  const { id } = useParams();
  const navegar = useNavigate();
  const imagenes = {
    1: "https://images.pexels.com/photos/28767893/pexels-photo-28767893/free-photo-of-encantadora-vista-de-la-calle-en-swieradow-zdroj-polonia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    2: "https://images.pexels.com/photos/2674080/pexels-photo-2674080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    3: "https://images.pexels.com/photos/28766937/pexels-photo-28766937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    4: "https://images.pexels.com/photos/28766917/pexels-photo-28766917/free-photo-of-gato-atigrado-naranja-sentado-en-una-pared-rustica.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    5: "https://images.pexels.com/photos/28759578/pexels-photo-28759578/free-photo-of-primer-plano-del-suelo-del-bosque-cubierto-de-musgo-a-la-luz-del-sol.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    6: "https://images.pexels.com/photos/28759038/pexels-photo-28759038/free-photo-of-primer-plano-de-un-pez-cirujano-liso-en-un-acuario.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    7: "https://images.pexels.com/photos/28755003/pexels-photo-28755003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    8: "https://images.pexels.com/photos/28744407/pexels-photo-28744407/free-photo-of-formaciones-rocosas-unicas-en-capadocia-turquia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

  };
  const titulos = {
    1: "Vista Encantadora en Polonia",
    2: "Cactus",
    3: "Cultura China",
    4: "Gato en la Pared",
    5: "Bosque Cubierto de Musgo",
    6: "Pez Cirujano en Acuario",
    7: "Belleza de la Naturaleza",
    8: "Formaciones Rocosas en Capadocia",

  };


  const imagenUrl = imagenes[id] || imagenes[1];
  const titulo = titulos[id] || titulos[1];
  const idNumerico = parseInt(id);
  const handleAnterior = () => {
    if (idNumerico > 1) {
      navegar(`/art/${idNumerico - 1}`);
    }
  };

  const handleSiguiente = () => {
    if (idNumerico < Object.keys(imagenes).length) {
      navegar(`/art/${idNumerico + 1}`);
    }
  };
  return (
    <div>
      <h1>{titulo}</h1>
      <img
        src={imagenUrl}
        alt={titulo}
        style={{ width: '70%', height: 'auto', maxWidth: '1500px' }}
      />
      <div>
        <button onClick={handleAnterior} disabled={idNumerico === 1}>
          Anterior
        </button>
        <button >
          <Link to="/home">
            Home
          </Link>
        </button>
        <button onClick={handleSiguiente} disabled={idNumerico === Object.keys(imagenes).length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Art;
