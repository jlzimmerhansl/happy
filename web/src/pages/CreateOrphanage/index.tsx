import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';

import {
  Container,
  Form,
  InputBlock,
  ImageContainer,
  Label,
  SelectButtonContainer,
  ButtonConfirm,
} from './styles';
import Sidebar from '../../components/Sidebar';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

//import '../styles/pages/create-orphanage.css';

export default function CreateOrphanage() {
  const history = useHistory();
  const { title } = useContext(ThemeContext);

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;
    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);
    console.log(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));

    images.forEach((image) => {
      data.append('images', image);
    });

    await api.post('orphanages/create', data);

    //alert('Cadastro realizado com sucesso');

    history.push('/success');
  }

  return (
    <Container id="page-create-orphanage">
      <Sidebar />
      <main>
        <Form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.5972961, -46.5836981]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  icon={mapIcon}
                  interactive={false}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={(event) => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="images">Fotos</label>

              <ImageContainer className="images-container">
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={name} />;
                })}
                <Label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </Label>
              </ImageContainer>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={(event) => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={(event) => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <SelectButtonContainer className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </button>
              </SelectButtonContainer>
            </InputBlock>
          </fieldset>

          <ButtonConfirm className="confirm-button" type="submit">
            Confirmar
          </ButtonConfirm>
        </Form>
      </main>
    </Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
