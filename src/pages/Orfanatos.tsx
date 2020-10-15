import React from 'react';
import mapMarketImg from '../images/Mapa.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orfanatos.css';
//Logo
import logoImg from '../images/Logo.svg';

function Orfanatos() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa:</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Vila Velha</strong>
                    <strong>Espírito Santo</strong>
                </footer>
            </aside>


            <Map
                center={[-20.3365943, -40.278223]}
                zoom={100}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="" className="criarOrfanato">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}
export default Orfanatos;