$( document ).ready(function() {
  'use strict';
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  const moveToTop = () => {
    $("html, body").animate ({scrollTop: 0});
    history.replaceState(null, null, " ");
  }
  moveToTop();
  let years = [
    "Older",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ],
  models = [
    {
      name: 'Abarth',
      models: [
        '595',
      ]
    },
    {
      name: 'Alfa Romeo',
      models: [
        '4C',
        'Brera',
        'Giulia',
        'Giulietta',
        'MiTo',
        'Stelvio'
      ]
    },
    {
      name: 'Aston Martin',
      models: [
        "Cygnet",
        "DB11",
        "DB11",
        "DB9",
        "DB9",
        "DBS",
        "ONE-77",
        "Rapide",
        "Vanquish",
        "V12 Vantage",
        "V8 Vantage",
        "Virage",
      ]
    },
    {
      name: 'Audi',
      models: [
        "A1",
        "A3",
        "RS3",
        "A4",
        "S4",
        "A5",
        "RS5",
        "S5",
        "A6",
        "A7",
        "A8",
        "e-tron",
        "Q2",
        "Q3",
        "Q5",
        "Q7",
        "Q8",
        "R8",
        "RSQ3",
        "S3",
        "RS4",
        "RS6",
        "S6",
        "RS7",
        "S7",
        "S8",
        "SQ5",
        "RSQ8",
        "SQ8",
        "TT",
        "TT RS",
        "TTS",
      ]
    },
    {
      name: 'BAIC',
      models: ['BJ40']
    },
    {
      name: 'Bentley',
      models: [
        "Arnage",
        "Bentayga",
        "Brooklands",
        "Continental",
        "Flying Spur",
        "Mulsanne",
      ]
    },
    {
      name: 'BMW',
      models: [
        "116",
        "118",
        "120",
        "125",
        "128",
        "135",
        "M135",
        "218",
        "220",
        "225",
        "228",
        "230",
        "M235",
        "M240",
        "316",
        "318",
        "320",
        "323",
        "325",
        "328",
        "330",
        "335",
        "340",
        "Alpina B3 S",
        "Alpina D3",
        "420",
        "428",
        "430",
        "435",
        "440",
        "Alpina B4",
        "Alpina B4 S",
        "Alpina D4",
        "520",
        "523",
        "525",
        "528",
        "530",
        "535",
        "540",
        "545",
        "550",
        "Alpina B5",
        "Alpina D5 S",
        "630",
        "635",
        "640",
        "645",
        "650",
        "Alpina B6",
        "730",
        "735",
        "740",
        "745",
        "750",
        "760",
        "Alpina B7",
        "840",
        "850",
        "M850",
        "i8",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "X1",
        "X2",
        "Alpina XD3",
        "X3",
        "X4",
        "X5",
        "X5 M",
        "X6",
        "X6 M",
        "X7",
        "Z4",
      ]
    },
    {
      name: 'Borgward',
      models: [
        'BX5',
        'BX7'
      ]
    },
    {
      name: 'Bugatti',
      models: [
        'Chiron',
        'Veyron'
      ]
    },
    {
      name: 'Buick',
      models: [
        'Riviera'
      ]
    },
    {
      name: 'BYD',
      models: []
    },
    {
      name: 'Cadillac',
      models: [
        "ATS",
        "CT4",
        "CT5",
        "CT6",
        "CTS",
        "DeVille",
        "Escalade",
        "SRX",
        "STS",
        "XT4",
        "XT5",
        "XT6",
        "XTS",
      ]
    },
    {
      name: 'Changan',
      models: [
        "Alsvin",
        "CS35",
        "CS75",
        "CS85",
        "CS95",
        "Eado",
      ]
    },
    {
      name: 'Chery',
      models: [
        "Arrizo3",
        "Arrizo5",
        "Arrizo7",
        "E5",
        "E8",
        "Tiggo3",
        "Tiggo5",
        "Tiggo7",
      ]
    },
    {
      name: 'Chevrolet',
      models: [
        "Avalanche",
        "Aveo",
        "Blazer",
        "Bolt EV",
        "Camaro",
        "Caprice",
        "Captiva",
        "Corvette",
        "Cruze",
        "Epica",
        "Equinox",
        "Express",
        "Impala",
        "Lumina",
        "Malibu",
        "Optra",
        "Silverado",
        "Sonic",
        "Spark",
        "Suburban",
        "Tahoe",
        "Trailblazer",
        "Traverse",
        "Trax",
        "Uplander",
      ]
    },
    {
      name: 'Chrysler',
      models: [
        "200",
        "300C",
        "300S",
        "300 SRT",
        "Grand Voyager",
        "Pacifica",
        "PT Cruiser"
      ]
    },
    {
      name: 'Citroen',
      models: [
        "C-Elysee",
        "C3",
        "C4",
        "C5",
      ]
    },
    {
      name: 'CMC',
      models: []
    },
    {
      name: 'Daewoo',
      models: []
    },
    {
      name: 'Daihatsu',
      models: [
        "Sirion",
        "Terios",
      ]
    },
    {
      name: 'Dodge',
      models: [
        "Avenger",
        "Caliber",
        "Caravan",
        "Challenger",
        "Charger", 
        "Dart",
        "Durango",
        "Journey",
        "Magnum",
        "Neon",
        "Nitro",
        "RAM", 
        "Viper",
      ]
    },
    {
      name: 'Eagle',
      models: ['Wrangler']
    },
    {
      name: 'FAW-Bestune',
      models: []
    },
    {
      name: 'Ferrari',
      models: [
        "308 GTS",
        "360",
        "458",
        "488",
        "550",
        "612",
        "812 GTS",
        "California",
        "F12",
        "F430",
        "F599",
        "F8 Tributo",
        "FF",
        "GTC4Lusso",
        "LaFerrari",
        "Portofino",
        "Roma",
      ]
    },
    {
      name: 'FIAT',
      models: [
        "124 Spider",
        "500",
        "500C",
        "500L",
        "Ducato",
        "Linea",
      ]
    },
    {
      name: 'Fisker',
      models: ['Karma']
    },
    {
      name: 'Ford',
      models: [
        "Bronco",
        "Crown Victoria",
        "EcoSport",
        "Edge",
        "Escape",
        "Escort",
        "Expedition",
        "Explorer",
        "F150",
        "F250",
        "Fiesta",
        "Figo",
        "Five Hundred",
        "Flex",
        "Focus",
        "Fusion",
        "Model A",
        "Mondeo",
        "Mustang",
        "Ranger",
        "Taurus",
        "Transit",
      ]
    },
    {
      name: 'GAC',
      models: [
        'GS5',
        'GS7',
        'GS8'
      ]
    },
    {
      name: 'Geely',
      models: [
        "Emgrand 7",
        "Emgrand 7 (RV)",
        "Emgrand 8",
        "Emgrand GT",
        "Emgrand X7",
        "GC6",
        "GS Sport",
        "GX2",
      ]
    },
    {
      name: 'Genesis',
      models: [
        "G70",
        "G80",
        "G90",
        "GV70",
        "GV80",
        "Genesis",
      ]
    },
    {
      name: 'GMC',
      models: [
        "Acadia",
        "Envoy",
        "Savanna",
        "Sierra",
        "Terrain",
        "Yukon",
      ]
    },
    {
      name: 'Great Wall',
      models: ['Wingle 5']
    },
    {
      name: 'Haval',
      models: [
        'H2',
        'H6'
      ]
    },
    {
      name: 'Honda',
      models: [
        "Accord",
        "Accord Crosstour",
        "City",
        "Civic",
        "CR-V",
        "HR-V",
        "Jazz",
        "MR-V",
        "Odyssey",
        "Odyssey J",
        "Pilot",
        "S2000", 
      ]
    },
    {
      name: 'Hongqi',
      models: ['HS5']
    },
    {
      name: 'HUMMER',
      models: [
        'H1',
        'H2',
        'H3'
      ]
    },
    {
      name: 'Hyundai',
      models: [
        "Accent",
        "Azera",
        "Centennial",
        "Creta",
        "Elantra",
        "Equus",
        "Genesis",
        "Grand Santa Fe",
        "Grand Santa Fe",
        "Grandeur",
        "H-1",
        "i10",
        "i20",
        "i30",
        "i40",
        "Ioniq",
        "Kona",
        "Palisade",
        "Santa Fe",
        "Sonata",
        "Trajet",
        "Tucson",
        "Veloster",
        "Venue",
        "Veracruz",
      ]
    },
    {
      name: 'Infiniti',
      models: [
        "EX35",
        "EX37",
        "FX35",
        "FX37",
        "FX50",
        "G25",
        "G35",
        "G37",
        "JX35",
        "M37",
        "M45",
        "M50",
        "M56",
        "Q30",
        "Q50",
        "Q60",
        "Q70",
        "QX30",
        "QX50",
        "QX56",
        "QX60",
        "QX70",
        "QX80",
      ]
    },
    {
      name: 'Isuzu',
      models: [
        'D-Max',
        'MU-X"'
      ]
    },
    {
      name: 'JAC',
      models: [
        "J4",
        "J5",
        "S3",
        "S7",
      ]
    },
    {
      name: 'Jaguar',
      models: [
        "E-Pace",
        "E-Type",
        "F-Pace",
        "F-Type",
        "I-Pace",
        "S-Type",
        "X-Type",
        "XE",
        "XF",
        "XFR-S",
        "XJ",
        "XJ6",
        "XK",
        "XKR",
      ]
    },
    {
      name: 'Jeep',
      models: [
        "Cherokee",
        "Commander",
        "Compass",
        "Gladiator",
        "Grand Cherokee",
        "Patriot",
        "Renegade",
        "Wrangler",
      ]
    },
    {
      name: 'Jetour',
      models: [
        'X70',
        'X90'
      ]
    },
    {
      name: 'Kama',
      models: [
        'Karma',
        'Tuta'
      ]
    },
    {
      name: 'Kia',
      models: [
        "Cadenza",
        "Carens",
        "Cerato",
        "Cerato Koup",
        "Cerato Koup",
        "Forte",
        "Grand Carnival",
        "K5",
        "K900",
        "Mohave",
        "Opirus",
        "Optima",
        "Pegas",
        "Picanto",
        "Quoris",
        "Rio",
        "Sedona",
        "Seltos",
        "Sorento",
        "Soul",
        "Sportage",
        "Stinger",
        "Telluride",
      ]
    },
    {
      name: 'Lada',
      models: [
        'Niva'
      ]
    },
    {
      name: 'Lamborghini',
      models: [
        "Aventador",
        "Gallardo",
        "Huracan",
        "Urus",
      ]
    },
    {
      name: 'Land Rover',
      models: [
        "Defender",
        "Discovery",
        "Discovery Sport",
        "LR2",
        "LR3",
        "LR4",
      ]
    },
    {
      name: 'Lexus',
      models: [
        "CT200h",
        "CT250",
        "ES250",
        "ES300",
        "ES300h",
        "ES330",
        "ES350",
        "GS200",
        "GS250",
        "GS300",
        "GS350",
        "GS430",
        "GS450",
        "GS450h",
        "GS460",
        "GSF",
        "GX460",
        "IS-C",
        "IS-F",
        "IS200",
        "IS250",
        "IS300",
        "IS350",
        "LC500",
        "LFA",
        "LS350",
        "LS400",
        "LS430",
        "LS460",
        "LS500",
        "LS500h",
        "LS600",
        "LX470",
        "LX570",
        "LX600",
        "NX200",
        "NX300",
        "RC200",
        "RC350",
        "RCF",
        "RX300",
        "RX350",
        "RX450h",
        "SC400",
        "UX200",
      ]
    },
    {
      name: 'Lincoln',
      models: [
        "Aviator",
        "Continental",
        "Corsair",
        "MKC",
        "MKS",
        "MKT",
        "MKX",
        "MKZ",
        "Nautilus",
        "Navigator",
      ]
    },
    {
      name: 'Lotus',
      models: [
        "Elise",
        "Evora",
        "Exige",
      ]
    },
    {
      name: 'Luxgen',
      models: [
        "MPV7",
        "S5",
        "U6",
        "U7",
      ]
    },
    {
      name: 'Maserati',
      models: [
        "Ghibli",
        "GranCabrio",
        "Granturismo",
        "Levante",
        "Quattroporte",
      ]
    },
    {
      name: 'Maybach',
      models: [
        "57",
        "S500",
      ]
    },
    {
      name: 'Mazda',
      models: [
        "2",
        "3",
        "6",
        "BT-50",
        "CX-3",
        "CX-30",
        "CX-5",
        "CX-7",
        "CX-9",
        "MX-5",
      ]
    },
    {
      name: 'McLaren',
      models: [
        "570S",
        "600LT",
        "650S",
        "675",
        "720S",
        "MP4-12C",
        "P1",
      ]
    },
    {
      name: 'Mercedes',
      models: [
        "A200",
        "A220",
        "A250",
        "A35 AMG",
        "A45 AMG",
        "Actros",
        "B170",
        "B200",
        "C180",
        "C200",
        "C220",
        "C230",
        "C250",
        "C280",
        "C300",
        "C350",
        "C400",
        "C43 AMG",
        "C450",
        "C55 AMG",
        "C63 AMG",
        "CL500",
        "CL55 AMG",
        "CL550",
        "CL600",
        "CL63 AMG",
        "CL65 AMG",
        "CLA200",
        "CLA250",
        "CLA35 AMG",
        "CLA45 AMG",
        "CLC160",
        "CLC180",
        "CLC200",
        "CLC220",
        "CLC250",
        "CLC350",
        "CLK200",
        "CLK280",
        "CLK320",
        "CLK350",
        "CLK500",
        "CLK55 AMG",
        "CLS 400",
        "CLS350",
        "CLS400",
        "CLS450",
        "CLS500",
        "CLS55 AMG",
        "CLS550",
        "CLS63 AMG",
        "E200",
        "E220",
        "E230",
        "E240",
        "E250",
        "E280",
        "E300",
        "E320",
        "E350",
        "E400",
        "E43 AMG",
        "E450",
        "E500",
        "E53 AMG",
        "E55 AMG",
        "E550",
        "E63 AMG",
        "E63 S AMG",
        "G320",
        "G350",
        "G500",
        "G55 AMG",
        "G550",
        "G63 AMG",
        "G65 AMG",
        "G700",
        "G800",
        "Gazelle",
        "GL320",
        "GL450",
        "GL500",
        "GL550",
        "GL63 AMG",
        "GLA220",
        "GLA250",
        "GLA400",
        "GLA45 AMG",
        "GLB250",
        "GLB35 AMG",
        "GLC200",
        "GLC250",
        "GLC300",
        "GLC43 AMG",
        "GLC63 AMG",
        "GLE350",
        "GLE400",
        "GLE43 AMG",
        "GLE450",
        "GLE500",
        "GLE53 AMG",
        "GLE63 AMG",
        "GLK250",
        "GLK280",
        "GLK300",
        "GLK350",
        "GLS400",
        "GLS450",
        "GLS500",
        "GLS580",
        "GLS63 AMG",
        "GLS700",
        "AMG GT",
        "AMG GT-R",
        "ML250",
        "ML300",
        "ML320",
        "ML350",
        "ML400",
        "ML500",
        "ML550",
        "ML63 AMG",
        "R280",
        "R300",
        "R350",
        "R500",
        "S280",
        "S300",
        "S350",
        "S400",
        "S450",
        "S500",
        "S55 AMG",
        "S550",
        "S560",
        "S600",
        "S63 AMG",
        "S65 AMG",
        "SL350",
        "SL400",
        "SL500",
        "SL55 AMG",
        "SL550",
        "SL560",
        "SL63 AMG",
        "SL65 AMG",
        "SLC200",
        "SLC300",
        "SLC43 AMG",
        "SLK200",
        "SLK230",
        "SLK250",
        "SLK280",
        "SLK300",
        "SLK320",
        "SLK350",
        "SLK530",
        "SLK55 AMG",
        "SLK600",
        "SLR",
        "SLS AMG",
        "V",
        "V250",
        "Viano",
        "Vito",
        "XLP800",
      ]
    },
    {
      name: 'Mercury',
      models: [
        "Grand Marquis",
        "Mariner",
        "Milan",
        "Montego",
        "Mountaineer",
      ]
    },
    {
      name: 'MG',
      models: [
        "3",
        "350",
        "360",
        "5",
        "6",
        "GS",
        "GT",
        "HS",
        "RX5",
        "RX8",
        "ZS",
      ]
    },
    {
      name: 'MINI',
      models: [
        "Clubman",
        "Cooper",
        "Coupe",
        "Countryman",
        "Paceman",
        "Roadster",
      ]
    },
    {
      name: 'Mitsubishi',
      models: [
        "ASX",
        "Attrage",
        "Eclipse",
        "Eclipse Cross",
        "Galant",
        "Grandis",
        "L200",
        "L300",
        "Lancer",
        "Mirage",
        "Montero",
        "Montero Sport",
        "Outlander",
        "Pajero",
        "Pajero Sport",
        "Space Star",
        "SWB",
        "Xpander",
      ]
    },
    {
      name: 'Morgan',
      model: [
        "3 Wheeler",
        "Aero8",
        "Plus 4",
        "Plus 8",
        "Roadster",
      ]
    },
    {
      name: 'Nissan',
      models: [
        "280 ZX",
        "350Z",
        "370z",
        "Altima",
        "Armada",
        "GT-R",
        "Juke",
        "Kicks",
        "Maxima",
        "Micra",
        "Murano",
        "Navara",
        "Pathfinder",
        "Patrol",
        "Patrol Pickup",
        "Patrol Safari",
        "Qashqai",
        "Quest",
        "Rogue",
        "Sentra",
        "Sunny",
        "Tiida",
        "Urvan",
        "Versa",
        "X-Trail",
        "Xterra",
      ]
    },
    {
      name: 'Oldsmobile',
      models: []
    },
    {
      name: 'Opel',
      models: [
        "Adam",
        "Astra",
        "Cascada",
        "Corsa",
        "Crossland",
        "Grandland X",
        "Insignia",
        "Meriva",
        "Mokka",
        "Zafira Tourer",
      ]
    },
    {
      name: 'Pagani',
      models: ['Huayra']
    },
    {
      name: 'Panoz',
      models: []
    },
    {
      name: 'Peugeot',
      models: [
        "2008",
        "206",
        "207",
        "208",
        "3008",
        "301",
        "308",
        "308 CC",
        "407",
        "408",
        "5008",
        "508",
        "607",
        "Boxer",
        "Partner",
        "Partner Tepee",
        "RCZ",
        "Traveller",
      ]
    },
    {
      name: 'Polaris',
      models: ['RZR']
    },
    {
      name: 'Pontiac',
      models: ['Solstice']
    },
    {
      name: 'Porsche',
      models: [
        "911 4S",
        "911 Carrera",
        "911 Carrera 4",
        "911 Carrera 4 GTS",
        "911 Carrera GTS",
        "911 Carrera S",
        "911 GT2",
        "911 GT3",
        "911 GTS",
        "911 S",
        "911 Speedster",
        "911 Targa",
        "911 Targa 4",
        "911 Targa 4 GTS",
        "911 Targa 4S",
        "911 Turbo",
        "911 Turbo S",
        "964 Carrera 2",
        "918 Spyder",
        "718 Boxster",
        "718 Boxster GTS",
        "718 Boxter S",
        "718 Spyder",
        "Boxster",
        "Boxster GT4",
        "Boxster GTS",
        "Boxster S",
        "Cayenne",
        "Cayenne GTS",
        "Cayenne S",
        "Cayenne Turbo",
        "Cayenne Turbo GT",
        "Cayenne Turbo S",
        "718 Cayman",
        "718 Cayman GTS",
        "718 Cayman S",
        "Cayman",
        "Cayman GT4",
        "Cayman GTS",
        "Cayman S",
        "Macan",
        "Macan GTS",
        "Macan S",
        "Macan Turbo",
        "Panamera",
        "Panamera 4",
        "Panamera 4S",
        "Panamera GTS",
        "Panamera S",
        "Panamera S Turbo",
        "Panamera Turbo",
        "Panamera Turbo S",
        "Taycan",
      ]
    },
    {
      name: 'RAM',
      models: [
        "RAM",
        "1200",
        "1500",
        "2500",
      ]
    },
    {
      name: 'Range Rover',
      models: [
        "Evoque",
        "Evoque Convertible",
        "Sport",
        "Sport Autobiography",
        "Velar",
        "Velar R-Dynamic",
        "Autobiography",
        "HSE",
        "Vogue",
        "Vogue SE",
      ]
    },
    {
      name: 'Renault',
      models: [
        "Captur",
        "Clio",
        "Dokker",
        "Duster",
        "Fluence",
        "Koleos",
        "Laguna",
        "Logan",
        "Megane",
        "Safrane",
        "Sandero",
        "Symbol",
        "Talisman",
        "Trafic",
      ]
    },
    {
      name: 'Rolls-Royce',
      models: [
        "Cullinan",
        "Dawn",
        "Ghost",
        "Phantom",
        "Wraith",
      ]
    },
    {
      name: 'Saab',
      models: ['9-3']
    },
    {
      name: 'Saturn',
      models: []
    },
    {
      name: 'Scion',
      models: ['iM']
    },
    {
      name: 'Seat',
      models: [
        "Alhambra",
        "Altea",
        "Ibiza",
        "Leon",
      ]
    },
    {
      name: 'Shelby',
      models: [
        "Mustang",
        "Cobra",
      ]
    },
    {
      name: 'Skoda',
      models: [
        "Fabia",
        "Kodiaq",
        "Octavia",
        "Rapid",
        "Scala",
        "Superb",
        "Yeti",
      ]
    },
    {
      name: 'Smart',
      models: [
        "Kona",
        "ForFour",
        "ForTwo",
      ]
    },
    {
      name: 'Spyker',
      models: [
        "918 Spyder",
        "718 Spyder",
      ]
    },
    {
      name: 'SsangYong',
      models: []
    },
    {
      name: 'Subaru',
      models: [
        "BRZ",
        "Crosstrek",
        "Forester",
        "Impreza",
        "Legacy",
        "Outback",
        "WRX",
        "XV",
      ]
    },
    {
      name: 'Suzuki',
      models: [
        "Alto",
        "APV",
        "Baleno",
        "Celerio",
        "Ciaz",
        "Dzire",
        "Ertiga",
        "Grand Vitara",
        "Jimny",
        "Kizashi",
        "Swift",
        "SX4",
        "Vitara",
      ]
    },
    {
      name: 'Tata',
      models: [
        "Tuta",
        "Xenon",
      ]
    },
    {
      name: 'Tesla',
      models: [
        "Model 3",
        "Model S",
        "Model X",
        "Model Y",
        "Roadster",
      ]
    },
    {
      name: 'Toyota',
      models: [
        "4Runner",
        "86",
        "Aurion",
        "Avalon",
        "Avanza",
        "C-HR",
        "Camry",
        "Celica",
        "Corolla",
        "Corolla Cross",
        "FJ Cruiser",
        "Fortuner",
        "Granvia",
        "Hiace",
        "Highlander",
        "Hilux",
        "Innova",
        "IQ",
        "Land Cruiser",
        "Prado",
        "Previa",
        "Prius",
        "RAV 4",
        "Rush",
        "Sequoia",
        "Sienna",
        "Supra",
        "Tacoma",
        "Tundra",
        "xA",
        "Yaris",
        "Zelas",
      ]
    },
    {
      name: 'Volkswagen',
      models: [
        "Arteon",
        "Beetle",
        "Caddy",
        "Caravelle",
        "CC",
        "EOS",
        "Golf",
        "ID.4",
        "Jetta",
        "Multivan",
        "Passat",
        "Polo",
        "Scirocco",
        "T-Roc",
        "Teramont",
        "Tiguan",
        "Touareg",
      ]
    },
    {
      name: 'Volvo',
      models: [
        "C30",
        "C70",
        "S40",
        "S60",
        "S80",
        "S90",
        "V40",
        "V60",
        "V70",
        "XC40",
        "XC60",
        "XC70",
        "XC90",
      ]
    }
  ],
  cars = [
    'Abarth',
    'Alfa Romeo',
    'Aston Martin',
    'Audi',
    'BAIC',
    'Bentley',
    'BMW',
    'Borgward',
    'Bugatti',
    'Buick',
    'BYD',
    'Cadillac',
    'Changan',
    'Chery',
    'Chevrolet',
    'Chrysler',
    'Citroen',
    'CMC',
    'Daewoo',
    'Daihatsu',
    'Dodge',
    'Eagle',
    'FAW-Bestune',
    'Ferrari',
    'FIAT',
    'Fisker',
    'Ford',
    'GAC',
    'Geely',
    'Genesis',
    'GMC',
    'Great Wall',
    'Haval',
    'Honda',
    'Hongqi',
    'HUMMER',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'JAC',
    'Jaguar',
    'Jeep',
    'Jetour',
    'Kama',
    'Kia',
    'Lada',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Lotus',
    'Luxgen',
    'Maserati',
    'Maybach',
    'Mazda',
    'McLaren',
    'Mercedes',
    'Mercury',
    'MG',
    'MINI',
    'Mitsubishi',
    'Morgan',
    'Nissan',
    'Oldsmobile',
    'Opel',
    'Pagani',
    'Panoz',
    'Peugeot',
    'Polaris',
    'Pontiac',
    'Porsche',
    'RAM',
    'Range Rover',
    'Renault',
    'Rolls-Royce',
    'Saab',
    'Saturn',
    'Scion',
    'Seat',
    'Shelby',
    'Skoda',
    'Smart',
    'Spyker',
    'SsangYong',
    'Subaru',
    'Suzuki',
    'Tata',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo',
  ],
  progressVal = 0;
  // var i = 0;
  const move = (val) => {
    let newVal = 0;
    var elem = document.querySelector(".progress-bar");
    if(val == 0) {
      newVal = 0;
      progressVal = 0;
    } else {
      newVal = progressVal + val;
      progressVal = newVal;
    }
    elem.style.width = newVal + "%";
  }

  // empty all data
  const emptyFilledData = () => {
    move(0);
    $("#back-arrow").css('visibility', 'hidden');
    $(".slide input[type='radio']").prop("checked", false);
    $("#car-models-list").html('');
    $("[data-id='range-miles'] input").val(15000);
    $("#seller_first_name").val('');
    $("#seller_last_name").val('');
    $("#seller_email").val('');
    $("#phoneNumber").val('');
  }
  // open modal
  const openModalElements = document.querySelectorAll(".open-modal");
  for (let i = 0; i < openModalElements.length; i++) {
    openModalElements[i].addEventListener('click', function handleClick(event) {
      moveToTop();
      emptyFilledData();
      $(".slide").eq(0).addClass("active").siblings().removeClass("active");
      $("#animatedModal").css("display", "block");
    });
  }
  // open make
  if(document.getElementById("other-make")) {
    document.getElementById("other-make").addEventListener('click', function handleClick (event) {
      setTimeout(() => {
        document.getElementById('other-car').click();
      }, 500);
    });
  }
  
  // open modal from a selected car
  const openModalCarElements = document.querySelectorAll(".open-modal-car");
  for (let i = 0; i < openModalCarElements.length; i++) {
    openModalCarElements[i].addEventListener('click', function handleClick(event) {
      document.querySelector(".open-modal").click();
      setTimeout(() => {
        if(event.target.closest('.open-modal-car').getAttribute("data-id")) {
          document.getElementById(`${event.target.closest('.open-modal-car').getAttribute("data-id")}`).click()
        }
      }, 100);
    });
  }
  
  $(".carxchange-modal").html(`<div class="modal" id="animatedModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="back-arrow" id="back-arrow">
            <svg width="20" height="17" viewBox="0 0 20 17"
              fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 9.74794H4.15771L9.90659 15.4711L8.3708 17L0 8.66667L8.3708 0.333334L9.90659 1.86225L4.15771 7.5854H20V9.74794Z"
                fill="#6C6C6C"></path>
            </svg>
          </button>
          <h5 class="modal-title" id="modalLabel">Sell My Car</h5>
          <span class="cross-icon btn-close close-animatedModal" data-dismiss="modal">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.11394 0L0 1.11804L3.89238 5L0 8.88196L1.11394 10L5.00617 6.11789L8.8984 10L10 8.88196L6.11995 5L10 1.11804L8.8984 0L5.00617 3.88211L1.11394 0Z"
                fill="#040404"></path>
            </svg>
          </span>
        </div>
        <div class="modal-body">
          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            </div>
          </div>
          <div class="container">
            <div class="col-holder">
              <div class="v-list">
                <div class="item active fade-item">
                  <label>Make</label>
                  <span>Not specified</span>
                </div>
                <div class="item">
                  <label>Model</label>
                  <span>Not specified</span>
                </div>
                <div class="item">
                  <label>Year</label>
                  <span>Not specified</span>
                </div>
                <div class="item">
                  <label>Mileage</label>
                  <span>Not specified</span>
                </div>
              </div>
              <div class="tab-content">
                <div class="slide active" id="slide-make">
                  <div class="slide-header">
                    <h5>Select your car make</h5>
                    <div class="search-field">
                      <input id="search-car" type="search" placeholder="Search for car make">
                      <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                        <title id="title">Search Icon</title>
                        <desc id="desc">A magnifying glass icon.</desc>
                        <g class="search-path" fill="none" stroke="#848F91">
                          <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                          <circle cx="8" cy="8" r="7" />
                        </g>
                      </svg>
                      <ul class="makes-drop-down" id="search-car-dropdown"></ul>
                    </div>
                  </div>
                  <div class="car-makes radio-wrapper" id="cars-list">
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="BMW" id="bmw">
                      <label for="bmw">
                        <span class="text">BMW</span>
                      </label>
                    </div>

                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Honda" id="honda">
                      <label for="honda">
                        <span class="text">Honda</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Audi" id="audi">
                      <label for="audi">
                        <span class="text">Audi</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Mercedes" id="mercedes">
                      <label for="mercedes">
                        <span class="text">Mercedes</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Bently" id="bently">
                      <label for="bently">
                        <span class="text">Bently</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Maserati" id="maserati">
                      <label for="maserati">
                        <span class="text">Maserati</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Lamborghini" id="lamborghini">
                      <label for="lamborghini">
                        <span class="text">Lamborghini</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Ferrari" id="ferrari">
                      <label for="ferrari">
                        <span class="text">Ferrari</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="Land Rover" id="land-rover">
                      <label for="land-rover">
                        <span class="text">Land Rover</span>
                      </label>
                    </div>
                    <div class="label-wrapper">
                      <input type="radio" name="car" value="other-car" id="other-car" class="other-car">
                      <label for="other-car">
                        <span class="text">Other make</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="slide" id="slide-model">
                  <div class="slide-header">
                    <h5>Choose from popular models</h5>
                    <div class="search-field">
                      <input id="search-model" type="search" placeholder="Search for car model">
                      <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                        <title id="title">Search Icon</title>
                        <desc id="desc">A magnifying glass icon.</desc>
                        <g class="search-path" fill="none" stroke="#848F91">
                          <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                          <circle cx="8" cy="8" r="7" />
                        </g>
                      </svg>
                      <ul class="makes-drop-down" id="search-model-dropdown"></ul>
                    </div>
                  </div>
                  <div class="car-makes radio-wrapper" id="car-models-list"></div>
                </div>
                <div class="slide" id="slide-year">
                  <div class="slide-header">
                    <h5>Select year</h5>
                  </div>
                  <div class="car-makes radio-wrapper" id="car-years-list"></div>
                </div>
                <div class="slide" id="slide-mileage">
                  <form class="mileage-price" onsubmit="return false">
                    <div class="block">
                      <div class="slider-holder">
                        <div class="title-row">
                          <span>Mileage (approx)</span>
                          <span id="range-miles">25,000 Kilometers</span>
                        </div>
                        <div class="range-slider" data-id="range-miles">
                          <input class="range-slider__range" type="range" value="25000" min="0" max="350000"
                            step="1000">
                        </div>
                        <div class="labels-holder">
                          <span id="mileage-min-label" data-label="0 Kilometer" data-label-sm="0 Kilometer"></span>
                          <span id="mileage-max-label" data-label="350,000 Kilometers" data-label-sm="+350k Kilometers"></span>
                        </div>
                      </div>
                    </div>
                    <div class="block mb-5">
                      <h5>I am looking to</h5>
                      <div class="checkbox-wrapper car-types" id="car-type">
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Mechanical Repairs" id="mechanical-repairs" checked="checked">
                          <label for="mechanical-repairs">
                            <span class="text">Mechanical Repairs</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Electrical Repairs" id="electrical-repairs">
                          <label for="electrical-repairs">
                            <span class="text">Electrical Repairs</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Body Repairing & Painting" id="body-repairing">
                          <label for="body-repairing">
                            <span class="text">Body Repairing & Painting</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Servicing" id="servicing">
                          <label for="servicing">
                            <span class="text">Servicing</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Bodykit installation" id="bodykit">
                          <label for="bodykit">
                            <span class="text">Bodykit installation</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Break Down/ Urgent Help" id="breakdown">
                          <label for="breakdown">
                            <span class="text">Break Down/ Urgent Help</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="Inspection / Checks" id="inspection">
                          <label for="inspection">
                            <span class="text">Inspection / Checks</span>
                          </label>
                        </div>
                        <div class="label-wrapper">
                          <input type="checkbox" class="car-type" value="AC service" id="ac-service">
                          <label for="ac-service">
                            <span class="text">AC service</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="text-center">
                      <button id="continue-button" type="button">
                        Continue
                      </button>
                    </div>
                  </form>
                </div>
                <div class="slide" id="slide-contact">
                  <div class="seller-info-holder">
                    <h5 id="ShareContactInfo">Please share your contact info</h5>
                    <div class="grid-holder" data-item-gap="25">
                      <div class="item-wrapper">
                        <div class="item">
                          <label class="control-label">First Name</label>
                          <div class="input-holder" data-icon="">
                            <input class="form-control" placeholder="Enter First Name" id="seller_first_name">
                            <div class="icon">
                              <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8 0.749939C5.1084 0.749939 2.75 3.10834 2.75 5.99994C2.75 7.80756 3.67285 9.41302 5.07031 10.3593C2.39551 11.5078 0.5 14.162 0.5 17.2499H2C2 15.082 3.14551 13.1953 4.85938 12.1406C5.36328 13.3769 6.59082 14.2499 8 14.2499C9.40918 14.2499 10.6367 13.3769 11.1406 12.1406C12.8545 13.1953 14 15.082 14 17.2499H15.5C15.5 14.162 13.6045 11.5078 10.9297 10.3593C12.3271 9.41302 13.25 7.80756 13.25 5.99994C13.25 3.10834 10.8916 0.749939 8 0.749939ZM8 2.24994C10.0801 2.24994 11.75 3.91986 11.75 5.99994C11.75 8.08002 10.0801 9.74994 8 9.74994C5.91992 9.74994 4.25 8.08002 4.25 5.99994C4.25 3.91986 5.91992 2.24994 8 2.24994ZM8 11.2499C8.61523 11.2499 9.20117 11.3378 9.75781 11.5078C9.49707 12.2314 8.81738 12.7499 8 12.7499C7.18262 12.7499 6.50293 12.2314 6.24219 11.5078C6.79883 11.3378 7.38477 11.2499 8 11.2499Z"
                                  fill="#7990A6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div class="item">
                          <label class="control-label">Last Name</label>
                          <div class="input-holder" data-icon="">
                            <input class="form-control" placeholder="Enter Last Name" id="seller_last_name">
                            <div class="icon">
                              <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8 0.749939C5.1084 0.749939 2.75 3.10834 2.75 5.99994C2.75 7.80756 3.67285 9.41302 5.07031 10.3593C2.39551 11.5078 0.5 14.162 0.5 17.2499H2C2 15.082 3.14551 13.1953 4.85938 12.1406C5.36328 13.3769 6.59082 14.2499 8 14.2499C9.40918 14.2499 10.6367 13.3769 11.1406 12.1406C12.8545 13.1953 14 15.082 14 17.2499H15.5C15.5 14.162 13.6045 11.5078 10.9297 10.3593C12.3271 9.41302 13.25 7.80756 13.25 5.99994C13.25 3.10834 10.8916 0.749939 8 0.749939ZM8 2.24994C10.0801 2.24994 11.75 3.91986 11.75 5.99994C11.75 8.08002 10.0801 9.74994 8 9.74994C5.91992 9.74994 4.25 8.08002 4.25 5.99994C4.25 3.91986 5.91992 2.24994 8 2.24994ZM8 11.2499C8.61523 11.2499 9.20117 11.3378 9.75781 11.5078C9.49707 12.2314 8.81738 12.7499 8 12.7499C7.18262 12.7499 6.50293 12.2314 6.24219 11.5078C6.79883 11.3378 7.38477 11.2499 8 11.2499Z"
                                  fill="#7990A6"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <label class="control-label">Your email</label>
                        <div class="input-holder" data-icon="">
                          <input class="form-control" placeholder="Enter email address" id="seller_email" type="email">
                          <div class="icon">
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.75 0.25C1.6875 0.25 0 1.9375 0 4V13.75H9V16.75H10.5V13.75H18V4C18 1.9375 16.3125 0.25 14.25 0.25H3.75ZM3.75 1.75C5.00098 1.75 6 2.74902 6 4V12.25H1.5V4C1.5 2.74902 2.49902 1.75 3.75 1.75ZM6.72656 1.75H14.25C15.501 1.75 16.5 2.74902 16.5 4V12.25H7.5V4C7.5 3.15039 7.20703 2.37988 6.72656 1.75ZM9.75 3.25V4.75H13.5V6.25H15V3.25H9.75ZM2.25 4.75V6.25H5.25V4.75H2.25Z" fill="#808080"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <label class="control-label">Phone</label>
                        <div class="input-holder phone-holder" data-icon="" data-tel="+971">
                          <input type="tel" required="" class="phoneNumber" placeholder="Phone" id="phoneNumber" maxlength="9">
                          <div class="icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4.41022 0.874939C4.08307 0.874939 3.76081 0.992126 3.49225 1.20697L3.45319 1.2265L3.43366 1.24603L1.48053 3.25775L1.50006 3.27728C0.897037 3.83392 0.71149 4.66644 0.972721 5.38666C0.975162 5.39154 0.970279 5.40131 0.972721 5.40619C1.50251 6.9223 2.85749 9.84955 5.50397 12.496C8.16022 15.1523 11.1265 16.4536 12.5938 17.0273H12.6133C13.3726 17.2812 14.1954 17.1005 14.7813 16.5976L16.754 14.6249C17.2715 14.1074 17.2715 13.2089 16.754 12.6913L14.2149 10.1523L14.1954 10.1132C13.6778 9.59564 12.7598 9.59564 12.2423 10.1132L10.9923 11.3632C10.5406 11.1459 9.46393 10.5893 8.43366 9.60541C7.41071 8.62885 6.88825 7.5058 6.69538 7.06635L7.94538 5.81635C8.47028 5.29144 8.48004 4.41742 7.92585 3.90228L7.94538 3.88275L7.88678 3.82416L5.38678 1.24603L5.36725 1.2265L5.32819 1.20697C5.05963 0.992126 4.73737 0.874939 4.41022 0.874939ZM4.41022 2.12494C4.45661 2.12494 4.50299 2.14691 4.54694 2.18353L7.04694 4.74213L7.10553 4.80072C7.10065 4.79584 7.14215 4.86176 7.06647 4.93744L5.50397 6.49994L5.211 6.77338L5.34772 7.164C5.34772 7.164 6.06549 9.08539 7.57428 10.5234L7.711 10.6406C9.16364 11.9662 10.8751 12.6913 10.8751 12.6913L11.2657 12.8671L13.1212 11.0117C13.2286 10.9042 13.209 10.9042 13.3165 11.0117L15.8751 13.5703C15.9825 13.6777 15.9825 13.6386 15.8751 13.746L13.961 15.6601C13.6729 15.9067 13.3677 15.9579 13.004 15.8359C11.588 15.2792 8.83649 14.0707 6.38288 11.6171C3.90973 9.14398 2.61823 6.33881 2.1446 4.9765C2.04938 4.7226 2.11774 4.34662 2.33991 4.15619L2.37897 4.11713L4.2735 2.18353C4.31745 2.14691 4.36383 2.12494 4.41022 2.12494Z"
                                fill="#7990A6"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p>Please give us your details so that our service advisor will contact you.</p>
                    </div>
                    <button id="schedule_inspection" type="button">Send</button>
                  </div>
                </div>
                <div class="slide slide-last slide-thanks" id="slide-thanks">
                  <div class="main-content" style="max-height: 200px;overflow:hidden">
                    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_atippmse.json" 
                    background="transparent" speed="2" style="width: 200px; height: 200px;margin: auto;" id="thanks-lottie"></lottie-player>
                  </div>
                  <div class="header">
                    <h2>THANK YOU!</h2>
                  </div>
                  <p class="main-content__body">For contacting us. <br> will be get back to you soon.</p>
                </div>
              </div>
            </div>
            <span class="cross-icon btn-close close-animatedModal">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.55951 0L0 1.56526L5.44934 7L0 12.4347L1.55951 14L7.00864 8.56504L12.4578 14L14 12.4347L8.56793 7L14 1.56526L12.4578 0L7.00864 5.43496L1.55951 0Z"
                  fill="#040404"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>`);

  $(".open-modal").animatedModal({
    color: '#fff',
    animationDuration: '.35s'
  });
  // close modal
  $("body").on("click", ".btn-close", function(){
    $(".v-list .item").not(':first-child').removeClass("fade-item active");
    $(".v-list .item:first-child").addClass("fade-item active");
    $(".v-list .item").find("span").html("Not specified");
    setTimeout(() => {
      $("#animatedModal").css("display", "none");
    }, 500);
  });

  // fill years
  years.forEach(year => {
    $("#car-years-list").prepend(`
      <div class="label-wrapper">
      <input type="radio" name="year" value="${year}" id="${year}">
      <label for="${year}">
        <span class="text">${year}</span>
      </label>
    </div>`);
  });

  //fill dropdown data
  const fillingDropdown = (dropdown, list) => {
    dropdown.html('');
    list.forEach(item => {
      dropdown.append(`<li>${item}</li>`)
    })
    if(dropdown.children[0] === undefined) {
      $(".carxchange-modal").removeClass("search-opened");
      return dropdown.removeClass("opened")
    }
    $(".carxchange-modal").addClass("search-opened");
    dropdown.addClass("opened")
  }

  // use fillingDropdown for first time
  fillingDropdown($("#search-car-dropdown"), cars);

  // add value to input onclick on li in dropdown
  $("body").on("click", ".makes-drop-down li", function(e) {
    e.stopPropagation();
    $(this).parent().parent().find('input').val($(this).html());
    $(this).parent().removeClass("opened")
    $(".carxchange-modal").removeClass("search-opened");
  });

  // open dropdown on click
  $("#search-car, #search-model").on("click", function(e) {
    e.stopPropagation();
    $(this).siblings(".makes-drop-down").addClass("opened")
    $(".carxchange-modal").addClass("search-opened");
  });
  
  $("#search-car, #search-model").on("keyup", function() {
    const userInput = $(this).val().toLowerCase();
    $(this).parent().find(".makes-drop-down li").each(function() {
      $(this).hide();
      if($(this).html().toLowerCase().includes(userInput)) {
        $(this).show();
      }
    });
  });

  // close dropdown on click on any space
  $(window).on("click", function(){
    $(".makes-drop-down").removeClass("opened");
    $(".carxchange-modal").removeClass("search-opened");
    $("#other-car, #other-model").prop("checked", false);
  });

  // open dropdown when click on other car
  $("body").on("click", "#other-car", function(e){
    e.stopPropagation();
    $("#search-car-dropdown").addClass("opened");
    $(".carxchange-modal").addClass("search-opened");
  });

  // open dropdown when click on other model
  $("body").on("click", "#other-model", function(e){
    e.stopPropagation();
    $("#search-model-dropdown").addClass("opened");
    $(".carxchange-modal").addClass("search-opened");
  });

  $("body").on("click", ".slide input[type='radio']", function(e) {
    if($(this).hasClass("other-car") || $(this).hasClass("other-model")) {
      return;
    }
    let val = $(this).val();
    next(val);
  });
  $("body").on("click", ".search-field ul li", function(e) {
    let val = $(this).html();
    next(val);
  });
  $("body").on("click", "#continue-button", function(e) {
    let val = document.getElementById("range-miles").innerHTML;
    next(val);
  });
  $("body").on("click", "#slide-make input[type='radio']:not(.other-car)", function(e) {
    let val = $(this).val();
    fillModels(val);
  });

  $("body").on("click", "#slide-make .search-field li", function(e) {
    let val = $(this).html();
    fillModels(val);
  });
  
  // fill models function
  const fillModels = (car) => {
    const foundModels = models.find(element => element.name == car);
    fillingDropdown($("#search-model-dropdown"), foundModels.models);
    $("#car-models-list").html('');
    for (let index = 0; index < foundModels.models.length; index++) {
      const model = foundModels.models[index];
      if(foundModels.models.length > 9 && (index == 9)) {
        $("#car-models-list").append(`
          <div class="label-wrapper">
            <input type="radio" name="model" value="other-model" id="other-model" class="other-model">
            <label for="other-model">
              <span class="text">Other Model</span>
            </label>
          </div>
        `);
        break;
      } else {
        $("#car-models-list").append(`
          <div class="label-wrapper">
            <input type="radio" name="model" value="${model}" id="${model}">
            <label for="${model}">
              <span class="text">${model}</span>
            </label>
          </div>
        `);
      }
    }
  }

  // go to previous slide
  const prev = () => {
    let currentSlide = $(".slide.active"),
    currentSlideIndex = $(".slide.active").index(),
    prevSlide = currentSlideIndex > 0 ? $(".slide.active").prev() : null;
    if(currentSlideIndex == 0) {
      return;
    }
    if(prevSlide.index() == 0) {
      $("#back-arrow").css('visibility', 'hidden');
    } else {
      $("#back-arrow").css('visibility', 'visible');
    }
    currentSlide.removeClass("active");
    prevSlide.addClass("active").show();
    move(-20);
  }

  $(".v-list .item").on("click", function() {
    let currentSlide = $(".slide.active"),
      currentSlideIndex = $(".slide.active").index(),
    selectedSlideIndex = $(this).index(),
    selectedSlide = $(".slide").eq(selectedSlideIndex);
    if(selectedSlideIndex == currentSlideIndex) {
      return;
    } else {
      move(- ( ( currentSlideIndex - selectedSlideIndex ) * 20 ));
      $(this).addClass("active fade-item").nextAll().removeClass("fade-item active");
      currentSlide.removeClass("active");
      selectedSlide.addClass("active").show();
    }
  });

  // go to next slide
  const next = (selectedVal) => {
    let currentSlide = $(".slide.active"),
      currentSlideIndex = $(".slide.active").index(),
    nextSlide = currentSlideIndex < 8 ? currentSlide.next() : null;
    if(currentSlideIndex == 8) {
      return;
    }
    if(nextSlide.index() > 0) {
      $("#back-arrow").css('visibility', 'visible');
    } else {
      $("#back-arrow").css('visibility', 'hidden');
    }
    if(selectedVal.length > 0 && selectedVal !== '') {
      $(".v-list .item.active").removeClass("active").find("span").html(selectedVal);
      $(".v-list .item").eq(nextSlide.index()).addClass("active fade-item");
    }
    currentSlide.removeClass("active");
    nextSlide.addClass("active").show();
    if(currentSlideIndex == 0 && progressVal == 0) {
      move(40);
    } else {
      move(20);
    }
    moveToTop();
  }
  
  // back button
  $("body").on("click", "#back-arrow", function() {
    prev();
  });
  // add comma to numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // validate phone number
  $.fn.inputFilter = function (inputFilter) {
    return this.on(
      "input keydown keyup mousedown mouseup select contextmenu drop",
      function () {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      }
    );
  };
  $("#phoneNumber").inputFilter(function (value) {
    return /^\d*$/.test(value);
  });
  /**
   *  validate form for step 7 appointment
   */

  const validateFormContact = () => {
    if($("#phoneNumber").val().length < 9) {
      $("#phoneNumber").addClass("error");
    } else {
      $("#phoneNumber").removeClass("error");
    }
    if($("#seller_first_name").val() == '') {
      $("#seller_first_name").addClass("error");
    } else {
      $("#seller_first_name").removeClass("error");
    }
    if($("#seller_last_name").val() == '') {
      $("#seller_last_name").addClass("error");
    } else {
      $("#seller_last_name").removeClass("error");
    }
    if($("#seller_email").val() == '') {
      $("#seller_email").addClass("error");
    } else {
      $("#seller_email").removeClass("error");
    }
    if($("#phoneNumber").val().length >= 9 && $("#seller_first_name").val().length > 0 && $("#seller_last_name").val().length > 0 && $("#seller_email").val().length > 0) {
      return true;
    }
    return false;
  }
  $("#phoneNumber").on("blur", function() {
    if($("#phoneNumber").val().length < 9) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });
  $("#seller_first_name").on("input", function() {
    if($(this).val().length == 0) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });
  $("#seller_last_name").on("input", function() {
    if($(this).val().length == 0) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });
  $("#seller_email").on("input", function() {
    if($(this).val().length == 0) {
      $(this).addClass("error");
    } else {
      $(this).removeClass("error");
    }
  });

  // First let's set the colors of our sliders
  const settings = {
    fill: '#284999',
    background: '#eeeff4'
  }

  // First find all our sliders
  const sliders = document.querySelectorAll('.range-slider');

  // Iterate through that list of sliders
  // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
  Array.prototype.forEach.call(sliders,(slider)=>{
    // Look inside our slider for our input add an event listener
  //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
    slider.querySelector('input').addEventListener('input', (event)=>{
      // 1. apply our value to the span
      document.getElementById(slider.getAttribute("data-id")).innerHTML =  numberWithCommas(event.target.value) + " Kilometers";
      // 2. apply our fill to the input
      applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector('input'));
  });

  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
    slider.style.background = bg;
  }
  $("#schedule_inspection").on("click", function() {
    if(validateFormContact()) {
      let $this = $(this),
          checked = [];
      $this.html("Sending...").prop("disabled", true);
      $("#car-type input[type='checkbox']:checked").each(function(){
        checked.push($(this).val());
      });
    
      let data = {
        make: $("#cars-list input[type='radio']:checked").val(),
        model: $("#car-models-list input[type='radio']:checked").val(),
        year: $("#car-years-list input[type='radio']:checked").val(),
        mileage: $("[data-id='range-miles'] input").val(),
        type: checked.join(', '),
        first_name: $("#seller_first_name").val(),
        last_name: $("#seller_last_name").val(),
        email: $("#seller_email").val(),
        phone: '+971' + $("#phoneNumber").val(),
      };
      console.log(data);
      let request = $.ajax({
        url: "https://hook.us1.make.com/1x1etbj8jt0eh49pk4jhl1gmuthxnjx5",
        type: "post",
        data: data
      });
      document.querySelector("lottie-player").stop();
      setTimeout(() => {
        if(request) {
          $this.html("Send").prop("disabled", false)
          next('');
          document.querySelector("lottie-player").play();
        }
      }, 1000);
    }
  });
});