import { LatLng } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Card from '../ui/card/card';

const SideMapCard = () => {
  const position = new LatLng(51.505, -0.09);

  return (
    <Card className="calendar-card p-3.8">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
};

export default SideMapCard;
