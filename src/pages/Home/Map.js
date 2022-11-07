import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Map = () => {
    return (
        <div>
            <MapContainer center={[23.7936943, 90.4031814]} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.7936943, 90.4031814] } icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} />

                <Marker position={[23.793713, 90.408718] } icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })} />

            </MapContainer>

        </div>
    );
};

export default Map;