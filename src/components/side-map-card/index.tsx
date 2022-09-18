import { LatLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import CardHeader from '../ui/card/card-header';

const SideMapCard = () => {
  const position = new LatLng(51.505, -0.09);

  return (
    <Card className="p-3.8">
      <CardHeader>
        <h3>Poslední lokace</h3>
      </CardHeader>
      <CardBody>
        <MapContainer
          style={{ height: '300px' }}
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </CardBody>
    </Card>
  );
};

export default SideMapCard;
