import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import locations from "../data/locations";
import WildlifeChat from './WildlifeChat';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create a custom divIcon for markers with labels
const createCustomIcon = (location) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div class="marker-pin"></div>
      <div class="marker-label">${location.name}</div>
    `,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -42]
  });
};

// Add the same getAnimalEmoji function here
const getAnimalEmoji = (animal) => {
  const animalEmojis = {
    // Big Cats
    "Bengal Tiger": "🐯",
    "Tiger": "🐯",
    "Tigers": "🐯",
    "Royal Bengal Tiger": "🐯",
    "Leopard": "🐆",
    "Leopards": "🐆",
    "Asiatic Lion": "🦁",

    // Other Mammals
    "Elephant": "🐘",
    "Elephants": "🐘",
    "Wild Boar": "🐗",
    "Wild Boars": "🐗",
    "Deer": "🦌",
    "Indian Gazelle": "🦌",
    "Nilgai": "🦌",
    "Barasingha": "🦌",
    "Indian Wolf": "🐺",
    "Indian Wolves": "🐺",
    "Sloth Bears": "🐻",
    "Brown Bear": "🐻",
    "Snow Leopard": "❄️🐆",
    "Himalayan Tahr": "🦌",

    // Aquatic Animals
    "Gangetic Dolphin": "🐬",
    "Estuarine Crocodile": "🐊",

    // Birds
    "Western Tragopan": "🦃",
    "Himalayan Monal": "🦚",

    // Rhinos
    "One-horned Rhinoceros": "🦏",

    // Default
    "default": "🐾"
  };

  return animalEmojis[animal] || animalEmojis.default;
};

const MapView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const center = [22.9734, 78.6569];

  const filteredLocations = locations.filter((loc) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      loc.name.toLowerCase().includes(searchLower) ||
      loc.wildlife.some((animal) => animal.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="map-container">
      <div className="header">
        <h1>
          <span>WildTrails</span> India
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search national parks or wildlife..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <div className="search-results">
              Found {filteredLocations.length} location(s)
            </div>
          )}
        </div>
      </div>

      <MapContainer center={center} zoom={5} className="map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {filteredLocations.map((loc, index) => (
          <Marker 
            key={index} 
            position={loc.coords}
            icon={createCustomIcon(loc)}
          >
            <Popup className="custom-popup">
              <div className="popup-content">
                <h3>{loc.name}</h3>
                <div className="popup-wildlife">
                  {loc.wildlife.map((animal, i) => (
                    <span key={i} className="wildlife-tag">
                      {getAnimalEmoji(animal)} {animal}
                    </span>
                  ))}
                </div>
                <Link to={`/location/${encodeURIComponent(loc.name)}`} className="learn-more-btn">
                  Explore Park →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <WildlifeChat />
    </div>
  );
};

export default MapView;
