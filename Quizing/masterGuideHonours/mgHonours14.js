// Orienteering

const mgHonours14 = [

  {
    "question": "What is another common name for a topographic map?",
    "options": [
      { "text": "Elevation map", "isCorrect": false },
      { "text": "Contour map", "isCorrect": true },
      { "text": "Terrain map", "isCorrect": false },
      { "text": "Geological map", "isCorrect": false }
    ]
  },
  {
    "question": "What do contour lines on a topographic map represent?",
    "options": [
      { "text": "Longitude", "isCorrect": false },
      { "text": "Altitude", "isCorrect": true },
      { "text": "Latitude", "isCorrect": false },
      { "text": "Distance", "isCorrect": false }
    ]
  },
  {
    "question": "What would you NOT expect to find on a topographic map?",
    "options": [
      { "text": "Rivers", "isCorrect": false },
      { "text": "Roads", "isCorrect": false },
      { "text": "Population density", "isCorrect": true },
      { "text": "Railroad tracks", "isCorrect": false }
    ]
  },
  {
    "question": "What feature on a topographic map is especially handy for pinpointing position?",
    "options": [
      { "text": "Roads", "isCorrect": false },
      { "text": "Power lines", "isCorrect": true },
      { "text": "Lakes", "isCorrect": false },
      { "text": "Rivers", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is a use of a topographic map?",
    "options": [
      { "text": "Determining the altitude of a mountain peak", "isCorrect": true },
      { "text": "Calculating the speed of a river's flow", "isCorrect": false },
      { "text": "Identifying the species of trees in a forest", "isCorrect": false },
      { "text": "Predicting the weather", "isCorrect": false }
    ]
  },
  {
    "question": "Topographic maps help in determining the:",
    "options": [
      { "text": "Time of day", "isCorrect": false },
      { "text": "Elevation changes in an area", "isCorrect": true },
      { "text": "Type of soil", "isCorrect": false },
      { "text": "Air quality", "isCorrect": false }
    ]
  },
  {
    "question": "What can contour lines indicate about the terrain?",
    "options": [
      { "text": "Steepness", "isCorrect": true },
      { "text": "Wind direction", "isCorrect": false },
      { "text": "Temperature", "isCorrect": false },
      { "text": "Soil composition", "isCorrect": false }
    ]
  },
  {
    "question": "A topographic map can help you understand:",
    "options": [
      { "text": "The historical significance of an area", "isCorrect": false },
      { "text": "The geological age of the land", "isCorrect": false },
      { "text": "The layout of hiking trails", "isCorrect": true },
      { "text": "The types of minerals present", "isCorrect": false }
    ]
  },
  {
    "question": "What information does a topographic map provide about a river?",
    "options": [
      { "text": "Its depth", "isCorrect": false },
      { "text": "Its source and course", "isCorrect": true },
      { "text": "Its temperature", "isCorrect": false },
      { "text": "The types of fish in it", "isCorrect": false }
    ]
  },
  {
    "question": "Which of the following is NOT a feature typically shown on a topographic map?",
    "options": [
      { "text": "Mountain peaks", "isCorrect": false },
      { "text": "Weather patterns", "isCorrect": true },
      { "text": "Lakes", "isCorrect": false },
      { "text": "Contour lines", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents an Airport on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/71/NPS_airport_symbol.png",
    "options": [
      { "text": "✈️", "isCorrect": true },
      { "text": "🚗", "isCorrect": false },
      { "text": "🏕️", "isCorrect": false },
      { "text": "⛺", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Boat launch on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/91/NPS_boat_launch_symbol.png",
    "options": [
      { "text": "🚤", "isCorrect": true },
      { "text": "🛶", "isCorrect": false },
      { "text": "🏊", "isCorrect": false },
      { "text": "🏝️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Campground on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/NPS_campground_symbol.png",
    "options": [
      { "text": "🏕️", "isCorrect": true },
      { "text": "🌲", "isCorrect": false },
      { "text": "🛏️", "isCorrect": false },
      { "text": "🏡", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Canoe access on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/53/NPS_canoe_access_symbol.png",
    "options": [
      { "text": "🛶", "isCorrect": true },
      { "text": "🚤", "isCorrect": false },
      { "text": "🏊", "isCorrect": false },
      { "text": "🌊", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Drinking water on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/NPS_drinking_water_symbol.png",
    "options": [
      { "text": "🚰", "isCorrect": true },
      { "text": "💧", "isCorrect": false },
      { "text": "🛁", "isCorrect": false },
      { "text": "⛲", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents First aid on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/29/NPS_first_aid_symbol.png",
    "options": [
      { "text": "⛑️", "isCorrect": true },
      { "text": "🚑", "isCorrect": false },
      { "text": "🏥", "isCorrect": false },
      { "text": "💊", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Fishing on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f7/NPS_fishing_symbol.png",
    "options": [
      { "text": "🎣", "isCorrect": true },
      { "text": "🐟", "isCorrect": false },
      { "text": "🏞️", "isCorrect": false },
      { "text": "🦀", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Food service on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7c/NPS_food_service_symbol.png",
    "options": [
      { "text": "🍽️", "isCorrect": true },
      { "text": "🍴", "isCorrect": false },
      { "text": "🥘", "isCorrect": false },
      { "text": "🍔", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Four-wheel drive access on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/5/56/NPS_four_wheel_drive_access_symbol.png",
    "options": [
      { "text": "🚙", "isCorrect": true },
      { "text": "🚗", "isCorrect": false },
      { "text": "🚜", "isCorrect": false },
      { "text": "🛻", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Gas station on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/NPS_gas_station_symbol.png",
    "options": [
      { "text": "⛽", "isCorrect": true },
      { "text": "🛢️", "isCorrect": false },
      { "text": "🚗", "isCorrect": false },
      { "text": "🏭", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Hospital on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/NPS_hospital_symbol.png",
    "options": [
      { "text": "🏥", "isCorrect": true },
      { "text": "🚑", "isCorrect": false },
      { "text": "💉", "isCorrect": false },
      { "text": "💊", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents an Information center on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/7/7e/NPS_information_symbol.png",
    "options": [
      { "text": "ℹ️", "isCorrect": true },
      { "text": "📚", "isCorrect": false },
      { "text": "🗒️", "isCorrect": false },
      { "text": "📍", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Litter receptacle on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f4/NPS_litter_receptacle_symbol.png",
    "options": [
      { "text": "🗑️", "isCorrect": true },
      { "text": "♻️", "isCorrect": false },
      { "text": "🚮", "isCorrect": false },
      { "text": "🛢️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Lodging on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/3/35/NPS_lodging_symbol.png",
    "options": [
      { "text": "🏨", "isCorrect": true },
      { "text": "🏕️", "isCorrect": false },
      { "text": "🏡", "isCorrect": false },
      { "text": "🏠", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Parking area on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a0/NPS_parking_area_symbol.png",
    "options": [
      { "text": "🅿️", "isCorrect": true },
      { "text": "🚗", "isCorrect": false },
      { "text": "🚙", "isCorrect": false },
      { "text": "🚦", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Picnic area on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/16/NPS_picnic_area_symbol.png",
    "options": [
      { "text": "🍽️", "isCorrect": false },
      { "text": "🌳", "isCorrect": false },
      { "text": "🍉", "isCorrect": false },
      { "text": "🍴", "isCorrect": true }
    ]
  },
  {
    "question": "What symbol represents a Ranger station on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/26/NPS_ranger_station_symbol.png",
    "options": [
      { "text": "🏕️", "isCorrect": false },
      { "text": "🚨", "isCorrect": false },
      { "text": "🚔", "isCorrect": false },
      { "text": "🚒", "isCorrect": true }
]
  },
  {
    "question": "What symbol represents Recycling on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0f/NPS_recycling_symbol.png",
    "options": [
      { "text": "♻️", "isCorrect": true },
      { "text": "🗑️", "isCorrect": false },
      { "text": "🚮", "isCorrect": false },
      { "text": "🚯", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents Restrooms on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/NPS_restrooms_symbol.png",
    "options": [
      { "text": "🚻", "isCorrect": true },
      { "text": "🚹", "isCorrect": false },
      { "text": "🚺", "isCorrect": false },
      { "text": "🚼", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents an RV campground on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/NPS_rv_campground_symbol.png",
    "options": [
      { "text": "🚐", "isCorrect": true },
      { "text": "🏕️", "isCorrect": false },
      { "text": "🚍", "isCorrect": false },
      { "text": "🏡", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Self-guiding trail on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/6/68/NPS_self_guiding_trail_symbol.png",
    "options": [
      { "text": "🛤️", "isCorrect": true },
      { "text": "🚶", "isCorrect": false },
      { "text": "⛺", "isCorrect": false },
      { "text": "🏞️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Shelter on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/NPS_shelter_symbol.png",
    "options": [
      { "text": "⛺", "isCorrect": true },
      { "text": "🏕️", "isCorrect": false },
      { "text": "🏠", "isCorrect": false },
      { "text": "🚶", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Store on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/NPS_store_symbol.png",
    "options": [
      { "text": "🏬", "isCorrect": true },
      { "text": "🏪", "isCorrect": false },
      { "text": "🛒", "isCorrect": false },
      { "text": "🍽️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Telephone on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/NPS_telephone_symbol.png",
    "options": [
      { "text": "☎️", "isCorrect": true },
      { "text": "📞", "isCorrect": false },
      { "text": "📱", "isCorrect": false },
      { "text": "📠", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Trailhead on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/4/4c/NPS_trailhead_symbol.png",
    "options": [
      { "text": "🏞️", "isCorrect": true },
      { "text": "🛤️", "isCorrect": false },
      { "text": "🚶", "isCorrect": false },
      { "text": "⛺", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Bridge on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/NPS_bridge_symbol.png",
    "options": [
      { "text": "🌉", "isCorrect": true },
      { "text": "🚧", "isCorrect": false },
      { "text": "🏞️", "isCorrect": false },
      { "text": "🏗️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Hiking trail on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/NPS_hiking_trail_symbol.png",
    "options": [
      { "text": "🚶", "isCorrect": true },
      { "text": "⛺", "isCorrect": false },
      { "text": "🚴", "isCorrect": false },
      { "text": "🏞️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Marsh on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/07/NPS_marsh_symbol.png",
    "options": [
      { "text": "🏞️", "isCorrect": false },
      { "text": "🌿", "isCorrect": true },
      { "text": "🌲", "isCorrect": false },
      { "text": "🏝️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Rapids on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/a/a8/NPS_rapids_symbol.png",
    "options": [
      { "text": "🌊", "isCorrect": true },
      { "text": "🏞️", "isCorrect": false },
      { "text": "🚤", "isCorrect": false },
      { "text": "🌪️", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents a Spring on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2f/NPS_spring_symbol.png",
    "options": [
      { "text": "💧", "isCorrect": true },
      { "text": "🏞️", "isCorrect": false },
      { "text": "🚰", "isCorrect": false },
      { "text": "⛲", "isCorrect": false }
    ]
  },
  {
    "question": "What symbol represents an Unpaved road on a U.S. National Park Service map?",
    "image": "https://upload.wikimedia.org/wikipedia/commons/0/0d/NPS_unpaved_road_symbol.png",
    "options": [
      { "text": "🚜", "isCorrect": true },
      { "text": "🛤️", "isCorrect": false },
      { "text": "🛣️", "isCorrect": false },
      { "text": "🏞️", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary purpose of the cover on a lensatic compass?",
    "options": [
      { "text": "To protect the floating dial.", "isCorrect": true },
      { "text": "To read the compass dial.", "isCorrect": false },
      { "text": "To provide a fixed black index line.", "isCorrect": false },
      { "text": "To clamp the dial.", "isCorrect": false }
    ]
  },
  {
    "question": "What component of the lensatic compass is used for night navigation?",
    "options": [
      { "text": "Luminous sighting slots or dots.", "isCorrect": true },
      { "text": "Fixed black index line.", "isCorrect": false },
      { "text": "Thumb loop.", "isCorrect": false },
      { "text": "Rear-sight slot.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the floating dial on a lensatic compass?",
    "options": [
      { "text": "To rotate freely and point to magnetic north.", "isCorrect": true },
      { "text": "To provide a fixed index line.", "isCorrect": false },
      { "text": "To protect the glass face.", "isCorrect": false },
      { "text": "To lock and clamp the dial.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the bezel ring on a lensatic compass?",
    "options": [
      { "text": "To act as a ratchet device that clicks when turned.", "isCorrect": true },
      { "text": "To hold the compass cover.", "isCorrect": false },
      { "text": "To provide a luminous sighting slot.", "isCorrect": false },
      { "text": "To attach the thumb loop.", "isCorrect": false }
    ]
  },
  {
    "question": "How many clicks does the bezel ring produce when fully rotated on a lensatic compass?",
    "options": [
      { "text": "120 clicks.", "isCorrect": true },
      { "text": "100 clicks.", "isCorrect": false },
      { "text": "90 clicks.", "isCorrect": false },
      { "text": "360 clicks.", "isCorrect": false }
    ]
  },
  {
    "question": "What does each click of the bezel ring represent in degrees?",
    "options": [
      { "text": "3°.", "isCorrect": true },
      { "text": "1°.", "isCorrect": false },
      { "text": "5°.", "isCorrect": false },
      { "text": "10°.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of the luminous line on the bezel ring?",
    "options": [
      { "text": "To be used in conjunction with the north-seeking arrow during navigation.", "isCorrect": true },
      { "text": "To clamp the dial when closed.", "isCorrect": false },
      { "text": "To provide a rear-sight slot.", "isCorrect": false },
      { "text": "To attach the thumb loop.", "isCorrect": false }
    ]
  },
  {
    "question": "Where is the thumb loop attached on a lensatic compass?",
    "options": [
      { "text": "To the base of the compass.", "isCorrect": true },
      { "text": "To the cover of the compass.", "isCorrect": false },
      { "text": "To the bezel ring.", "isCorrect": false },
      { "text": "To the lens.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the definition of elevation?",
    "options": [
      { "text": "The height of a point relative to sea level.", "isCorrect": true },
      { "text": "The distance between two points on a map.", "isCorrect": false },
      { "text": "The angular difference between magnetic north and true north.", "isCorrect": false },
      { "text": "The measure of how far apart two points are.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the contour interval on a topographic map represent?",
    "options": [
      { "text": "The elevation change between adjacent contour lines.", "isCorrect": true },
      { "text": "The distance between two points on the map.", "isCorrect": false },
      { "text": "The azimuth direction from one point to another.", "isCorrect": false },
      { "text": "The scale of the map.", "isCorrect": false }
    ]
  },
  {
    "question": "What direction does Magnetic North indicate?",
    "options": [
      { "text": "Towards the North Magnetic Pole.", "isCorrect": true },
      { "text": "Towards the Geographic North Pole.", "isCorrect": false },
      { "text": "Towards the Equator.", "isCorrect": false },
      { "text": "Towards the South Magnetic Pole.", "isCorrect": false }
    ]
  },
  {
    "question": "What is magnetic declination?",
    "options": [
      { "text": "The angular difference between magnetic north and true north.", "isCorrect": true },
      { "text": "The distance between two contour lines on a map.", "isCorrect": false },
      { "text": "The height of a point relative to sea level.", "isCorrect": false },
      { "text": "The measure of length between two points.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the scale of a map indicate?",
    "options": [
      { "text": "The ratio of a distance on the map to the actual distance on the ground.", "isCorrect": true },
      { "text": "The elevation change between contour lines.", "isCorrect": false },
      { "text": "The direction towards magnetic north.", "isCorrect": false },
      { "text": "The angular difference between true north and magnetic north.", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool can be used to measure distance on a map?",
    "options": [
      { "text": "A ruler or calipers.", "isCorrect": true },
      { "text": "A compass.", "isCorrect": false },
      { "text": "A protractor.", "isCorrect": false },
      { "text": "A GPS device.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the function of the back-azimuth?",
    "options": [
      { "text": "To express the compass bearing in the opposite direction.", "isCorrect": true },
      { "text": "To indicate the elevation change between two points.", "isCorrect": false },
      { "text": "To determine the distance on a map.", "isCorrect": false },
      { "text": "To measure the scale of a map.", "isCorrect": false }
    ]
  },
  {
    "question": "True North is the direction from any point on Earth to which location?",
    "options": [
      { "text": "The Geographic North Pole.", "isCorrect": true },
      { "text": "The North Magnetic Pole.", "isCorrect": false },
      { "text": "The South Magnetic Pole.", "isCorrect": false },
      { "text": "The Equator.", "isCorrect": false }
    ]
  },
  {
    "question": "What is an azimuth?",
    "options": [
      { "text": "A compass bearing expressed in degrees.", "isCorrect": true },
      { "text": "The height of a point relative to sea level.", "isCorrect": false },
      { "text": "The distance between contour lines on a map.", "isCorrect": false },
      { "text": "The scale of a map.", "isCorrect": false }
    ]
  },
  {
    "question": "If the azimuth is 90°, which direction are you facing?",
    "options": [
      { "text": "East.", "isCorrect": true },
      { "text": "North.", "isCorrect": false },
      { "text": "South.", "isCorrect": false },
      { "text": "West.", "isCorrect": false }
    ]
  },
  {
    "question": "How do you calculate the back-azimuth if the azimuth is less than 180°?",
    "options": [
      { "text": "Add 180°.", "isCorrect": true },
      { "text": "Subtract 180°.", "isCorrect": false },
      { "text": "Divide the azimuth by 2.", "isCorrect": false },
      { "text": "Multiply the azimuth by 2.", "isCorrect": false }
    ]
  },
  {
    "question": "What is distance?",
    "options": [
      { "text": "The measure of length between two points.", "isCorrect": true },
      { "text": "The angular difference between magnetic north and true north.", "isCorrect": false },
      { "text": "The direction a compass points towards.", "isCorrect": false },
      { "text": "The height of a point relative to sea level.", "isCorrect": false }
    ]
  },
  {
    "question": "What does the term 'ground forms' refer to?",
    "options": [
      { "text": "The surface of the earth.", "isCorrect": true },
      { "text": "The distance between two contour lines.", "isCorrect": false },
      { "text": "The direction towards true north.", "isCorrect": false },
      { "text": "The angular difference between azimuth and back-azimuth.", "isCorrect": false }
    ]
  },
  {
    "question": "What does 'magnetic declination' correct for?",
    "options": [
      { "text": "The difference between magnetic north and true north.", "isCorrect": true },
      { "text": "The height difference between contour lines.", "isCorrect": false },
      { "text": "The scale ratio on a map.", "isCorrect": false },
      { "text": "The direction towards the South Pole.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the azimuth of South?",
    "options": [
      { "text": "180°.", "isCorrect": true },
      { "text": "90°.", "isCorrect": false },
      { "text": "0°.", "isCorrect": false },
      { "text": "270°.", "isCorrect": false }
    ]
  },
  {
    "question": "How can distance on a map be translated to distance on the ground?",
    "options": [
      { "text": "Using the map's scale.", "isCorrect": true },
      { "text": "By measuring the elevation change.", "isCorrect": false },
      { "text": "By finding the azimuth.", "isCorrect": false },
      { "text": "By calculating the back-azimuth.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the primary purpose of measuring on a map?",
    "options": [
      { "text": "To determine distance on the ground.", "isCorrect": true },
      { "text": "To find the azimuth of a location.", "isCorrect": false },
      { "text": "To calculate elevation.", "isCorrect": false },
      { "text": "To determine magnetic declination.", "isCorrect": false }
    ]
  },
  {
    "question": "What unit is azimuth typically expressed in?",
    "options": [
      { "text": "Degrees.", "isCorrect": true },
      { "text": "Meters.", "isCorrect": false },
      { "text": "Miles.", "isCorrect": false },
      { "text": "Feet.", "isCorrect": false }
    ]
  },
  {
    "question": "What does 'True North' point towards?",
    "options": [
      { "text": "The Geographic North Pole.", "isCorrect": true },
      { "text": "The North Magnetic Pole.", "isCorrect": false },
      { "text": "The Equator.", "isCorrect": false },
      { "text": "The South Pole.", "isCorrect": false }
    ]
  },
  {
    "question": "Which tool helps to find the azimuth in navigation?",
    "options": [
      { "text": "Compass.", "isCorrect": true },
      { "text": "Ruler.", "isCorrect": false },
      { "text": "Calipers.", "isCorrect": false },
      { "text": "Protractor.", "isCorrect": false }
    ]
  },
{
  "question": "What is the first step in the centerhold technique?",
  "options": [
    { "text": "Move the lens (rear sight) to the rearmost position.", "isCorrect": true },
    { "text": "Place your thumb through the thumb loop.", "isCorrect": false },
    { "text": "Align the sighting wire with the object.", "isCorrect": false },
    { "text": "Extend your index finger along the compass.", "isCorrect": false }
  ]
},
{
  "question": "Where should the compass be placed when using the centerhold technique?",
  "options": [
    { "text": "Between your chin and your belt.", "isCorrect": true },
    { "text": "Directly in front of your eyes.", "isCorrect": false },
    { "text": "At your side.", "isCorrect": false },
    { "text": "At arm's length.", "isCorrect": false }
  ]
},
{
  "question": "What should you do with your elbows when using the centerhold technique?",
  "options": [
    { "text": "Pull them firmly into your sides.", "isCorrect": true },
    { "text": "Extend them outward.", "isCorrect": false },
    { "text": "Hold them straight down.", "isCorrect": false },
    { "text": "Raise them above your head.", "isCorrect": false }
  ]
},
{
  "question": "How do you measure an azimuth using the centerhold technique?",
  "options": [
    { "text": "Point the compass cover directly at the object and read the azimuth beneath the fixed black index line.", "isCorrect": true },
    { "text": "Look through the rear-sight slot and align the hairline.", "isCorrect": false },
    { "text": "Hold the compass level and turn your body until the desired azimuth is aligned.", "isCorrect": false },
    { "text": "Turn the bezel ring to the correct azimuth.", "isCorrect": false }
  ]
},
{
  "question": "Which technique is faster and easier to use under all conditions?",
  "options": [
    { "text": "Centerhold technique.", "isCorrect": true },
    { "text": "Compass-to-cheek technique.", "isCorrect": false },
    { "text": "Sighting technique.", "isCorrect": false },
    { "text": "Rear-sight technique.", "isCorrect": false }
  ]
},
{
  "question": "What is the main purpose of the compass-to-cheek technique?",
  "options": [
    { "text": "To sight an object with precision.", "isCorrect": true },
    { "text": "To align the compass with the magnetic north.", "isCorrect": false },
    { "text": "To measure the distance to an object.", "isCorrect": false },
    { "text": "To hold the compass steady.", "isCorrect": false }
  ]
},
{
  "question": "How should the compass cover be positioned in the compass-to-cheek technique?",
  "options": [
    { "text": "Folded to a vertical position.", "isCorrect": true },
    { "text": "Fully open and flat.", "isCorrect": false },
    { "text": "Closed and held tightly.", "isCorrect": false },
    { "text": "Slightly open at a 45-degree angle.", "isCorrect": false }
  ]
},
{
  "question": "What should you align through the rear-sight slot in the compass-to-cheek technique?",
  "options": [
    { "text": "The front-sight hairline with the desired object.", "isCorrect": true },
    { "text": "The north-seeking arrow.", "isCorrect": false },
    { "text": "The compass base.", "isCorrect": false },
    { "text": "The bezel ring.", "isCorrect": false }
  ]
},
{
  "question": "In the compass-to-cheek technique, where do you read the azimuth?",
  "options": [
    { "text": "Through the eye lens.", "isCorrect": true },
    { "text": "Under the compass cover.", "isCorrect": false },
    { "text": "On the side of the compass.", "isCorrect": false },
    { "text": "On the bezel ring.", "isCorrect": false }
  ]
},
{
  "question": "When presetting the compass, which direction should the north-seeking arrow be aligned with?",
  "options": [
    { "text": "The luminous line.", "isCorrect": true },
    { "text": "The fixed black index line.", "isCorrect": false },
    { "text": "The bezel ring.", "isCorrect": false },
    { "text": "The front cover.", "isCorrect": false }
  ]
},
{
  "question": "How do you maintain the desired azimuth after presetting the compass?",
  "options": [
    { "text": "Turn your body until the north-seeking arrow is aligned with the luminous line.", "isCorrect": true },
    { "text": "Rotate the compass until the luminous line is aligned with the bezel ring.", "isCorrect": false },
    { "text": "Keep turning the compass until the azimuth falls under the sighting wire.", "isCorrect": false },
    { "text": "Move the lens (rear sight) forward.", "isCorrect": false }
  ]
},
{
  "question": "What technique is used to march on a magnetic azimuth?",
  "options": [
    { "text": "Centerhold technique.", "isCorrect": true },
    { "text": "Compass-to-cheek technique.", "isCorrect": false },
    { "text": "Back azimuth technique.", "isCorrect": false },
    { "text": "Direct azimuth technique.", "isCorrect": false }
  ]
},
{
  "question": "What angle should be set on the compass when marching on a magnetic azimuth in the provided example?",
  "options": [
    { "text": "320 degrees.", "isCorrect": true },
    { "text": "180 degrees.", "isCorrect": false },
    { "text": "270 degrees.", "isCorrect": false },
    { "text": "360 degrees.", "isCorrect": false }
  ]
},
{
  "question": "What must be done with the bezel ring after aligning the desired azimuth under the fixed black index line?",
  "options": [
    { "text": "Turn it until the luminous line aligns with the north-seeking arrow.", "isCorrect": true },
    { "text": "Rotate it until it clicks.", "isCorrect": false },
    { "text": "Keep it stationary and read the azimuth.", "isCorrect": false },
    { "text": "Move it back to the original position.", "isCorrect": false }
  ]
},
{
  "question": "What is the correct way to hold the compass when marching on a magnetic azimuth?",
  "options": [
    { "text": "In the palm of the hand.", "isCorrect": true },
    { "text": "At eye level.", "isCorrect": false },
    { "text": "Attached to the belt.", "isCorrect": false },
    { "text": "In a pocket.", "isCorrect": false }
  ]
},
{
  "question": "What is the purpose of aligning the compass's north-seeking arrow with the luminous line?",
  "options": [
    { "text": "To set the compass for marching.", "isCorrect": true },
    { "text": "To lock the azimuth in place.", "isCorrect": false },
    { "text": "To ensure the compass is level.", "isCorrect": false },
    { "text": "To measure the distance.", "isCorrect": false }
  ]
},
{
  "question": "Which method allows you to use the compass without putting down other gear?",
  "options": [
    { "text": "Centerhold technique.", "isCorrect": true },
    { "text": "Compass-to-cheek technique.", "isCorrect": false },
    { "text": "Direct azimuth technique.", "isCorrect": false },
    { "text": "Sighting technique.", "isCorrect": false }
  ]
},
{
  "question": "What feature of the compass is aligned with the fixed black index line to follow an azimuth?",
  "options": [
    { "text": "The front cover's sighting wire.", "isCorrect": true },
    { "text": "The north-seeking arrow.", "isCorrect": false },
    { "text": "The bezel ring.", "isCorrect": false },
    { "text": "The rear sight.", "isCorrect": false }
  ]
},
{
  "question": "What technique is best suited for sighting specific objects at a distance?",
  "options": [
    { "text": "Compass-to-cheek technique.", "isCorrect": true },
    { "text": "Centerhold technique.", "isCorrect": false },
    { "text": "Presetting technique.", "isCorrect": false },
    { "text": "Ground distance technique.", "isCorrect": false }
  ]
},
{
  "question": "What is the key advantage of the centerhold technique over the compass-to-cheek technique?",
  "options": [
    { "text": "It is more accurate for sighting.", "isCorrect": false },
    { "text": "It allows for easier and faster navigation.", "isCorrect": true },
    { "text": "It requires less adjustment of the compass.", "isCorrect": false },
    { "text": "It is better suited for stationary use.", "isCorrect": false }
  ]
},
  {
    "question": "What is magnetic declination?",
    "options": [
      { "text": "The angle difference between true north and magnetic north.", "isCorrect": true },
      { "text": "The distance between true north and magnetic north.", "isCorrect": false },
      { "text": "The time difference between true north and magnetic north.", "isCorrect": false },
      { "text": "The height difference between true north and magnetic north.", "isCorrect": false }
    ]
  },
  {
    "question": "Where can you find the magnetic declination information on a USGS map?",
    "options": [
      { "text": "At the bottom of the map.", "isCorrect": true },
      { "text": "At the top of the map.", "isCorrect": false },
      { "text": "On the back of the map.", "isCorrect": false },
      { "text": "In the middle of the map.", "isCorrect": false }
    ]
  },
  {
    "question": "What is represented by a star on a USGS map?",
    "options": [
      { "text": "True north.", "isCorrect": true },
      { "text": "Grid north.", "isCorrect": false },
      { "text": "Magnetic north.", "isCorrect": false },
      { "text": "The compass needle.", "isCorrect": false }
    ]
  },
  {
    "question": "What does a positive magnetic declination indicate?",
    "options": [
      { "text": "Magnetic north is east of true north.", "isCorrect": true },
      { "text": "Magnetic north is west of true north.", "isCorrect": false },
      { "text": "True north is east of magnetic north.", "isCorrect": false },
      { "text": "True north is west of magnetic north.", "isCorrect": false }
    ]
  },
  {
    "question": "What does a negative magnetic declination indicate?",
    "options": [
      { "text": "Magnetic north is west of true north.", "isCorrect": true },
      { "text": "Magnetic north is east of true north.", "isCorrect": false },
      { "text": "True north is west of magnetic north.", "isCorrect": false },
      { "text": "True north is east of magnetic north.", "isCorrect": false }
    ]
  },
  {
    "question": "Which step involves mentally adjusting for declination in Method #1?",
    "options": [
      { "text": "Subtract or add the declination amount to the map bearing.", "isCorrect": true },
      { "text": "Rotate the dial until the compass ring north agrees with map north.", "isCorrect": false },
      { "text": "Sight a landmark along the bearing.", "isCorrect": false },
      { "text": "Draw a line connecting your starting point and destination.", "isCorrect": false }
    ]
  },
  {
    "question": "In Method #2, what should you do after rotating the dial until compass ring north agrees with map north?",
    "options": [
      { "text": "Remove the compass from the map.", "isCorrect": true },
      { "text": "Draw a line on the map.", "isCorrect": false },
      { "text": "Sight a landmark along the bearing.", "isCorrect": false },
      { "text": "Turn your body to match the bearing.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the purpose of extending the line through the map border in Method #1?",
    "options": [
      { "text": "To ensure accurate alignment with the compass.", "isCorrect": true },
      { "text": "To mark the end of the map.", "isCorrect": false },
      { "text": "To identify the midpoint.", "isCorrect": false },
      { "text": "To create a visual reference.", "isCorrect": false }
    ]
  },
  {
    "question": "Why is it important to distance yourself from metal objects when using a compass?",
    "options": [
      { "text": "To avoid interference with the compass needle.", "isCorrect": true },
      { "text": "To ensure the map doesn't tear.", "isCorrect": false },
      { "text": "To improve visibility.", "isCorrect": false },
      { "text": "To prevent loss of declination data.", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do if your USGS map is more than 15 years old?",
    "options": [
      { "text": "Check the magnetic declination using a current source.", "isCorrect": true },
      { "text": "Replace the map with a new one.", "isCorrect": false },
      { "text": "Use the declination information on the map without adjustments.", "isCorrect": false },
      { "text": "Ignore declination altogether.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the first step in Method #2?",
    "options": [
      { "text": "Obtain the local magnetic declination.", "isCorrect": true },
      { "text": "Place the compass on the map.", "isCorrect": false },
      { "text": "Rotate the dial to agree with map north.", "isCorrect": false },
      { "text": "Sight a landmark.", "isCorrect": false }
    ]
  },
  {
    "question": "What do you adjust on an adjustable declination compass?",
    "options": [
      { "text": "The orienting arrow.", "isCorrect": true },
      { "text": "The compass needle.", "isCorrect": false },
      { "text": "The baseplate.", "isCorrect": false },
      { "text": "The direction of travel arrow.", "isCorrect": false }
    ]
  },
  {
    "question": "What does Method #1 suggest doing after drawing a line on the map?",
    "options": [
      { "text": "Place the compass on the map over the intersection of the map bearing and neat line.", "isCorrect": true },
      { "text": "Rotate the compass dial until the compass ring north agrees with map north.", "isCorrect": false },
      { "text": "Subtract the local declination from the map bearing.", "isCorrect": false },
      { "text": "Sight a landmark along the bearing.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the final step in Method #1?",
    "options": [
      { "text": "Sight a landmark along the bearing and proceed to it.", "isCorrect": true },
      { "text": "Subtract the local declination from the bearing.", "isCorrect": false },
      { "text": "Rotate the dial until compass ring north agrees with map north.", "isCorrect": false },
      { "text": "Draw a line on the map.", "isCorrect": false }
    ]
  },
  {
    "question": "What is the agonic line?",
    "options": [
      { "text": "A line of zero magnetic declination.", "isCorrect": true },
      { "text": "A line indicating positive magnetic declination.", "isCorrect": false },
      { "text": "A line indicating negative magnetic declination.", "isCorrect": false },
      { "text": "A line where true north and grid north align.", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do if the local magnetic declination is positive in Method #2?",
    "options": [
      { "text": "Subtract the declination amount (turn the dial clockwise).", "isCorrect": true },
      { "text": "Add the declination amount (turn the dial counter-clockwise).", "isCorrect": false },
      { "text": "Leave the compass as it is.", "isCorrect": false },
      { "text": "Rotate the dial to agree with map north.", "isCorrect": false }
    ]
  },
  {
    "question": "What should you do after rotating the body and compass in Method #2?",
    "options": [
      { "text": "Sight a landmark along the direction of travel and proceed to it.", "isCorrect": true },
      { "text": "Subtract the declination amount from the bearing.", "isCorrect": false },
      { "text": "Draw a line on the map.", "isCorrect": false },
      { "text": "Obtain the local magnetic declination.", "isCorrect": false }
    ]
  },
  {
    "question": "What happens to the compass needle in Method #1 when you turn your body and the compass?",
    "options": [
      { "text": "The red magnetic needle overlays the orienting arrow.", "isCorrect": true },
      { "text": "The compass needle points to grid north.", "isCorrect": false },
      { "text": "The compass needle moves away from the orienting arrow.", "isCorrect": false },
      { "text": "The compass needle aligns with the baseplate.", "isCorrect": false }
    ]
  },
{
    "question": "What is the first step in Method #1 for correcting declination?",
    "options": [
        { "text": "Obtain the local magnetic declination for the area.", "isCorrect": true },
        { "text": "Draw a line on the map.", "isCorrect": false },
        { "text": "Rotate the dial until compass ring north agrees with map north.", "isCorrect": false },
        { "text": "Turn the compass dial until the figure lines up with the index line.", "isCorrect": false }
    ]
},
{
    "question": "What does a positive magnetic declination indicate?",
    "options": [
        { "text": "Magnetic north is east of true north.", "isCorrect": true },
        { "text": "Magnetic north is west of true north.", "isCorrect": false },
        { "text": "The compass has been adjusted for declination.", "isCorrect": false },
        { "text": "The declination date appears in the diagram.", "isCorrect": false }
    ]
},
{
    "question": "What should you do after rotating the dial in Method #1?",
    "options": [
        { "text": "Read your map bearing from the compass dial.", "isCorrect": true },
        { "text": "Subtract the declination amount from the bearing.", "isCorrect": false },
        { "text": "Rotate your body and the compass.", "isCorrect": false },
        { "text": "Sight a landmark along the bearing.", "isCorrect": false }
    ]
},
{
    "question": "In Method #2, when should you subtract the declination amount?",
    "options": [
        { "text": "When the local declination is positive.", "isCorrect": true },
        { "text": "When the local declination is negative.", "isCorrect": false },
        { "text": "After rotating the dial to agree with map north.", "isCorrect": false },
        { "text": "Before drawing the line on the map.", "isCorrect": false }
    ]
},
{
    "question": "What does the agonic line represent?",
    "options": [
        { "text": "A line of zero magnetic declination.", "isCorrect": true },
        { "text": "A path of constant magnetic declination.", "isCorrect": false },
        { "text": "The difference between grid north and magnetic north.", "isCorrect": false },
        { "text": "The magnetic contour line.", "isCorrect": false }
    ]
},
{
    "question": "What is the purpose of the orienting arrow on a compass?",
    "options": [
        { "text": "To align with magnetic north.", "isCorrect": true },
        { "text": "To mark the starting point on a map.", "isCorrect": false },
        { "text": "To indicate the direction of travel.", "isCorrect": false },
        { "text": "To measure distance on a map.", "isCorrect": false }
    ]
},
{
    "question": "What does the isogonic line trace?",
    "options": [
        { "text": "A path of constant magnetic declination.", "isCorrect": true },
        { "text": "The difference between true north and magnetic north.", "isCorrect": false },
        { "text": "The starting point on a map.", "isCorrect": false },
        { "text": "The compass's north indicator.", "isCorrect": false }
    ]
},
{
    "question": "How do you align the compass when using Method #1?",
    "options": [
        { "text": "Rotate your body and the compass until the red magnetic needle overlays the orienting arrow.", "isCorrect": true },
        { "text": "Rotate the dial until the orienting arrow lines up with the index line.", "isCorrect": false },
        { "text": "Subtract or add the declination amount to the bearing.", "isCorrect": false },
        { "text": "Extend the line all the way through the map border.", "isCorrect": false }
    ]
},
{
    "question": "In Method #2, when do you turn the dial to agree with map north?",
    "options": [
        { "text": "Before removing the compass from the map.", "isCorrect": true },
        { "text": "After sighting a landmark.", "isCorrect": false },
        { "text": "Before drawing a line on the map.", "isCorrect": false },
        { "text": "After rotating your body and the compass.", "isCorrect": false }
    ]
},
{
    "question": "What must be done mentally in Method #1?",
    "options": [
        { "text": "Add or subtract the declination amount from the bearing.", "isCorrect": true },
        { "text": "Rotate the compass dial.", "isCorrect": false },
        { "text": "Rotate your body and the compass.", "isCorrect": false },
        { "text": "Extend the line through the map border.", "isCorrect": false }
    ]
},
{
    "question": "What is the second step in Method #1?",
    "options": [
        { "text": "Draw a line on the map that connects your starting point with the destination.", "isCorrect": true },
        { "text": "Obtain the local magnetic declination.", "isCorrect": false },
        { "text": "Turn the compass dial until the figure lines up with the index line.", "isCorrect": false },
        { "text": "Sight a landmark along the bearing.", "isCorrect": false }
    ]
},
{
    "question": "What does an adjustable declination compass allow you to do?",
    "options": [
        { "text": "Rotate the orienting arrow independently of the compass dial.", "isCorrect": true },
        { "text": "Measure distance on a map.", "isCorrect": false },
        { "text": "Align with grid north.", "isCorrect": false },
        { "text": "Ignore the local magnetic declination.", "isCorrect": false }
    ]
},
{
    "question": "What should you do before placing the compass on the map in both methods?",
    "options": [
        { "text": "Distance yourself from any nearby metal.", "isCorrect": true },
        { "text": "Rotate the dial until it agrees with map north.", "isCorrect": false },
        { "text": "Subtract or add the declination amount to the bearing.", "isCorrect": false },
        { "text": "Extend the line all the way through the map border.", "isCorrect": false }
    ]
},
{
    "question": "When using an adjustable declination compass, what should you ensure in Method #1?",
    "options": [
        { "text": "Compass ring north agrees with map north.", "isCorrect": true },
        { "text": "The orienting arrow lines up with the index line.", "isCorrect": false },
        { "text": "Add or subtract the declination amount.", "isCorrect": false },
        { "text": "Rotate your body and the compass.", "isCorrect": false }
    ]
},
{
    "question": "How does declination vary across the United States?",
    "options": [
        { "text": "Considerably.", "isCorrect": true },
        { "text": "Slightly.", "isCorrect": false },
        { "text": "It remains the same.", "isCorrect": false },
        { "text": "It does not vary.", "isCorrect": false }
    ]
},
{
    "question": "What is the first step to orient yourself and a map by compass?",
    "options": [
        { "text": "Place the compass on the map so the baseplate parallels the north-to-south map neat line.", "isCorrect": true },
        { "text": "Rotate the dial until the compass ring North agrees with map North.", "isCorrect": false },
        { "text": "Rotate the map and compass until the red magnetic needle overlays the orienting arrow.", "isCorrect": false },
        { "text": "Add or subtract the local magnetic declination.", "isCorrect": false }
    ]
},
{
    "question": "When using an adjustable declination compass already calibrated for local declination, what should you do?",
    "options": [
        { "text": "Ensure compass ring North agrees with map North.", "isCorrect": true },
        { "text": "Subtract the declination amount from the bearing.", "isCorrect": false },
        { "text": "Rotate the orienting arrow until it matches map North.", "isCorrect": false },
        { "text": "Add the declination amount to the bearing.", "isCorrect": false }
    ]
},
{
    "question": "What should you make sure of before rotating the map and compass to align them with true north?",
    "options": [
        { "text": "There is no interference from metal objects.", "isCorrect": true },
        { "text": "The orienting arrow matches map North.", "isCorrect": false },
        { "text": "The compass is calibrated for local declination.", "isCorrect": false },
        { "text": "The red magnetic needle overlays the orienting arrow.", "isCorrect": false }
    ]
},
{
    "question": "What is resection used for?",
    "options": [
        { "text": "Determining your current position using a compass and map.", "isCorrect": true },
        { "text": "Finding the declination value for your location.", "isCorrect": false },
        { "text": "Calculating the distance between two landmarks.", "isCorrect": false },
        { "text": "Orienting a map to true north.", "isCorrect": false }
    ]
},
{
    "question": "Which landscape features can be used in resection?",
    "options": [
        { "text": "Mountain peaks, intersections, bridges, or utility poles.", "isCorrect": true },
        { "text": "Rivers, valleys, or open fields.", "isCorrect": false },
        { "text": "Street signs and buildings.", "isCorrect": false },
        { "text": "Rock formations and tree lines.", "isCorrect": false }
    ]
},
{
    "question": "What is the significance of a 90° offset between two landmarks in resection?",
    "options": [
        { "text": "It increases the accuracy of determining your position.", "isCorrect": true },
        { "text": "It minimizes the effect of declination on your readings.", "isCorrect": false },
        { "text": "It helps in plotting the back azimuth accurately.", "isCorrect": false },
        { "text": "It ensures that both landmarks are equally prominent.", "isCorrect": false }
    ]
},
{
    "question": "After shooting an azimuth to the first landmark in resection, what is the next step?",
    "options": [
        { "text": "Calculate the back azimuth and plot a line on your map.", "isCorrect": true },
        { "text": "Shoot the azimuth of the second landmark.", "isCorrect": false },
        { "text": "Correct for declination before plotting the line.", "isCorrect": false },
        { "text": "Rotate your compass until the red magnetic needle overlays the orienting arrow.", "isCorrect": false }
    ]
},
{
    "question": "What should you do after plotting the back azimuth from the first landmark?",
    "options": [
        { "text": "Shoot the azimuth of the second landmark.", "isCorrect": true },
        { "text": "Check for interference from metal objects.", "isCorrect": false },
        { "text": "Rotate the map and compass to align with true north.", "isCorrect": false },
        { "text": "Subtract the local magnetic declination from the azimuth.", "isCorrect": false }
    ]
},
{
    "question": "What will happen if your readings and plotting are accurate in resection?",
    "options": [
        { "text": "Your position will be close to where the two lines intersect.", "isCorrect": true },
        { "text": "Your position will be exactly where the two lines intersect.", "isCorrect": false },
        { "text": "Your position will be somewhere along the first plotted line.", "isCorrect": false },
        { "text": "Your position will be along the second plotted line.", "isCorrect": false }
    ]
},
{
    "question": "When orienting a map and compass, what must you ensure about the red magnetic needle?",
    "options": [
        { "text": "It overlays the orienting arrow.", "isCorrect": true },
        { "text": "It points towards map North.", "isCorrect": false },
        { "text": "It aligns with the compass baseplate.", "isCorrect": false },
        { "text": "It overlays the compass ring North.", "isCorrect": false }
    ]
},
{
    "question": "What do you need to adjust for when using a compass in resection?",
    "options": [
        { "text": "Local magnetic declination.", "isCorrect": true },
        { "text": "The distance between landmarks.", "isCorrect": false },
        { "text": "The angle between the two landmarks.", "isCorrect": false },
        { "text": "The prominence of the landscape features.", "isCorrect": false }
    ]
},
{
    "question": "What is the purpose of rotating the dial on a compass until compass ring North agrees with map North?",
    "options": [
        { "text": "To align the map and compass with true north.", "isCorrect": true },
        { "text": "To calculate the back azimuth.", "isCorrect": false },
        { "text": "To adjust for local magnetic declination.", "isCorrect": false },
        { "text": "To align the orienting arrow with map North.", "isCorrect": false }
    ]
},
{
    "question": "Why is it important to avoid interference from metal when orienting a map and compass?",
    "options": [
        { "text": "It can affect the accuracy of the compass needle.", "isCorrect": true },
        { "text": "It can change the declination value.", "isCorrect": false },
        { "text": "It can distort the map lines.", "isCorrect": false },
        { "text": "It can interfere with the orienting arrow.", "isCorrect": false }
    ]
},
{
    "question": "How do you know your map and compass are oriented to true north?",
    "options": [
        { "text": "The red magnetic needle overlays the orienting arrow.", "isCorrect": true },
        { "text": "Compass ring North agrees with map North.", "isCorrect": false },
        { "text": "The compass baseplate is parallel to the map's north-to-south neat line.", "isCorrect": false },
        { "text": "You have adjusted for local magnetic declination.", "isCorrect": false }
    ]
},
{
    "question": "What does it mean to 'shoot an azimuth' in resection?",
    "options": [
        { "text": "Take a compass reading to a specific landmark.", "isCorrect": true },
        { "text": "Adjust for magnetic declination.", "isCorrect": false },
        { "text": "Calculate the distance between two points.", "isCorrect": false },
        { "text": "Align the compass with map North.", "isCorrect": false }
    ]
},
{
    "question": "How do you derive your location using resection?",
    "options": [
        { "text": "By finding where the back azimuth lines from two landmarks intersect.", "isCorrect": true },
        { "text": "By aligning your compass with map North.", "isCorrect": false },
        { "text": "By adjusting for local magnetic declination.", "isCorrect": false },
        { "text": "By rotating the map until it aligns with true north.", "isCorrect": false }
    ]
},
{
    "question": "What does 'back azimuth' refer to in resection?",
    "options": [
        { "text": "The direction opposite to the azimuth of a landmark.", "isCorrect": true },
        { "text": "The declination-corrected azimuth.", "isCorrect": false },
        { "text": "The azimuth of the second landmark.", "isCorrect": false },
        { "text": "The line plotted from the first landmark.", "isCorrect": false }
    ]
},
    {
        "question": "What is the recommended way to mark control points on a one-mile cross-country course?",
        "options": [
            { "text": "Using tent stakes", "isCorrect": true },
            { "text": "Using flags", "isCorrect": false },
            { "text": "Using cones", "isCorrect": false },
            { "text": "Using wooden posts", "isCorrect": false }
        ]
    },
    {
        "question": "Why should you avoid carrying anything magnetic when setting up a cross-country course?",
        "options": [
            { "text": "It can cause interference with compass readings", "isCorrect": true },
            { "text": "It will make it harder to mark control points", "isCorrect": false },
            { "text": "It will slow down the setup process", "isCorrect": false },
            { "text": "It will cause the tent stakes to shift", "isCorrect": false }
        ]
    },
    {
        "question": "What should you do to ensure your memory does not fail you when setting up the course?",
        "options": [
            { "text": "Write down the azimuths", "isCorrect": true },
            { "text": "Use a GPS device", "isCorrect": false },
            { "text": "Mark the control points with flags", "isCorrect": false },
            { "text": "Take pictures of the control points", "isCorrect": false }
        ]
    },
    {
        "question": "How can you estimate the distance when marking control points?",
        "options": [
            { "text": "Count your paces and estimate based on them", "isCorrect": true },
            { "text": "Use a tape measure", "isCorrect": false },
            { "text": "Guess the distance visually", "isCorrect": false },
            { "text": "Use a GPS device to measure the distance", "isCorrect": false }
        ]
    },
    {
        "question": "What should you do if you want to estimate the distance by counting paces?",
        "options": [
            { "text": "Count by fives every time your right foot touches the ground", "isCorrect": true },
            { "text": "Count every single step you take", "isCorrect": false },
            { "text": "Walk in a straight line and estimate the distance visually", "isCorrect": false },
            { "text": "Use a measuring wheel", "isCorrect": false }
        ]
    },
    {
        "question": "What is the approximate distance covered by two steps for most people?",
        "options": [
            { "text": "Five feet", "isCorrect": true },
            { "text": "Ten feet", "isCorrect": false },
            { "text": "Three feet", "isCorrect": false },
            { "text": "Seven feet", "isCorrect": false }
        ]
    },
    {
        "question": "What is the first step to take after reaching the initial control point?",
        "options": [
            { "text": "Shoot the second azimuth", "isCorrect": true },
            { "text": "Collect the tent stake", "isCorrect": false },
            { "text": "Estimate the distance to the next point", "isCorrect": false },
            { "text": "Mark the control point on the map", "isCorrect": false }
        ]
    },
    {
        "question": "What should the Pathfinder look for after walking a particular bearing for an approximate distance?",
        "options": [
            { "text": "The tent peg", "isCorrect": true },
            { "text": "A flag", "isCorrect": false },
            { "text": "A wooden post", "isCorrect": false },
            { "text": "A boundary marker", "isCorrect": false }
        ]
    },
    {
        "question": "What should be done with the tent pegs after reaching the final control point?",
        "options": [
            { "text": "Collect them on the way back", "isCorrect": true },
            { "text": "Leave them for the next group", "isCorrect": false },
            { "text": "Mark their locations on the map", "isCorrect": false },
            { "text": "Use them to set up another course", "isCorrect": false }
        ]
    },
    {
        "question": "What should be avoided during the setup of a cross-country course?",
        "options": [
            { "text": "Carrying magnetic items", "isCorrect": true },
            { "text": "Estimating distances", "isCorrect": false },
            { "text": "Using tent stakes", "isCorrect": false },
            { "text": "Shooting azimuths", "isCorrect": false }
        ]
    }
];