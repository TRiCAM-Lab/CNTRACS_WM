/******************* 
 * Cntracs_Wm Test *
 *******************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'cntracs_wm';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const taskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(taskLoopLoopBegin, taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var testColorsClock;
var probeCircle;
var testPos0;
var testPos20;
var testPos40;
var testPos60;
var testPos80;
var testColorsExplained;
var mouseTestColors;
var clickablePos0;
var clickablePos20;
var clickablePos40;
var clickablePos60;
var clickablePos80;
var instructionsClock;
var textInstructions;
var mouseInstructions;
var trialClock;
var centralFixation;
var stim1;
var stim2;
var stim3;
var stim4;
var stim5;
var responseDemoClock;
var respRingDemo;
var probeDemo;
var mouseResponseDemo;
var textDemo;
var arrowImage;
var ITIClock;
var startBlockClock;
var firstTrial;
var trialsPerBlock;
var clickToBegin;
var mouseToStartBlock;
var fixPrepareClock;
var centralFixation_Long;
var responseClock;
var respRing;
var probe;
var mouseResponse;
var pos0;
var pos5;
var pos10;
var pos15;
var pos20;
var pos25;
var pos30;
var pos35;
var pos40;
var pos45;
var pos50;
var pos55;
var pos60;
var pos65;
var pos70;
var pos75;
var pos80;
var pos85;
var pos90;
var pos95;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "testColors"
  testColorsClock = new util.Clock();
  probeCircle = new visual.Polygon ({
    win: psychoJS.window, name: 'probeCircle', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  testPos0 = new visual.Rect ({
    win: psychoJS.window, name: 'testPos0', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (0 - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  testPos20 = new visual.Rect ({
    win: psychoJS.window, name: 'testPos20', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 20) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  testPos40 = new visual.Rect ({
    win: psychoJS.window, name: 'testPos40', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 40) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  testPos60 = new visual.Rect ({
    win: psychoJS.window, name: 'testPos60', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 60) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  testPos80 = new visual.Rect ({
    win: psychoJS.window, name: 'testPos80', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 80) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  testColorsExplained = new visual.TextStim({
    win: psychoJS.window,
    name: 'testColorsExplained',
    text: 'Click the bar whose color matches the central circle.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  mouseTestColors = new core.Mouse({
    win: psychoJS.window,
  });
  mouseTestColors.mouseClock = new util.Clock();
  clickablePos0 = new visual.Rect ({
    win: psychoJS.window, name: 'clickablePos0', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -8, interpolate: true,
  });
  
  clickablePos20 = new visual.Rect ({
    win: psychoJS.window, name: 'clickablePos20', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 20) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -9, interpolate: true,
  });
  
  clickablePos40 = new visual.Rect ({
    win: psychoJS.window, name: 'clickablePos40', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 40) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -10, interpolate: true,
  });
  
  clickablePos60 = new visual.Rect ({
    win: psychoJS.window, name: 'clickablePos60', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 60) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -11, interpolate: true,
  });
  
  clickablePos80 = new visual.Rect ({
    win: psychoJS.window, name: 'clickablePos80', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (((100 - 80) * 3.6) - 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -12, interpolate: true,
  });
  
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  textInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions',
    text: 'Welcome!\n\nIn this experiment we will test your memory for the location of some colored rectangles.\n\nTry to remember where each rectangle is located.\n\nWhen the rectangles disappear a single colored circle will appear in the center of the screen.\n\nClick on the screen where you remember having seen a rectangle matching the color of the circle.\n\nClick any button to begin.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouseInstructions = new core.Mouse({
    win: psychoJS.window,
  });
  mouseInstructions.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  centralFixation = new visual.Rect ({
    win: psychoJS.window, name: 'centralFixation', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 2, lineColor: new util.Color([0.5, 0.5, 0.5]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stim2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  stim3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  stim4 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  stim5 = new visual.Rect ({
    win: psychoJS.window, name: 'stim5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  // Initialize components for Routine "responseDemo"
  responseDemoClock = new util.Clock();
  respRingDemo = new visual.Polygon ({
    win: psychoJS.window, name: 'respRingDemo', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  probeDemo = new visual.Polygon ({
    win: psychoJS.window, name: 'probeDemo', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouseResponseDemo = new core.Mouse({
    win: psychoJS.window,
  });
  mouseResponseDemo.mouseClock = new util.Clock();
  textDemo = new visual.TextStim({
    win: psychoJS.window,
    name: 'textDemo',
    text: 'Click on the ring where you remember having seen a bar whose color matches the color of the circle at screen center.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  arrowImage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrowImage', units : undefined, 
    image : 'images/arrow.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.05, 0.05],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  // Initialize components for Routine "startBlock"
  startBlockClock = new util.Clock();
  firstTrial = 0;
  trialsPerBlock = 40;
  
  clickToBegin = new visual.TextStim({
    win: psychoJS.window,
    name: 'clickToBegin',
    text: 'When you are ready, click the mouse to begin the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  mouseToStartBlock = new core.Mouse({
    win: psychoJS.window,
  });
  mouseToStartBlock.mouseClock = new util.Clock();
  // Initialize components for Routine "fixPrepare"
  fixPrepareClock = new util.Clock();
  centralFixation_Long = new visual.Rect ({
    win: psychoJS.window, name: 'centralFixation_Long', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 2, lineColor: new util.Color([0.5, 0.5, 0.5]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  centralFixation = new visual.Rect ({
    win: psychoJS.window, name: 'centralFixation', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 2, lineColor: new util.Color([0.5, 0.5, 0.5]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  stim1 = new visual.Rect ({
    win: psychoJS.window, name: 'stim1', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  stim2 = new visual.Rect ({
    win: psychoJS.window, name: 'stim2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  stim3 = new visual.Rect ({
    win: psychoJS.window, name: 'stim3', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  stim4 = new visual.Rect ({
    win: psychoJS.window, name: 'stim4', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  stim5 = new visual.Rect ({
    win: psychoJS.window, name: 'stim5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 1.0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  // Initialize components for Routine "response"
  responseClock = new util.Clock();
  respRing = new visual.Polygon ({
    win: psychoJS.window, name: 'respRing', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0, 0, 0]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  probe = new visual.Polygon ({
    win: psychoJS.window, name: 'probe', 
    edges: 100, size:[1.0, 1.0],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color(1.0),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  mouseResponse = new core.Mouse({
    win: psychoJS.window,
  });
  mouseResponse.mouseClock = new util.Clock();
  pos0 = new visual.Rect ({
    win: psychoJS.window, name: 'pos0', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -4, interpolate: true,
  });
  
  pos5 = new visual.Rect ({
    win: psychoJS.window, name: 'pos5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 5), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -5, interpolate: true,
  });
  
  pos10 = new visual.Rect ({
    win: psychoJS.window, name: 'pos10', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 10), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -6, interpolate: true,
  });
  
  pos15 = new visual.Rect ({
    win: psychoJS.window, name: 'pos15', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 15), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -7, interpolate: true,
  });
  
  pos20 = new visual.Rect ({
    win: psychoJS.window, name: 'pos20', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 20), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -8, interpolate: true,
  });
  
  pos25 = new visual.Rect ({
    win: psychoJS.window, name: 'pos25', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 25), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -9, interpolate: true,
  });
  
  pos30 = new visual.Rect ({
    win: psychoJS.window, name: 'pos30', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 30), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -10, interpolate: true,
  });
  
  pos35 = new visual.Rect ({
    win: psychoJS.window, name: 'pos35', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 35), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -11, interpolate: true,
  });
  
  pos40 = new visual.Rect ({
    win: psychoJS.window, name: 'pos40', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 40), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -12, interpolate: true,
  });
  
  pos45 = new visual.Rect ({
    win: psychoJS.window, name: 'pos45', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 45), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -13, interpolate: true,
  });
  
  pos50 = new visual.Rect ({
    win: psychoJS.window, name: 'pos50', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 50), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -14, interpolate: true,
  });
  
  pos55 = new visual.Rect ({
    win: psychoJS.window, name: 'pos55', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 55), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -15, interpolate: true,
  });
  
  pos60 = new visual.Rect ({
    win: psychoJS.window, name: 'pos60', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 60), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -16, interpolate: true,
  });
  
  pos65 = new visual.Rect ({
    win: psychoJS.window, name: 'pos65', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 65), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -17, interpolate: true,
  });
  
  pos70 = new visual.Rect ({
    win: psychoJS.window, name: 'pos70', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 70), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -18, interpolate: true,
  });
  
  pos75 = new visual.Rect ({
    win: psychoJS.window, name: 'pos75', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 75), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -19, interpolate: true,
  });
  
  pos80 = new visual.Rect ({
    win: psychoJS.window, name: 'pos80', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 80), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -20, interpolate: true,
  });
  
  pos85 = new visual.Rect ({
    win: psychoJS.window, name: 'pos85', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 85), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -21, interpolate: true,
  });
  
  pos90 = new visual.Rect ({
    win: psychoJS.window, name: 'pos90', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 90), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -22, interpolate: true,
  });
  
  pos95 = new visual.Rect ({
    win: psychoJS.window, name: 'pos95', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: (3.6 * 95), pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 0, depth: -23, interpolate: true,
  });
  
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var taskLoop;
var currentLoop;
function taskLoopLoopBegin(taskLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  taskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'parameterFiles/taskParameters.xlsx',
    seed: undefined, name: 'taskLoop'
  });
  psychoJS.experiment.addLoop(taskLoop); // add the loop to the experiment
  currentLoop = taskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  taskLoop.forEach(function() {
    const snapshot = taskLoop.getSnapshot();

    taskLoopLoopScheduler.add(importConditions(snapshot));
    const testColorsLoopLoopScheduler = new Scheduler(psychoJS);
    taskLoopLoopScheduler.add(testColorsLoopLoopBegin, testColorsLoopLoopScheduler);
    taskLoopLoopScheduler.add(testColorsLoopLoopScheduler);
    taskLoopLoopScheduler.add(testColorsLoopLoopEnd);
    taskLoopLoopScheduler.add(instructionsRoutineBegin(snapshot));
    taskLoopLoopScheduler.add(instructionsRoutineEachFrame(snapshot));
    taskLoopLoopScheduler.add(instructionsRoutineEnd(snapshot));
    const demoTrialsLoopScheduler = new Scheduler(psychoJS);
    taskLoopLoopScheduler.add(demoTrialsLoopBegin, demoTrialsLoopScheduler);
    taskLoopLoopScheduler.add(demoTrialsLoopScheduler);
    taskLoopLoopScheduler.add(demoTrialsLoopEnd);
    const blockOfTrialsLoopScheduler = new Scheduler(psychoJS);
    taskLoopLoopScheduler.add(blockOfTrialsLoopBegin, blockOfTrialsLoopScheduler);
    taskLoopLoopScheduler.add(blockOfTrialsLoopScheduler);
    taskLoopLoopScheduler.add(blockOfTrialsLoopEnd);
    taskLoopLoopScheduler.add(endLoopIteration(taskLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var testColorsLoop;
function testColorsLoopLoopBegin(testColorsLoopLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  testColorsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'parameterFiles/testColorsSequence.xlsx', '0:5'),
    seed: undefined, name: 'testColorsLoop'
  });
  psychoJS.experiment.addLoop(testColorsLoop); // add the loop to the experiment
  currentLoop = testColorsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  testColorsLoop.forEach(function() {
    const snapshot = testColorsLoop.getSnapshot();

    testColorsLoopLoopScheduler.add(importConditions(snapshot));
    testColorsLoopLoopScheduler.add(testColorsRoutineBegin(snapshot));
    testColorsLoopLoopScheduler.add(testColorsRoutineEachFrame(snapshot));
    testColorsLoopLoopScheduler.add(testColorsRoutineEnd(snapshot));
    testColorsLoopLoopScheduler.add(endLoopIteration(testColorsLoopLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function testColorsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(testColorsLoop);

  return Scheduler.Event.NEXT;
}


var demoTrials;
function demoTrialsLoopBegin(demoTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  demoTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'parameterFiles/trialDemoSequence_forJS.xlsx',
    seed: undefined, name: 'demoTrials'
  });
  psychoJS.experiment.addLoop(demoTrials); // add the loop to the experiment
  currentLoop = demoTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  demoTrials.forEach(function() {
    const snapshot = demoTrials.getSnapshot();

    demoTrialsLoopScheduler.add(importConditions(snapshot));
    demoTrialsLoopScheduler.add(trialRoutineBegin(snapshot));
    demoTrialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    demoTrialsLoopScheduler.add(trialRoutineEnd(snapshot));
    demoTrialsLoopScheduler.add(responseDemoRoutineBegin(snapshot));
    demoTrialsLoopScheduler.add(responseDemoRoutineEachFrame(snapshot));
    demoTrialsLoopScheduler.add(responseDemoRoutineEnd(snapshot));
    demoTrialsLoopScheduler.add(ITIRoutineBegin(snapshot));
    demoTrialsLoopScheduler.add(ITIRoutineEachFrame(snapshot));
    demoTrialsLoopScheduler.add(ITIRoutineEnd(snapshot));
    demoTrialsLoopScheduler.add(endLoopIteration(demoTrialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function demoTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(demoTrials);

  return Scheduler.Event.NEXT;
}


var blockOfTrials;
function blockOfTrialsLoopBegin(blockOfTrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blockOfTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blockOfTrials'
  });
  psychoJS.experiment.addLoop(blockOfTrials); // add the loop to the experiment
  currentLoop = blockOfTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  blockOfTrials.forEach(function() {
    const snapshot = blockOfTrials.getSnapshot();

    blockOfTrialsLoopScheduler.add(importConditions(snapshot));
    blockOfTrialsLoopScheduler.add(startBlockRoutineBegin(snapshot));
    blockOfTrialsLoopScheduler.add(startBlockRoutineEachFrame(snapshot));
    blockOfTrialsLoopScheduler.add(startBlockRoutineEnd(snapshot));
    blockOfTrialsLoopScheduler.add(fixPrepareRoutineBegin(snapshot));
    blockOfTrialsLoopScheduler.add(fixPrepareRoutineEachFrame(snapshot));
    blockOfTrialsLoopScheduler.add(fixPrepareRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    blockOfTrialsLoopScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    blockOfTrialsLoopScheduler.add(trialsLoopScheduler);
    blockOfTrialsLoopScheduler.add(trialsLoopEnd);
    blockOfTrialsLoopScheduler.add(endLoopIteration(blockOfTrialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'parameterFiles/trialSequence_forJS.xlsx', currentBlockRows),
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  trials.forEach(function() {
    const snapshot = trials.getSnapshot();

    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(trialRoutineBegin(snapshot));
    trialsLoopScheduler.add(trialRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(trialRoutineEnd(snapshot));
    trialsLoopScheduler.add(responseRoutineBegin(snapshot));
    trialsLoopScheduler.add(responseRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(responseRoutineEnd(snapshot));
    trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
    trialsLoopScheduler.add(ITIRoutineEachFrame(snapshot));
    trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function blockOfTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(blockOfTrials);

  return Scheduler.Event.NEXT;
}


function taskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(taskLoop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var gotValidClick;
var testColorsComponents;
function testColorsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'testColors'-------
    t = 0;
    testColorsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    probeCircle.setSize([(fixSize * 2), (fixSize * 2)]);
    probeCircle.setFillColor(new util.Color(testColorsColor));
    probeCircle.setLineColor(new util.Color(testColorsColor));
    testPos0.setPos([pos0_x, pos0_y]);
    testPos0.setSize([stimWidth, stimHeight]);
    testPos0.setFillColor(new util.Color(color0));
    testPos0.setLineColor(new util.Color(color0));
    testPos20.setPos([pos20_x, pos20_y]);
    testPos20.setSize([stimWidth, stimHeight]);
    testPos20.setFillColor(new util.Color(color1));
    testPos20.setLineColor(new util.Color(color1));
    testPos40.setPos([pos40_x, pos40_y]);
    testPos40.setSize([stimWidth, stimHeight]);
    testPos40.setFillColor(new util.Color(color2));
    testPos40.setLineColor(new util.Color(color2));
    testPos60.setPos([pos60_x, pos60_y]);
    testPos60.setSize([stimWidth, stimHeight]);
    testPos60.setFillColor(new util.Color(color3));
    testPos60.setLineColor(new util.Color(color3));
    testPos80.setPos([pos80_x, pos80_y]);
    testPos80.setSize([stimWidth, stimHeight]);
    testPos80.setFillColor(new util.Color(color4));
    testPos80.setLineColor(new util.Color(color4));
    testColorsExplained.setHeight(fontSize);
    // setup some python lists for storing info about the mouseTestColors
    mouseTestColors.clicked_name = [];
    gotValidClick = false; // until a click is received
    clickablePos0.setPos([pos0_x, pos0_y]);
    clickablePos0.setSize([(stimWidth * 2), (stimHeight * 2)]);
    clickablePos20.setPos([pos20_x, pos20_y]);
    clickablePos20.setSize([(stimWidth * 2), (stimHeight * 2)]);
    clickablePos40.setPos([pos40_x, pos40_y]);
    clickablePos40.setSize([(stimWidth * 2), (stimHeight * 2)]);
    clickablePos60.setPos([pos60_x, pos60_y]);
    clickablePos60.setSize([(stimWidth * 2), (stimHeight * 2)]);
    clickablePos80.setPos([pos80_x, pos80_y]);
    clickablePos80.setSize([(stimWidth * 2), (stimHeight * 2)]);
    // keep track of which components have finished
    testColorsComponents = [];
    testColorsComponents.push(probeCircle);
    testColorsComponents.push(testPos0);
    testColorsComponents.push(testPos20);
    testColorsComponents.push(testPos40);
    testColorsComponents.push(testPos60);
    testColorsComponents.push(testPos80);
    testColorsComponents.push(testColorsExplained);
    testColorsComponents.push(mouseTestColors);
    testColorsComponents.push(clickablePos0);
    testColorsComponents.push(clickablePos20);
    testColorsComponents.push(clickablePos40);
    testColorsComponents.push(clickablePos60);
    testColorsComponents.push(clickablePos80);
    
    testColorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var prevButtonState;
var _mouseButtons;
var continueRoutine;
function testColorsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'testColors'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = testColorsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probeCircle* updates
    if (t >= 0.0 && probeCircle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeCircle.tStart = t;  // (not accounting for frame time here)
      probeCircle.frameNStart = frameN;  // exact frame index
      
      probeCircle.setAutoDraw(true);
    }

    
    // *testPos0* updates
    if (t >= 0.0 && testPos0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testPos0.tStart = t;  // (not accounting for frame time here)
      testPos0.frameNStart = frameN;  // exact frame index
      
      testPos0.setAutoDraw(true);
    }

    
    // *testPos20* updates
    if (t >= 0.0 && testPos20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testPos20.tStart = t;  // (not accounting for frame time here)
      testPos20.frameNStart = frameN;  // exact frame index
      
      testPos20.setAutoDraw(true);
    }

    
    // *testPos40* updates
    if (t >= 0.0 && testPos40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testPos40.tStart = t;  // (not accounting for frame time here)
      testPos40.frameNStart = frameN;  // exact frame index
      
      testPos40.setAutoDraw(true);
    }

    
    // *testPos60* updates
    if (t >= 0.0 && testPos60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testPos60.tStart = t;  // (not accounting for frame time here)
      testPos60.frameNStart = frameN;  // exact frame index
      
      testPos60.setAutoDraw(true);
    }

    
    // *testPos80* updates
    if (t >= 0.0 && testPos80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testPos80.tStart = t;  // (not accounting for frame time here)
      testPos80.frameNStart = frameN;  // exact frame index
      
      testPos80.setAutoDraw(true);
    }

    
    // *testColorsExplained* updates
    if (t >= 0.0 && testColorsExplained.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      testColorsExplained.tStart = t;  // (not accounting for frame time here)
      testColorsExplained.frameNStart = frameN;  // exact frame index
      
      testColorsExplained.setAutoDraw(true);
    }

    // *mouseTestColors* updates
    if (t >= 0.0 && mouseTestColors.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseTestColors.tStart = t;  // (not accounting for frame time here)
      mouseTestColors.frameNStart = frameN;  // exact frame index
      
      mouseTestColors.status = PsychoJS.Status.STARTED;
      mouseTestColors.mouseClock.reset();
      prevButtonState = mouseTestColors.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseTestColors.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseTestColors.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [clickablePos0,clickablePos20,clickablePos40,clickablePos60,clickablePos80]) {
            if (obj.contains(mouseTestColors)) {
              gotValidClick = true;
              mouseTestColors.clicked_name.push(obj.name)
            }
          }
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *clickablePos0* updates
    if (t >= 0.0 && clickablePos0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickablePos0.tStart = t;  // (not accounting for frame time here)
      clickablePos0.frameNStart = frameN;  // exact frame index
      
      clickablePos0.setAutoDraw(true);
    }

    
    // *clickablePos20* updates
    if (t >= 0.0 && clickablePos20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickablePos20.tStart = t;  // (not accounting for frame time here)
      clickablePos20.frameNStart = frameN;  // exact frame index
      
      clickablePos20.setAutoDraw(true);
    }

    
    // *clickablePos40* updates
    if (t >= 0.0 && clickablePos40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickablePos40.tStart = t;  // (not accounting for frame time here)
      clickablePos40.frameNStart = frameN;  // exact frame index
      
      clickablePos40.setAutoDraw(true);
    }

    
    // *clickablePos60* updates
    if (t >= 0.0 && clickablePos60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickablePos60.tStart = t;  // (not accounting for frame time here)
      clickablePos60.frameNStart = frameN;  // exact frame index
      
      clickablePos60.setAutoDraw(true);
    }

    
    // *clickablePos80* updates
    if (t >= 0.0 && clickablePos80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickablePos80.tStart = t;  // (not accounting for frame time here)
      clickablePos80.frameNStart = frameN;  // exact frame index
      
      clickablePos80.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testColorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function testColorsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'testColors'-------
    testColorsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouseTestColors.getPos();
    _mouseButtons = mouseTestColors.getPressed();
    psychoJS.experiment.addData('mouseTestColors.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseTestColors.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseTestColors.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseTestColors.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseTestColors.rightButton', _mouseButtons[2]);
    if (mouseTestColors.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouseTestColors.clicked_name', mouseTestColors.clicked_name[0]);}
    // the Routine "testColors" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    textInstructions.setHeight(fontSize);
    // setup some python lists for storing info about the mouseInstructions
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(textInstructions);
    instructionsComponents.push(mouseInstructions);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions* updates
    if (t >= 0.0 && textInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions.tStart = t;  // (not accounting for frame time here)
      textInstructions.frameNStart = frameN;  // exact frame index
      
      textInstructions.setAutoDraw(true);
    }

    // *mouseInstructions* updates
    if (t >= 0.0 && mouseInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseInstructions.tStart = t;  // (not accounting for frame time here)
      mouseInstructions.frameNStart = frameN;  // exact frame index
      
      mouseInstructions.status = PsychoJS.Status.STARTED;
      mouseInstructions.mouseClock.reset();
      prevButtonState = mouseInstructions.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseInstructions.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseInstructions.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    document.body.style.cursor='none';
    centralFixation.setSize([fixSize, fixSize]);
    stim1.setPos([stim1_x, stim1_y]);
    stim1.setSize([stimWidth, stimHeight]);
    stim1.setOri(stim1_orientation);
    stim1.setFillColor(new util.Color(stim1_color));
    stim1.setLineColor(new util.Color(stim1_color));
    stim2.setPos([stim2_x, stim2_y]);
    stim2.setSize([stimWidth, stimHeight]);
    stim2.setOri(stim2_orientation);
    stim2.setFillColor(new util.Color(stim2_color));
    stim2.setLineColor(new util.Color(stim2_color));
    stim3.setPos([stim3_x, stim3_y]);
    stim3.setSize([stimWidth, stimHeight]);
    stim3.setOri(stim3_orientation);
    stim3.setFillColor(new util.Color(stim3_color));
    stim3.setLineColor(new util.Color(stim3_color));
    stim4.setPos([stim4_x, stim4_y]);
    stim4.setSize([stimWidth, stimHeight]);
    stim4.setOri(stim4_orientation);
    stim4.setFillColor(new util.Color(stim4_color));
    stim4.setLineColor(new util.Color(stim4_color));
    stim5.setPos([stim5_x, stim5_y]);
    stim5.setSize([stimWidth, stimHeight]);
    stim5.setOri(stim5_orientation);
    stim5.setFillColor(new util.Color(stim5_color));
    stim5.setLineColor(new util.Color(stim5_color));
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(centralFixation);
    trialComponents.push(stim1);
    trialComponents.push(stim2);
    trialComponents.push(stim3);
    trialComponents.push(stim4);
    trialComponents.push(stim5);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *centralFixation* updates
    if (t >= 0 && centralFixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centralFixation.tStart = t;  // (not accounting for frame time here)
      centralFixation.frameNStart = frameN;  // exact frame index
      
      centralFixation.setAutoDraw(true);
    }

    frameRemains = 0 + preProbeDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (centralFixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      centralFixation.setAutoDraw(false);
    }
    
    // *stim1* updates
    if (t >= fixDuration && stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim1.tStart = t;  // (not accounting for frame time here)
      stim1.frameNStart = frameN;  // exact frame index
      
      stim1.setAutoDraw(true);
    }

    frameRemains = fixDuration + stimDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim1.setAutoDraw(false);
    }
    
    // *stim2* updates
    if (t >= fixDuration && stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim2.tStart = t;  // (not accounting for frame time here)
      stim2.frameNStart = frameN;  // exact frame index
      
      stim2.setAutoDraw(true);
    }

    frameRemains = fixDuration + stimDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim2.setAutoDraw(false);
    }
    
    // *stim3* updates
    if (t >= fixDuration && stim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim3.tStart = t;  // (not accounting for frame time here)
      stim3.frameNStart = frameN;  // exact frame index
      
      stim3.setAutoDraw(true);
    }

    frameRemains = fixDuration + stimDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim3.setAutoDraw(false);
    }
    
    // *stim4* updates
    if (t >= fixDuration && stim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim4.tStart = t;  // (not accounting for frame time here)
      stim4.frameNStart = frameN;  // exact frame index
      
      stim4.setAutoDraw(true);
    }

    frameRemains = fixDuration + stimDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim4.setAutoDraw(false);
    }
    
    // *stim5* updates
    if (t >= fixDuration && stim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim5.tStart = t;  // (not accounting for frame time here)
      stim5.frameNStart = frameN;  // exact frame index
      
      stim5.setAutoDraw(true);
    }

    frameRemains = fixDuration + stimDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var responseDemoComponents;
function responseDemoRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'responseDemo'-------
    t = 0;
    responseDemoClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    document.body.style.cursor='auto';
    respRingDemo.setSize([(stimRadius * 2), (stimRadius * 2)]);
    probeDemo.setSize([(fixSize * 2), (fixSize * 2)]);
    probeDemo.setFillColor(new util.Color(stim1_color));
    probeDemo.setLineColor(new util.Color(stim1_color));
    // setup some python lists for storing info about the mouseResponseDemo
    gotValidClick = false; // until a click is received
    textDemo.setHeight(fontSize);
    arrowImage.setPos([(stim1_x + 0.025), (stim1_y + 0.025)]);
    // keep track of which components have finished
    responseDemoComponents = [];
    responseDemoComponents.push(respRingDemo);
    responseDemoComponents.push(probeDemo);
    responseDemoComponents.push(mouseResponseDemo);
    responseDemoComponents.push(textDemo);
    responseDemoComponents.push(arrowImage);
    
    responseDemoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function responseDemoRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'responseDemo'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = responseDemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respRingDemo* updates
    if (t >= 0.0 && respRingDemo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respRingDemo.tStart = t;  // (not accounting for frame time here)
      respRingDemo.frameNStart = frameN;  // exact frame index
      
      respRingDemo.setAutoDraw(true);
    }

    
    // *probeDemo* updates
    if (t >= 0.0 && probeDemo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeDemo.tStart = t;  // (not accounting for frame time here)
      probeDemo.frameNStart = frameN;  // exact frame index
      
      probeDemo.setAutoDraw(true);
    }

    // *mouseResponseDemo* updates
    if (t >= 0.0 && mouseResponseDemo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseResponseDemo.tStart = t;  // (not accounting for frame time here)
      mouseResponseDemo.frameNStart = frameN;  // exact frame index
      
      mouseResponseDemo.status = PsychoJS.Status.STARTED;
      mouseResponseDemo.mouseClock.reset();
      prevButtonState = mouseResponseDemo.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseResponseDemo.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseResponseDemo.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *textDemo* updates
    if (t >= 0.0 && textDemo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textDemo.tStart = t;  // (not accounting for frame time here)
      textDemo.frameNStart = frameN;  // exact frame index
      
      textDemo.setAutoDraw(true);
    }

    
    // *arrowImage* updates
    if (t >= 1.0 && arrowImage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrowImage.tStart = t;  // (not accounting for frame time here)
      arrowImage.frameNStart = frameN;  // exact frame index
      
      arrowImage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseDemoComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseDemoRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'responseDemo'-------
    responseDemoComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    document.body.style.cursor='none';
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouseResponseDemo.getPos();
    _mouseButtons = mouseResponseDemo.getPressed();
    psychoJS.experiment.addData('mouseResponseDemo.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseResponseDemo.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseResponseDemo.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseResponseDemo.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseResponseDemo.rightButton', _mouseButtons[2]);
    // the Routine "responseDemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'ITI'-------
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    ITIComponents = [];
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function ITIRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'ITI'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'ITI'-------
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var currentBlockRows;
var startBlockComponents;
function startBlockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'startBlock'-------
    t = 0;
    startBlockClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    currentBlockRows = ((firstTrial.toString() + ":") + ((firstTrial + trialsPerBlock) - 1).toString());
    firstTrial = (firstTrial + trialsPerBlock);
    document.body.style.cursor='none';
    clickToBegin.setHeight(fontSize);
    // setup some python lists for storing info about the mouseToStartBlock
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    startBlockComponents = [];
    startBlockComponents.push(clickToBegin);
    startBlockComponents.push(mouseToStartBlock);
    
    startBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function startBlockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'startBlock'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = startBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *clickToBegin* updates
    if (t >= 0.0 && clickToBegin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clickToBegin.tStart = t;  // (not accounting for frame time here)
      clickToBegin.frameNStart = frameN;  // exact frame index
      
      clickToBegin.setAutoDraw(true);
    }

    // *mouseToStartBlock* updates
    if (t >= 0.0 && mouseToStartBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseToStartBlock.tStart = t;  // (not accounting for frame time here)
      mouseToStartBlock.frameNStart = frameN;  // exact frame index
      
      mouseToStartBlock.status = PsychoJS.Status.STARTED;
      mouseToStartBlock.mouseClock.reset();
      prevButtonState = mouseToStartBlock.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseToStartBlock.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseToStartBlock.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    startBlockComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startBlockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'startBlock'-------
    startBlockComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    // the Routine "startBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixPrepareComponents;
function fixPrepareRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'fixPrepare'-------
    t = 0;
    fixPrepareClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    centralFixation_Long.setSize([fixSize, fixSize]);
    // keep track of which components have finished
    fixPrepareComponents = [];
    fixPrepareComponents.push(centralFixation_Long);
    
    fixPrepareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function fixPrepareRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'fixPrepare'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixPrepareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *centralFixation_Long* updates
    if (t >= 0.0 && centralFixation_Long.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      centralFixation_Long.tStart = t;  // (not accounting for frame time here)
      centralFixation_Long.frameNStart = frameN;  // exact frame index
      
      centralFixation_Long.setAutoDraw(true);
    }

    frameRemains = 0.0 + fixDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (centralFixation_Long.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      centralFixation_Long.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixPrepareComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixPrepareRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'fixPrepare'-------
    fixPrepareComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "fixPrepare" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var responseComponents;
function responseRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'response'-------
    t = 0;
    responseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    document.body.style.cursor='auto';
    respRing.setSize([(stimRadius * 2), (stimRadius * 2)]);
    probe.setSize([(fixSize * 2), (fixSize * 2)]);
    probe.setFillColor(new util.Color(stim1_color));
    probe.setLineColor(new util.Color(stim1_color));
    // setup some python lists for storing info about the mouseResponse
    mouseResponse.clicked_name = [];
    gotValidClick = false; // until a click is received
    pos0.setPos([pos0_x, pos0_y]);
    pos0.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos5.setPos([pos5_x, pos5_y]);
    pos5.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos10.setPos([pos10_x, pos10_y]);
    pos10.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos15.setPos([pos15_x, pos15_y]);
    pos15.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos20.setPos([pos20_x, pos20_y]);
    pos20.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos25.setPos([pos25_x, pos25_y]);
    pos25.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos30.setPos([pos30_x, pos30_y]);
    pos30.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos35.setPos([pos35_x, pos35_y]);
    pos35.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos40.setPos([pos40_x, pos40_y]);
    pos40.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos45.setPos([pos45_x, pos45_y]);
    pos45.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos50.setPos([pos50_x, pos50_y]);
    pos50.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos55.setPos([pos55_x, pos55_y]);
    pos55.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos60.setPos([pos60_x, pos60_y]);
    pos60.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos65.setPos([pos65_x, pos65_y]);
    pos65.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos70.setPos([pos70_x, pos70_y]);
    pos70.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos75.setPos([pos75_x, pos75_y]);
    pos75.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos80.setPos([pos80_x, pos80_y]);
    pos80.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos85.setPos([pos85_x, pos85_y]);
    pos85.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos90.setPos([pos90_x, pos90_y]);
    pos90.setSize([(stimHeight * 2), (stimHeight * 2)]);
    pos95.setPos([pos95_x, pos95_y]);
    pos95.setSize([(stimHeight * 2), (stimHeight * 2)]);
    // keep track of which components have finished
    responseComponents = [];
    responseComponents.push(respRing);
    responseComponents.push(probe);
    responseComponents.push(mouseResponse);
    responseComponents.push(pos0);
    responseComponents.push(pos5);
    responseComponents.push(pos10);
    responseComponents.push(pos15);
    responseComponents.push(pos20);
    responseComponents.push(pos25);
    responseComponents.push(pos30);
    responseComponents.push(pos35);
    responseComponents.push(pos40);
    responseComponents.push(pos45);
    responseComponents.push(pos50);
    responseComponents.push(pos55);
    responseComponents.push(pos60);
    responseComponents.push(pos65);
    responseComponents.push(pos70);
    responseComponents.push(pos75);
    responseComponents.push(pos80);
    responseComponents.push(pos85);
    responseComponents.push(pos90);
    responseComponents.push(pos95);
    
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function responseRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'response'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *respRing* updates
    if (t >= 0.0 && respRing.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      respRing.tStart = t;  // (not accounting for frame time here)
      respRing.frameNStart = frameN;  // exact frame index
      
      respRing.setAutoDraw(true);
    }

    
    // *probe* updates
    if (t >= 0.0 && probe.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe.tStart = t;  // (not accounting for frame time here)
      probe.frameNStart = frameN;  // exact frame index
      
      probe.setAutoDraw(true);
    }

    // *mouseResponse* updates
    if (t >= 0.0 && mouseResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseResponse.tStart = t;  // (not accounting for frame time here)
      mouseResponse.frameNStart = frameN;  // exact frame index
      
      mouseResponse.status = PsychoJS.Status.STARTED;
      mouseResponse.mouseClock.reset();
      prevButtonState = mouseResponse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseResponse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseResponse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [pos0,pos5,pos10,pos15,pos20,pos25,pos30,pos35,pos40,pos45,pos50,pos55,pos60,pos65,pos70,pos75,pos80,pos85,pos90,pos95]) {
            if (obj.contains(mouseResponse)) {
              gotValidClick = true;
              mouseResponse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *pos0* updates
    if (t >= 0.0 && pos0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos0.tStart = t;  // (not accounting for frame time here)
      pos0.frameNStart = frameN;  // exact frame index
      
      pos0.setAutoDraw(true);
    }

    
    // *pos5* updates
    if (t >= 0.0 && pos5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos5.tStart = t;  // (not accounting for frame time here)
      pos5.frameNStart = frameN;  // exact frame index
      
      pos5.setAutoDraw(true);
    }

    
    // *pos10* updates
    if (t >= 0.0 && pos10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos10.tStart = t;  // (not accounting for frame time here)
      pos10.frameNStart = frameN;  // exact frame index
      
      pos10.setAutoDraw(true);
    }

    
    // *pos15* updates
    if (t >= 0.0 && pos15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos15.tStart = t;  // (not accounting for frame time here)
      pos15.frameNStart = frameN;  // exact frame index
      
      pos15.setAutoDraw(true);
    }

    
    // *pos20* updates
    if (t >= 0.0 && pos20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos20.tStart = t;  // (not accounting for frame time here)
      pos20.frameNStart = frameN;  // exact frame index
      
      pos20.setAutoDraw(true);
    }

    
    // *pos25* updates
    if (t >= 0.0 && pos25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos25.tStart = t;  // (not accounting for frame time here)
      pos25.frameNStart = frameN;  // exact frame index
      
      pos25.setAutoDraw(true);
    }

    
    // *pos30* updates
    if (t >= 0.0 && pos30.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos30.tStart = t;  // (not accounting for frame time here)
      pos30.frameNStart = frameN;  // exact frame index
      
      pos30.setAutoDraw(true);
    }

    
    // *pos35* updates
    if (t >= 0.0 && pos35.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos35.tStart = t;  // (not accounting for frame time here)
      pos35.frameNStart = frameN;  // exact frame index
      
      pos35.setAutoDraw(true);
    }

    
    // *pos40* updates
    if (t >= 0.0 && pos40.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos40.tStart = t;  // (not accounting for frame time here)
      pos40.frameNStart = frameN;  // exact frame index
      
      pos40.setAutoDraw(true);
    }

    
    // *pos45* updates
    if (t >= 0.0 && pos45.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos45.tStart = t;  // (not accounting for frame time here)
      pos45.frameNStart = frameN;  // exact frame index
      
      pos45.setAutoDraw(true);
    }

    
    // *pos50* updates
    if (t >= 0.0 && pos50.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos50.tStart = t;  // (not accounting for frame time here)
      pos50.frameNStart = frameN;  // exact frame index
      
      pos50.setAutoDraw(true);
    }

    
    // *pos55* updates
    if (t >= 0.0 && pos55.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos55.tStart = t;  // (not accounting for frame time here)
      pos55.frameNStart = frameN;  // exact frame index
      
      pos55.setAutoDraw(true);
    }

    
    // *pos60* updates
    if (t >= 0.0 && pos60.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos60.tStart = t;  // (not accounting for frame time here)
      pos60.frameNStart = frameN;  // exact frame index
      
      pos60.setAutoDraw(true);
    }

    
    // *pos65* updates
    if (t >= 0.0 && pos65.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos65.tStart = t;  // (not accounting for frame time here)
      pos65.frameNStart = frameN;  // exact frame index
      
      pos65.setAutoDraw(true);
    }

    
    // *pos70* updates
    if (t >= 0.0 && pos70.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos70.tStart = t;  // (not accounting for frame time here)
      pos70.frameNStart = frameN;  // exact frame index
      
      pos70.setAutoDraw(true);
    }

    
    // *pos75* updates
    if (t >= 0.0 && pos75.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos75.tStart = t;  // (not accounting for frame time here)
      pos75.frameNStart = frameN;  // exact frame index
      
      pos75.setAutoDraw(true);
    }

    
    // *pos80* updates
    if (t >= 0.0 && pos80.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos80.tStart = t;  // (not accounting for frame time here)
      pos80.frameNStart = frameN;  // exact frame index
      
      pos80.setAutoDraw(true);
    }

    
    // *pos85* updates
    if (t >= 0.0 && pos85.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos85.tStart = t;  // (not accounting for frame time here)
      pos85.frameNStart = frameN;  // exact frame index
      
      pos85.setAutoDraw(true);
    }

    
    // *pos90* updates
    if (t >= 0.0 && pos90.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos90.tStart = t;  // (not accounting for frame time here)
      pos90.frameNStart = frameN;  // exact frame index
      
      pos90.setAutoDraw(true);
    }

    
    // *pos95* updates
    if (t >= 0.0 && pos95.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pos95.tStart = t;  // (not accounting for frame time here)
      pos95.frameNStart = frameN;  // exact frame index
      
      pos95.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'response'-------
    responseComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    document.body.style.cursor='none';
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = mouseResponse.getPos();
    _mouseButtons = mouseResponse.getPressed();
    psychoJS.experiment.addData('mouseResponse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouseResponse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouseResponse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouseResponse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouseResponse.rightButton', _mouseButtons[2]);
    if (mouseResponse.clicked_name.length > 0) {
      psychoJS.experiment.addData('mouseResponse.clicked_name', mouseResponse.clicked_name[0]);}
    // the Routine "response" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
