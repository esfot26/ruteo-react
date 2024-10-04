import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importar el archivo CSS

const Home = () => {
    return (
        <nav className="nav-container">
            <h1 className="nav-title">Bienvenida a ver las obras de arte</h1>
            <ul className="art-list">
                <li>
                    <Link to={'/art/1'} className="art-link">Vista Encantadora en Polonia</Link>
                </li>
                <li>
                    <Link to={'/art/2'} className="art-link">Cactus</Link>
                </li>
                <li>
                    <Link to={`/art/3`} className="art-link">Cultura China</Link>
                </li>
                <li>
                    <Link to={`/art/4`} className="art-link">Gato en la Pared</Link>
                </li>
                <li>
                    <Link to={`/art/5`} className="art-link">Bosque Cubierto de Musgo</Link>
                </li>
                <li>
                    <Link to={`/art/6`} className="art-link">Pez Cirujano en Acuario</Link>
                </li>
                <li>
                    <Link to={`/art/7`} className="art-link">Belleza de la Naturaleza</Link>
                </li>
                <li>
                    <Link to={`/art/8`} className="art-link">Formaciones Rocosas en Capadocia</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Home;
