import React from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { Heading } from "../page/styled";
import { Container, MapContainer } from "./styled";

const Location = () => {
  return (
    <Container>
      <Heading>Our location</Heading>
      <MapContainer>
        <YMaps>
          <Map
            width="100%"
            height="100%"
            defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
          />
        </YMaps>
      </MapContainer>
    </Container>
  );
};

export default Location;
