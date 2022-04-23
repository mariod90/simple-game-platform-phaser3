const Constants = {
    EVENTS: {
        LIVES: 'changeLives',
        SCORE: 'changeScore',
        CLOCK: 'clock'
    },
    MENU: {
        PLAY_GAME: 'PLAY GAME'
    },
    HUD: {
        LIVES: 'LIVES:'
    },
    SCENES: {
        LOAD: 'Load',
        MENU: 'Menu',
        LEVEL1: 'Level1',
        HUD: 'HUD'
    },
    REGISTER: {
        LIVES: 'lives',
        SCORE: 'score',
        CLOCK: 'clock'
    },
    MAPS: {
        LEVEL1: {
            TILEMAPJSON: 'mapLevel1',
            LAYERPLATFORM: 'Plataformas'
        },
        TILESET: 'levelstileset',
        FINALPOSITION: 'finalposition',
        ENEMIES: 'enemies',
        MOBILEPLATFORMS: 'mobileplatforms',
        VERTICALPLATFORM: 'vertical',
        HORIZONTALPLATFORM: 'horizontal',
        HARVESTABLE: 'harvestable'
    },
    BACKGROUNDS: {
        LEVEL1: 'Brown'
    },
    FONTS: {
        JSON: 'fuenteJSON',
        IMAGE: 'imagenFuente',
        BITMAP: 'fuentePixel'
    },
    PLAYER: {
        ID: 'player',
        ANIMATION: {
            IDLE: 'idle',
            RUN: 'run',
            JUMP: 'jump-0'
        }
    },
    OBJECTS: {
        FINAL: 'final'
    },
    ENEMIES: {
        BUNNY: {
            ID: 'bunny',
            ANIM: 'bunnyRun',
            SPEED: 75
        },
        CHICKEN: {
            ID: 'chicken',
            ANIM: 'chickenRun',
            SPEED: 100
        },
        MUSHROOM: {
            ID: 'mushroom',
            ANIM: 'mushroomRun',
            SPEED: 100
        },
        RADISH: {
            ID: 'radish',
            ANIM: 'radishRun',
            SPEED: 100
        },
        EXPLOSION: {
            ID: 'explosion',
            ANIM: 'explota'
        }
    },
    MOVILPLATFORM: {
        ID: 'movilplatform',
        SPEED: 60
    },
    SOUNDS: {
        EFFECTS: {
            JUMP: 'jump',
            FALLONENEMY: 'fallon',
            REMOVELIFE: 'removelife',
            COLLECT: 'collect'
        },
        SOUNDTRACK: 'soundtrack'
    },
    HARVESTABLE: {
        BANANA: {
            ID: 'banana',
            ANIM: 'bananaAnim'
        },
        PINEAPPLE: {
            ID: 'pineapple',
            ANIM: 'pineappleAnim'
        },
        CHERRY: {
            ID: 'cherry',
            ANIM: 'cherryAnim'
        }
    }
};

export default Constants;
