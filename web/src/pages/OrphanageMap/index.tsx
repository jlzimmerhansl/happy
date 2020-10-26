import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';

import { Container, Aside, Header, Footer, LinkButton } from './styles';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const { title } = useContext(ThemeContext);
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <Container id="page-map">
      <Aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estãoesperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </Footer>
      </Aside>
      <Map
        center={[-23.5972961, -46.5836981]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{z}.png" />*/}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <LinkButton to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </LinkButton>
    </Container>
  );
}

export default OrphanagesMap;
