import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import locations from "../data/locations";
import { fetchWeather } from "../utils/weather";
import CarbonCalculator from './CarbonCalculator';
import axios from "axios";

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
    "default": "🦁"
  };

  return animalEmojis[animal] || animalEmojis.default;
};

const animalFacts = {
  // Big Cats
  "Bengal Tiger": [
    "Bengal Tigers can swim up to 6km and are excellent swimmers!",
    "A tiger's roar can be heard up to 3 kilometers away.",
    "Each tiger has a unique stripe pattern, like human fingerprints."
  ],
  "Royal Bengal Tiger": [
    "Royal Bengal Tigers are the largest of all wild cats.",
    "They can consume up to 40 kg of meat in one sitting!",
    "A Bengal Tiger's stripes are also found on their skin, not just their fur."
  ],
  "Leopard": [
    "Leopards are excellent climbers and often drag their prey up trees.",
    "They can leap forward over 6 meters in a single bound!",
    "Leopards are strong swimmers and can fish effectively."
  ],
  "Asiatic Lion": [
    "Asiatic Lions are slightly smaller than their African cousins.",
    "They are the only lions in the world that live outside Africa.",
    "Male Asiatic lions have shorter, sparser manes than African lions."
  ],

  // Other Mammals
  "Elephants": [
    "Asian elephants can spend up to 18 hours a day eating!",
    "They are excellent swimmers and use their trunks as natural snorkels.",
    "Elephant herds are led by the oldest and largest female, called the matriarch."
  ],
  "Wild Boar": [
    "Wild boars can run at speeds of up to 40 km/h.",
    "They have an excellent sense of smell and can detect food underground.",
    "Their tusks grow continuously throughout their lifetime."
  ],
  "Indian Gazelle": [
    "Indian Gazelles can run at speeds up to 65 km/h!",
    "They can survive without drinking water, getting moisture from plants.",
    "They have excellent eyesight and can detect predators from far away."
  ],
  "Indian Wolf": [
    "Indian wolves are smaller than their European counterparts.",
    "They can travel up to 60 km in a single day!",
    "They live in small family packs and are excellent hunters."
  ],
  "Sloth Bears": [
    "Sloth bears can suck up termites through their snout like a vacuum cleaner!",
    "They have specially adapted lower lips and palates for sucking insects.",
    "Unlike other bears, sloth bears carry their cubs on their back."
  ],

  // Aquatic Animals
  "Gangetic Dolphin": [
    "Gangetic Dolphins are practically blind and navigate using echolocation!",
    "They can only live in freshwater and are found in the Ganges River system.",
    "They surface every 30-120 seconds to breathe."
  ],
  "Estuarine Crocodile": [
    "They are the largest of all living reptiles!",
    "They can stay underwater for up to 2 hours at a time.",
    "They have the strongest bite force ever measured in any animal."
  ],

  // Rhinos
  "One-horned Rhinoceros": [
    "Their horn is made of compressed hair, similar to our fingernails!",
    "They can run at speeds of up to 55 km/h despite their heavy weight.",
    "They are excellent swimmers and can dive underwater for food."
  ],

  // Birds
  "Western Tragopan": [
    "Male Western Tragopans have distinctive blue facial skin that brightens during mating season!",
    "They are one of the rarest pheasants in the world.",
    "They live at high altitudes between 2,400 to 3,600 meters."
  ],
  "Himalayan Monal": [
    "Male Himalayan Monals have rainbow-colored plumage!",
    "They are the national bird of Nepal.",
    "They use their strong beaks to dig for underground insects and tubers."
  ]
};

const ShareButton = ({ location }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const shareData = {
    title: `Visit ${location.name}`,
    text: `Explore ${location.name} and its amazing wildlife including ${location.wildlife.join(', ')}!`,
    url: window.location.href
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        // Use native share if available
        await navigator.share(shareData);
      } else {
        // Fallback to copying link
        await navigator.clipboard.writeText(window.location.href);
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="share-button-container">
      <button onClick={handleShare} className="share-button">
        <span className="share-icon">📤</span>
        Share
      </button>
      {showTooltip && (
        <div className="share-tooltip">
          Link copied to clipboard!
        </div>
      )}
    </div>
  );
};

const LocationDetail = () => {
  const { name } = useParams();
  const location = locations.find((loc) => loc.name === decodeURIComponent(name));
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(500); // Default 500km
  const [animalFacts, setAnimalFacts] = useState({});
  const [loadingFacts, setLoadingFacts] = useState(true);
  const [selectedFact, setSelectedFact] = useState({
    animal: '',
    fact: '',
    loading: true
  });

  useEffect(() => {
    const getWeather = async () => {
      if (location) {
        const [lat, lon] = location.coords;
        const weatherData = await fetchWeather(lat, lon);
        setWeather(weatherData);
        setLoading(false);
      }
    };

    getWeather();
  }, [location]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        const parkLat = location.coords[0];
        const parkLon = location.coords[1];

        // Simple distance calculation (you can use a more accurate formula)
        const distance = Math.sqrt(
          Math.pow(parkLat - userLat, 2) + 
          Math.pow(parkLon - userLon, 2)
        ) * 111; // Rough conversion to kilometers
        
        setDistance(Math.round(distance));
      });
    }
  }, [location]);

  useEffect(() => {
    const fetchAnimalFacts = async () => {
      if (!location) return;
      
      setLoadingFacts(true);
      const facts = {};
      
      // Fetch a fact for each animal in the park
      for (const animal of location.wildlife) {
        try {
          // Remove specific terms to get more general facts
          const searchTerm = animal
            .replace('Royal Bengal', '')
            .replace('One-horned', '')
            .replace('Asiatic', '')
            .trim();
          
          const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${searchTerm}`, {
            headers: {
              'X-Api-Key': 'VVAzsfWHeh+UzpuwJr+jlw==LFG7YdIjpm3IlyrZ' // Replace with your API key
            }
          });
          
          if (response.data && response.data.length > 0) {
            const animalData = response.data[0];
            facts[animal] = {
              fact: animalData.characteristics.behavior || 
                    animalData.characteristics.habitat ||
                    animalData.characteristics.diet ||
                    "No specific fact available for this animal.",
              type: animalData.characteristics.behavior ? 'behavior' :
                    animalData.characteristics.habitat ? 'habitat' :
                    animalData.characteristics.diet ? 'diet' : 'general'
            };
          }
        } catch (error) {
          console.error(`Error fetching fact for ${animal}:`, error);
          facts[animal] = {
            fact: "Fact currently unavailable.",
            type: 'general'
          };
        }
      }
      
      setAnimalFacts(facts);
      setLoadingFacts(false);
    };

    fetchAnimalFacts();
  }, [location]);

  useEffect(() => {
    if (location) {
      // Select a random animal from the location's wildlife
      const randomAnimal = location.wildlife[Math.floor(Math.random() * location.wildlife.length)];
      
      // Get facts for this animal
      const animalFactList = animalFacts[randomAnimal] || [
        "This magnificent creature is an important part of India's biodiversity.",
        "It plays a crucial role in maintaining the ecosystem balance.",
        "Conservation efforts are ongoing to protect this species."
      ];

      // Select a random fact
      const randomFact = animalFactList[Math.floor(Math.random() * animalFactList.length)];

      setSelectedFact({
        animal: randomAnimal,
        fact: randomFact,
        loading: false
      });
    }
  }, [location]);

  if (!location) {
    return <p>Location not found!</p>;
  }

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${location.bannerImage}')`
  };

  return (
    <div className="location-detail">
      <Link to="/" className="back-button">
        ← Back to Map
      </Link>
      
      <ShareButton location={location} />
      
      <div className="hero-section" style={heroStyle}>
        <div className="hero-content">
          <h1>{location.name}</h1>
          <div className="temperature-badge">
            <span className="temperature-icon">🌡️</span>
            {loading ? (
              "Loading..."
            ) : weather ? (
              <>
                {Math.round(weather.main.temp)}°C
                <span className="weather-description">
                  | {weather.weather[0].description}
                </span>
              </>
            ) : (
              "Temperature unavailable"
            )}
          </div>
        </div>
      </div>

      <div className="content-container">
        <div className="wildlife-section">
          <h2>Wildlife Species</h2>
          <div className="wildlife-grid">
            {location.wildlife.map((animal, index) => (
              <div key={index} className="wildlife-card">
                <span className="wildlife-icon">{getAnimalEmoji(animal)}</span>
                <span>{animal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-section">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {location.photos?.map((photo, index) => (
              <div key={index} className="gallery-item">
                <img src={photo} alt={`${location.name} - ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="calculator-section">
          <h2>Plan Your Visit</h2>
          <CarbonCalculator distance={distance} />
        </div>
        <div className="fun-fact-section">
          <h2>Did You Know?</h2>
          <div className="fact-card">
            {selectedFact.loading ? (
              <p className="loading-fact">Loading interesting fact...</p>
            ) : (
              <>
                <div className="fact-header">
                  <span className="fact-icon">{getAnimalEmoji(selectedFact.animal)}</span>
                  <h3>{selectedFact.animal}</h3>
                </div>
                <p className="fact-text">{selectedFact.fact}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationDetail;
