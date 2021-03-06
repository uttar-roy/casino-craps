var CANVAS_WIDTH = 1280;
var CANVAS_HEIGHT = 768;

var EDGEBOARD_X = 90;
var EDGEBOARD_Y = 95;

var FPS = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;

var STATE_GAME_WAITING_FOR_BET = 0;
var STATE_GAME_COME_OUT        = 1;
var STATE_GAME_COME_POINT      = 2;

var ON_SHOW_BET_ON_TABLE = 0;
var ON_SHOW_ENLIGHT = 1;
var ON_HIDE_ENLIGHT = 2;

var ON_MOUSE_DOWN = 0;
var ON_MOUSE_UP   = 1;
var ON_MOUSE_OVER = 2;
var ON_MOUSE_OUT  = 3;
var ON_DRAG_START = 4;
var ON_DRAG_END   = 5;
var ON_CONTROLLER_END    = 6;
var ON_CONTROLLER_REMOVE = 7;
var ON_CONTROLLER_ROLL = 8;

var TOTAL_MONEY;
var NUM_FICHES = 6;
var MIN_BET;
var MAX_BET;
var WIN_OCCURRENCE;
var TIME_FICHES_MOV = 1500;
var TIME_SHOW_DICES_RESULT;

var NUM_DICE_ROLLING_FRAMES = 34;
var NUM_BALL_SPIN_FRAMES = 200;
var NUM_HAND_FOR_ADS;

var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;
var SHOW_CREDITS;

var FONT1 = "arialbold";
var FONT2 = "Digital-7";

//var BASE_URL = "http://localhost:1337/games/admin";
var BASE_URL = "https://api.gamessecure.com/games/admin";