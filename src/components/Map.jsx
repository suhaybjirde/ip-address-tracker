import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from "leaflet";
import iconImg from '../assets/marker-icon.png'

function SetTheView({latitude, longitude}) {
    const map = useMap()
    map.setView([latitude, longitude], map.getZoom())
    return null
}

const Map = ({latitude, longitude})=> {

    const icon = new Icon({
        iconUrl: iconImg,
        iconSize: [38, 38]
    })

    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]} icon={icon}>
                <Popup>
                Here is the IP Address
                </Popup>
            </Marker>
            <SetTheView  latitude={latitude} longitude={longitude} />
        </MapContainer>
    )
}

export default Map