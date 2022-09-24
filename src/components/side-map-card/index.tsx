import { LatLng } from 'leaflet';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useApiLapisLastLocationById } from '../../api/use-api';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import CardHeader from '../ui/card/card-header';
import SpinnerPuzzle from '../ui/spinner/spinner-puzzle';
import { messages } from './messages';

interface IProps {
  id: number;
}

const SideMapCard: FC<IProps> = ({ id }) => {
  const { data: lastLocation } = useApiLapisLastLocationById(id);
  const position = new LatLng(lastLocation?.lat ?? 0, lastLocation?.long ?? 0);

  return (
    <Card className="p-3.8">
      <CardHeader>
        <h3>
          <FormattedMessage {...messages.lastLocation} />
        </h3>
      </CardHeader>
      <CardBody>
        {lastLocation ? (
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
        ) : (
          <SpinnerPuzzle />
        )}
      </CardBody>
    </Card>
  );
};

export default SideMapCard;
