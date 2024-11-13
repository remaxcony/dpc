var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8784548178284446,
        "pitch": 0.08618620968928603,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.3389989758348282,
          "pitch": -0.03983829383794735,
          "rotation": 0,
          "target": "2-pasillo-1"
        },
        {
          "yaw": 0.7000342515538094,
          "pitch": 0.026318403235283228,
          "rotation": 0.7853981633974483,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "SALON",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.661418041282353,
        "pitch": -0.028692092766476662,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 0.3936302937213654,
          "pitch": -0.02087055469191057,
          "rotation": 1.5707963267948966,
          "target": "2-pasillo-1"
        },
        {
          "yaw": -0.5552969667446828,
          "pitch": -0.025902275971105837,
          "rotation": 10.995574287564278,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pasillo-1",
      "name": "PASILLO 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.651463237610347,
        "pitch": 0.006519245112771799,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.4368609306015951,
          "pitch": -0.052780683725716315,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": -1.571493291676628,
          "pitch": 0.030785347378458283,
          "rotation": 4.71238898038469,
          "target": "1-salon"
        },
        {
          "yaw": -2.772717581024981,
          "pitch": 0.028467837169666055,
          "rotation": 0.7853981633974483,
          "target": "5-bao"
        },
        {
          "yaw": 2.9392107951124373,
          "pitch": 0.05447205972349245,
          "rotation": 4.71238898038469,
          "target": "4-cocina"
        },
        {
          "yaw": -2.9095843411194675,
          "pitch": 0.02834516478596072,
          "rotation": 0,
          "target": "3-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pasillo-2",
      "name": "PASILLO 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8789481660470138,
        "pitch": -0.0904530953358158,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.4769716421262515,
          "pitch": -0.008750378483199484,
          "rotation": 0,
          "target": "8-hab-3"
        },
        {
          "yaw": -0.9465300487282562,
          "pitch": -0.03910381024934928,
          "rotation": 0,
          "target": "7-hab-2"
        },
        {
          "yaw": -0.03236879831075612,
          "pitch": 0.05058415799136462,
          "rotation": 0,
          "target": "6-hab-1"
        },
        {
          "yaw": 1.6261895421866175,
          "pitch": 0.03218885803493876,
          "rotation": 0,
          "target": "5-bao"
        },
        {
          "yaw": 3.0494741171403916,
          "pitch": -0.012453741304781829,
          "rotation": 0,
          "target": "2-pasillo-1"
        },
        {
          "yaw": -2.9975309870701565,
          "pitch": 0.0935064722575838,
          "rotation": 0.7853981633974483,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "COCINA",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.607702906795623,
        "pitch": 0.024624631339790426,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": -1.5346356503172505,
          "pitch": 0.02306326192564967,
          "rotation": 1.5707963267948966,
          "target": "2-pasillo-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bao",
      "name": "BAÑO",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16502046719092966,
        "pitch": -0.029901338055474014,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.0742213505849856,
          "pitch": 0.053604705045565026,
          "rotation": 4.71238898038469,
          "target": "2-pasillo-1"
        },
        {
          "yaw": 2.68833818571996,
          "pitch": 0.03331105640607568,
          "rotation": 0,
          "target": "8-hab-3"
        },
        {
          "yaw": 2.891780579790483,
          "pitch": 0.05497453804647989,
          "rotation": 0.7853981633974483,
          "target": "7-hab-2"
        },
        {
          "yaw": -3.1256548556757977,
          "pitch": 0.055864903677971256,
          "rotation": 1.5707963267948966,
          "target": "6-hab-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-hab-1",
      "name": "HAB 1",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.01240755392412396,
        "pitch": -0.021106826862670403,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.653998861153852,
          "pitch": -0.013079061403100667,
          "rotation": 0,
          "target": "2-pasillo-1"
        },
        {
          "yaw": 2.8096532205464335,
          "pitch": 0.04115675665321916,
          "rotation": 1.5707963267948966,
          "target": "4-cocina"
        },
        {
          "yaw": -3.1375025978493536,
          "pitch": 0.0980699388426487,
          "rotation": 0,
          "target": "3-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-hab-2",
      "name": "HAB 2",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.28289222947016057,
        "pitch": -0.04045475148681277,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.470652861159799,
          "pitch": 0.2034755452157455,
          "rotation": 0,
          "target": "3-pasillo-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hab-3",
      "name": "HAB 3",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.380911905470807,
        "pitch": -0.05980267611095158,
        "fov": 1.2910342431011943
      },
      "linkHotspots": [
        {
          "yaw": 2.975463156526253,
          "pitch": 0.011783999111202093,
          "rotation": 0,
          "target": "3-pasillo-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
