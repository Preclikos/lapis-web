import clsx from 'clsx';
import ExifReader, { GpsTags } from 'exifreader';
import { LatLng } from 'leaflet';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import FileBrowser from '../form-elements/file-browser';
import { TInput } from '../form-elements/types';
import Card from '../ui/card/card';
import CardTitle from '../ui/card/card-title';
import NominatimOsmApi from '../../api/nominatim-api';

interface IProps {
  lat: number;
  lng: number;
}

const MapPan: FC<IProps> = ({ lat, lng }) => {
  const map = useMap();

  map.panTo(new LatLng(lat, lng));

  return <></>;
};

export default MapPan;
