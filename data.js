var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.082839429539945,
        "pitch": -0.33301137744973097,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -2.808089601047616,
          "pitch": -0.018388571668921827,
          "rotation": 6.283185307179586,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2528037841523343,
          "pitch": -0.03434655339284021,
          "title": "Yong Siew Toh Conservatory of Music",
          "text": "Welcome to&nbsp;Yong Siew Toh Conservatory of Music!"
        },
        {
          "yaw": 3.0895552233614936,
          "pitch": -0.32978822729517354,
          "title": "The Building",
          "text": "The building utilizes the brightness of the tropical environment through the use of glass panels which allow natural light into as many spaces as possible. The glass walls are supported by paired bow trusses, evocative of the strings on a violin or cello.&nbsp;"
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.3973979697038139,
        "pitch": -0.38413770477422204,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.21790323039434156,
          "pitch": 0.009978864797020037,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        },
        {
          "yaw": -2.953076906510926,
          "pitch": 0.18199570980318214,
          "rotation": 0.7853981633974483,
          "target": "2-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6712029001917887,
          "pitch": -0.2985135748048986,
          "title": "Concert Hall Foyer",
          "text": "The Foyer is an elegant space with high ceilings and a pleasing view of the Alice Lee Plaza. The space is suitable for both informal (standing) and formal (sit-down) receptions."
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.1973291739515037,
        "pitch": 0.11414398331042364,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -0.3619707526592162,
          "pitch": 0.11379524817206388,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7953615910501046,
          "pitch": -0.1408439110528228,
          "title": "Conservatory Lounge",
          "text": "The Conservatory Lounge is a comfortable space that invites visitors to sit down, relax and take in their surroundings. The Lounge is suitable for VIP cocktail receptions of not more than 100 persons."
        }
      ]
    }
  ],
  "name": "Yong Siew Toh Conservatory of Music",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
