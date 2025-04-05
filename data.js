const dataBanners = [
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/5-delta-dish.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-approach.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/moon-717.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/4-a350-tails-port.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/luggage-night-727.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gclp-4-a350s.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gclp-2-a350-tails.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-forward-port.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-final-egkk.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-over-egkk-birdseye.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-taxiing.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-moon-water.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/757-snow-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-cibao-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-gate-port-forward.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/behind-right-a350.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/city-a350.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/moon-tail.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/taxi-light-a350.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/2-a320s-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/717-boeing-bldg-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/737-sun.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-climbing.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-hold-short.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a320-taxi-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-cones.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-departing.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-flaring.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-hsbc-night.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-huge-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-nose-moon-virgin.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-taxi-starboard.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-turning-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/a350-turning-smoke.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/amazing-thirds-lines.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/arrival-huge-moon-rwylights-night.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bravo-right.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bulb-moon-14.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/bulb-rotate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/detached-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/dont-cross-alpha-a320s.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/even-more-a320s.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/fenced-moon.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gate-pov-2.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/gate-pov.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/landing-lights.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-forward-slight-starboard.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-gate.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/md11-tail.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/sun-wing-glow.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/tail-moon-greenlight-port.png",
    "https://raw.githubusercontent.com/austinkden/img/refs/heads/main/dalv/banners/tivat-a320-air.png",
];

const sids = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        BOGNA1X: { displayName: "BOGNA 1X", waypoints: "KKWO6 KKWO8 KKS11 KKS2O KKS25 BOGNA" },
        NOVMA1X: { displayName: "NOVMA 1X", waypoints: "KKWO7 KKWO9 NOVMA" },
        WIZAD1X: { displayName: "WIZAD 1X", waypoints: "KKWO4 KKWO6 KKSO9 KKS14 KKS33 WIZAD" }
    },
    
    lemh: {
        ISKAL1A: { displayName: "ISKAL 1A", waypoints: "TIMOR LUNIK ISKAL" },
        SARGO2B: { displayName: "SARGO 2B", waypoints: "TIMOR SARGO" },
        MEROS3C: { displayName: "MEROS 3C", waypoints: "TIMOR MEROS" }
    },

    gclp: {
        KOPUD1A: { displayName: "KOPUD 1A", waypoints: "ECKOS KOPUD" },
        KOPUD1B: { displayName: "KOPUD 1B", waypoints: "LP1O1 TUPIK KOPUD" },
        ODEGI2A: { displayName: "ODEGI 2A", waypoints: "ECKOS LP1O2 LP1O3 ODEGI" },
        ODEGI2B: { displayName: "ODEGI 2B", waypoints: "DRANO ODEGI" },
        COSTI4A: { displayName: "COSTI 4A", waypoints: "ECKOS COSTI" },
        COSTI4B: { displayName: "COSTI 4B", waypoints: "LP1O1 COSTI" }
    },

    lytv: {
        NAPEV14: { displayName: "Name Unknown", waypoints: "TIVTI DEALT NAPEV" },
        DESOL14: { displayName: "Name Unknown", waypoints: "TIVTI OKLA MAMOL DESOL" },
        OLIVU14: { displayName: "Name Unknown", waypoints: "TIVTI OKLA NEROX GANTU EBOVA STAR NIK OLIVU" },
        OLIVU32: { displayName: "Name Unknown", waypoints: "GOSUT STAR NIK OLIVU" },
        DESOL32: { displayName: "Name Unknown", waypoints: "GOSUT STAR EBOVA VEDUR MOON DESOL" }
    },

    efkt: {
        ROSE3C: { displayName: "ROSE 3C", waypoints: "KITTL DELTA ROSE" },
        KETF2D: { displayName: "KETF 2D", waypoints: "KITTL KRDSH KETF" },
        SPECA1A: { displayName: "SPECA 1A", waypoints: "KITTL HTML SPECA" }
    },
    
    mdpc: {
        KATOK2T: { displayName: "KATOK 2T", waypoints: "MAROG PC101 KATOK" },
        CHUMA2T: { displayName: "CHUMA 2T", waypoints: "MAROG PC101 PC102 PC114 CHUMA" },
        PIXAR2T: { displayName: "PIXAR 2T", waypoints: "MAROG PC101 PC102 PC114 PC115 PIXAR" },
        ETBOD2T: { displayName: "ETBOD 2T", waypoints: "MAROG PC100 PC106 MIBNI ETBOD" },
    },    
};

const stars = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    egkk: {
        KUNAV1G: { displayName: "KUNAV 1G", waypoints: "KUNAV AMDUT KKE64 TIMBA" },
        VASUX1G: { displayName: "VASUX 1G", waypoints: "VASUX DISVO TELTU HOLLY WILLO" }
    },

    lemh: {
        SENOT3C: { displayName: "SENOT 3C", waypoints: "SENOT MORSS MNH61 MNH76 MNH31 CARME CAT" },
        OPER2B: { displayName: "Name Unknown", waypoints: "OPERA CDP63 CDP75 CARME CAT" },
        SYOL1A: { displayName: "Name Unknown", waypoints: "SYOL4 CARME CAT" }
    },

    gclp: {
        LORPO1C: { displayName: "LORPO 1C", waypoints: "LORPO ENETA" },
        LORPO1Z: { displayName: "LORPO 1Z", waypoints: "LORPO LALTO" },
        ORTIS5C: { displayName: "ORTIS 5C", waypoints: "BRICK DELAP" },
        KONBA4D: { displayName: "KONBA 4D", waypoints: "LP1O4 MADAS" },
        COSTI1C: { displayName: "COSTI 1C", waypoints: "COSTI CANIS" }
    },

    lytv: {
        NAPEV14R: { displayName: "NAPEV 14R", waypoints: "NAPEV ULTRA BABY GOSUT" },
        NAPEV32D: { displayName: "NAPEV 32D", waypoints: "NAPEV DEALT AGEN TIVTI" },
        DESOL14R: { displayName: "DESOL 14R", waypoints: "DESOL MOON ROMEO EROVA BABY GOSUT" },
        DESOL32D: { displayName: "DESOL 32D", waypoints: "DESOL COD MAMOL OKLA TIVTI" },
        OXY14R: { displayName: "OXY 14R", waypoints: "OXY NEON EROVA BABY GOSUT" },
        OXY32D: { displayName: "OXY 32D", waypoints: "OXY UBER MOON COD MAMOL OKLA TIVTI" }
    },

    efkt: {
        KRDSH1A: { displayName: "KRDSH 1A", waypoints: "KRDSH DELTA LIMA SUDIP" },
        KITTL2D: { displayName: "KITTL 2D", waypoints: "KIT SUDIP" },
        KEFLA3C: { displayName: "KEFLA 3C", waypoints: "EFLA BRAVO SUDIP" }
    },

    mdpc: {
        POKEG1W: { displayName: "POKEG 1W", waypoints: "POKEG PC115 PC113 BEREL" },
        BETIR1W: { displayName: "BETIR 1W", waypoints: "BETIR PC112 PC115 PC113 BEREL" },
        ANTEX1W: { displayName: "ANTEX 1W", waypoints: "ANTEK PC112 PC115 PC113 BEREL" }
    }
};

const routes = {
    _vectors: { displayName: "Vectors", waypoints: "VECTORS" },

    mdpc: {
        egkk: { haul: "Long", altitude: "090", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI COSTI LORPO ISKAL BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Medium", altitude: "070", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK VAXRI SYOL4", star: { 1: stars.lemh.SYOL1A, 19: stars._vectors } },
        gclp: { haul: "Short", altitude: "050", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI COSTI", star: { 3: stars.gclp.COSTI1C, 21: stars.gclp.COSTI1C } },
        lytv: { haul: "Long", altitude: "050", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK VAXRI NAPEV", star: { 14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D } },
        efkt: { haul: "Long", altitude: "110", sid: { 8: sids.mdpc.KATOK2T, 9: sids.mdpc.KATOK2T, 26: sids._vectors, 27: sids._vectors }, route: "KATOK BANZAI MUNCHY SENOT MEROS KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },
    
    mdst: {
        egkk: { haul: "Long", altitude: "090", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PIXAR KOLBI HDWA BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Long", altitude: "070", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 ODEGI VAXRI SYOL4", star: { 1: stars.lemh.SYOL1A, 19: stars._vectors} },
        gclp: { haul: "Medium", altitude: "050", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 PC114 GOLVER BETIR LP1O3 COSTI", star: stars.gclp.COSTI1C },
        lytv: { haul: "Long", altitude: "050", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC102 ANTEX NAPEV", star: {14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D} },
        efkt: { haul: "Long", altitude: "110", sid: { 11: sids._vectors, 29: sids._vectors }, route: "PC113 PC115 FAHAZ KOPUD LUNIK KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } }
    },
    
    egkk: {
        mdpc: { haul: "Long", altitude: "080", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "NOVMA LEDGO FALCON POKEG", star: { 8: stars.mdpc.POKEG1W, 9: stars.mdpc.POKEG1W, 26: stars._vectors, 27: stars._vectors } }, 
        mdst: { haul: "Long", altitude: "080", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "NOVMA LEDGO FALCON POKEG PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        lemh: { haul: "Short", altitude: "050", sid: { 26: sids.egkk.BOGNA1X, 8: sids._vectors }, route: "BOGNA LUNIK SENOT", star: { 1: stars.lemh.SENOT3C, 19: stars._vectors} },
        gclp: { haul: "Medium", altitude: "060", sid: { 26: sids.egkk.NOVMA1X, 8: sids._vectors }, route: "NOVMA ROGER BRICK", star: { 21: stars.gclp.ORTIS5C, 3: stars.gclp.KONBA4D} }, 
        efkt: { haul: "Short", altitude: "050", sid: { 26: sids.egkk.WIZAD1X, 8: sids._vectors }, route: "WIZAD MINTY LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lytv: { haul: "Long", altitude: "080", sid: { 26: sids.egkk.BOGNA1X, 8: sids._vectors }, route: "BOGNA SARGO MEROS OXY", star: { 14: stars.lytv.OXY14R, 32: stars.lytv.OXY32D}}
    },

    lemh: {
        mdpc: { haul: "Medium", altitude: "060", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "ISKAL KOPUD DICEY BETIR", star: { 8: stars.mdpc.BETIR1W, 9: stars.mdpc.BETIR1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", altitude: "060", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "ISKAL KOPUD DICEY BETIR GOLVER PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", altitude: "060", sid: { 1: sids.lemh.SARGO2B, 19: sids._vectors }, route: "SARGO MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lytv: { haul: "Short", altitude: "050", sid: { 1: sids._vectors, 19: sids._vectors }, route: "MORSS OXY", star: { 14: stars.lytv.OXY14R, 32: stars.lytv.OXY32D } },
        efkt: { haul: "Medium", altitude: "070", sid: { 1: sids.lemh.MEROS3C, 19: sids._vectors }, route: "MEROS KONAN LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        gclp: { haul: "Short", altitude: "050", sid: { 1: sids.lemh.ISKAL1A, 19: sids._vectors }, route: "KOPUD BRICK", star: { 3: stars.gclp.KONBA4D, 21: stars.gclp.ORTIS5C } }
    },

    gclp: {
        mdpc: { haul: "Short", altitude: "050", sid: { 21: sids.gclp.ODEGI2B, 3: sids.gclp.ODEGI2A }, route: "ODEGI PC112", star: { 8: stars._vectors, 9: stars._vectors, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Medium", altitude: "060", sid: { 21: sids.gclp.ODEGI2B, 3: sids.gclp.ODEGI2A }, route: "ODEGI PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", altitude: "050", sid: { 21: sids.gclp.KOPUD1B, 3: sids.gclp.KOPUD1A }, route: "KOPUD ISKAL BOGNA MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        lytv: { haul: "Short", altitude: "065", sid: { 21: sids.gclp.COSTI4B, 3: sids.gclp.COSTI4A }, route: "COSTI MUNCHY NAPEV", star: { 14: stars.lytv.NAPEV14R, 32: stars.lytv.NAPEV32D } },
        efkt: { haul: "Medium", altitude: "080", sid: { 21: sids.gclp.KOPUD1B, 3: sids.gclp.KOPUD1A }, route: "KOPUD HARDY KUNAV LIMA", star: { 16: stars._vectors, 34: stars._vectors } },
        lemh: { haul: "Short", altitude: "050", sid: { 21: sids.gclp.COSTI4B, 3: sids.gclp.COSTI4A }, route: "COSTI HEAT", star: { 1: stars.lemh.SYOL1A, 19: stars._vectors } }
    },

    lytv: {
        mdpc: { haul: "Long", altitude: "080", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "NAPEV ANTEX", star: { 8: stars.mdpc.ANTEX1W, 9: stars.mdpc.ANTEX1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", altitude: "085", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "OLIVU SYOL4 VAXRI ODEGI PC114 PC115 PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        lemh: { haul: "Short", altitude: "050", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "OLIVU MNH31", star: { 1: stars._vectors, 19: stars._vectors} },
        gclp: { haul: "Short", altitude: "070", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.NAPEV14 }, route: "SYOL4 MUNCHY COSTI", star: { 3: stars.gclp.COSTI1C, 21: stars.gclp.COSTI1C} },
        egkk: { haul: "Long", altitude: "080", sid: { 32: sids.lytv.OLIVU32, 14: sids.lytv.OLIVU14 }, route: "OLIVU TIMOR LUNIK MAYFIELD", star: { 8: stars._vectors, 26: stars._vectors } },
        efkt: { haul: "Long", altitude: "080", sid: { 32: sids.lytv.DESOL32, 14: sids.lytv.DESOL14 }, route: "DESOL EFLA", star: { 16: stars._vectors, 34: stars.efkt.KEFLA3C } }
    },

    efkt: {
        mdpc: { haul: "Long", altitude: "090", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "TEBRA LIZAD KOLBI POKEG", star: { 8: stars.mdpc.POKEG1W, 9: stars.mdpc.POKEG1W, 26: stars._vectors, 27: stars._vectors } },
        mdst: { haul: "Long", altitude: "090", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "TEBRA LIZAD KOLBI POKEG PC113", star: { 11: stars._vectors, 29: stars._vectors } },
        egkk: { haul: "Short", altitude: "050", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "FRANE DETLING", star: { 8: stars._vectors, 26: stars._vectors } },
        lemh: { haul: "Medium", altitude: "070", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "MINTY KUNAV SENOT", star: { 1: stars.lemh.SENOT3C, 19: stars._vectors } },
        gclp: { haul: "Medium", altitude: "080", sid: { 16: sids._vectors, 34: sids.efkt.ROSE3C }, route: "FRANE MAYFIELD LIZAD BRICK", star: { 21: stars.gclp.ORTIS5C, 3: stars.gclp.KONBA4D } },
        lytv: { haul: "Long", altitude: "080", sid: { 16: sids._vectors, 34: sids. efkt.ROSE3C }, route: "KONAN OXY", star: { 14: stars.lytv.OXY14R, 32: stars.lytv.OXY32D } }
    }
}

const airports = [
    { code: "MDPC", name: "Punta Cana", runways: ["8", "9", "08", "09", "26", "27"] },
    { code: "MDST", name: "Cibao", runways: ["11", "29"] },
    { code: "EGKK", name: "London Gatwick", runways: ["8L", "8R", "08L", "08R", "26L", "26R"] },
    { code: "LEMH", name: "Menorca", runways: ["1", "01", "19"] },
    { code: "GCLP", name: "Gran Canaria", runways: ["3L", "3R", "03L", "03R", "21L", "21R"] },
    { code: "LYTV", name: "Tivat", runways: ["14", "32"] },
    { code: "EFKT", name: "Kittilä", runways: ["16", "34"] }
]

const aircraftTypes = ["A350", "A320", "B737", "B757", "B717", "MD11", "B727", "A220"];

//This code was for testing purposes

/*
const departureCode = "gclp";
const arrivalCode = "egkk";

const departureRunway = 3;
const arrivalRunway = 26;

const flightPlan = routes[departureCode][arrivalCode];
console.log(flightPlan.sid[departureRunway].waypoints, flightPlan.route, flightPlan.star[arrivalRunway].waypoints, "\n" + flightPlan.haul, "haul,", "ETA:", flightPlan.time+",", "FL:", flightPlan.altitude)
*/
