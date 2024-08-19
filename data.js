var APP_DATA = {
  "scenes": [
    {
      "id": "0-diablo-fanart-360",
      "name": "Diablo fanart 360",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.441718017918584,
          "pitch": 0.08035159661012337,
          "rotation": 6.283185307179586,
          "target": "1-taidenayttely-testi-jpg"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-taidenayttely-testi-jpg",
      "name": "Taidenäyttely testi jpg",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.002921196300183837,
          "pitch": 0,
          "rotation": 0,
          "target": "0-diablo-fanart-360"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
