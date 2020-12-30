/*************** 
 * Visual Test *
 ***************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.004, 0.004, 0.004]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'visual';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '', 'Are you wearing headphones (y/n)?': '', "Have you adjusted your computer's volume (y/n)?": '', 'Where are you doing this experiment (home/office/etc.)?': '', 'How noisy is your current environment from 1 to 10 (1=silent/10=very noisy)?': ''};

// Start code blocks for 'Before Experiment'
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
flowScheduler.add(startSessionRoutineBegin());
flowScheduler.add(startSessionRoutineEachFrame());
flowScheduler.add(startSessionRoutineEnd());
const blocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blocksLoopBegin, blocksLoopScheduler);
flowScheduler.add(blocksLoopScheduler);
flowScheduler.add(blocksLoopEnd);
flowScheduler.add(endSessionRoutineBegin());
flowScheduler.add(endSessionRoutineEachFrame());
flowScheduler.add(endSessionRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    { name: 'white_blob.png', path: 'resources/white_blob.png' }
  ]
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.10';
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


var startSessionClock;
var blocks_per_session;
var duration;
var silence_between;
var silence_before;
var silence_after;
var t_standard;
var comparison_list;
var max_appearance;
var trials_per_block;
var longer_count_session;
var box1_position;
var box1_size;
var text1_position;
var text1_size;
var box2_position;
var box2_size;
var text2_position;
var text2_size;
var fbText_position;
var fbText_size;
var wait_for_anykey;
var welcomeText;
var prepareBlockClock;
var shuffleArray;
var multiplyArray;
var instruction_3;
var interval1Box_3;
var interval2Box_3;
var interval1Text_3;
var interval2Text_3;
var cross_3;
var prepareTrialClock;
var stimulusClock;
var blob1;
var blob2;
var blob3;
var blob4;
var wait_for_arrow;
var instruction;
var interval1Box;
var interval2Box;
var interval1Text;
var interval2Text;
var cross;
var feedbackClock;
var feedbackText;
var tempIndex;
var instruction_2;
var interval1Box_2;
var interval2Box_2;
var interval1Text_2;
var interval2Text_2;
var cross_2;
var endBlockClock;
var blockFeedback;
var wait_for_next_block;
var endSessionClock;
var ThankYou;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "startSession"
  startSessionClock = new util.Clock();
  blocks_per_session = 2;
  duration = 500;
  silence_between = 1000;
  silence_before = 250;
  silence_after = 250;
  t_standard = 100;
  comparison_list = [79, 85, 91, 97, 103, 109, 115, 121];
  max_appearance = 2;
  trials_per_block = (comparison_list.length * max_appearance);
  longer_count_session = {};
  for (var x, _pj_c = 0, _pj_a = comparison_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      x = _pj_a[_pj_c];
      longer_count_session[x] = 0;
  }
  box1_position = [(- 403), 242];
  box1_size = [80, 48];
  text1_position = [(- 403), 322];
  text1_size = 48;
  box2_position = [403, 242];
  box2_size = [80, 48];
  text2_position = [403, 322];
  text2_size = 48;
  fbText_position = [0, (- 161)];
  fbText_size = 64;
  
  wait_for_anykey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: 'In this experiment, you will see two pairs of VISUAL stimuli presented one after the other. \n\nYou will be asked to identify which pair of stimuli, the first or the second, was separated by the longest duration. Please make your decision using the Left or Right Arrow keys. \n\nPress Right Arrow to start experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "prepareBlock"
  prepareBlockClock = new util.Clock();
  shuffleArray = function(array) {
      var arrayCopy, selected, selector, shuffled;
      shuffled = [];
      arrayCopy = [...array];
      while ((arrayCopy.length > 0)) {
          selector = Number.parseInt((Math.random() * arrayCopy.length));
          selected = arrayCopy.splice(selector,1);
          shuffled.push(selected);
      }
      return shuffled;
  }
  multiplyArray = function(array, n) {
      var result;
      result = [];
      for (var ele, _pj_c = 0, _pj_a = array, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          ele = _pj_a[_pj_c];
          for (var i = 0, _pj_d = n; (i < _pj_d); i += 1) {
              result.push(ele);
          }
      }
      return result;
  }
  
  instruction_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_3',
    text: 'Which pair of stimuli was separated by the longest duration?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: 70, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  interval1Box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'interval1Box_3', units : 'pix', 
    width: box1_size[0], height: box1_size[1],
    ori: 0, pos: box1_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  interval2Box_3 = new visual.Rect ({
    win: psychoJS.window, name: 'interval2Box_3', units : 'pix', 
    width: box2_size[0], height: box2_size[1],
    ori: 0, pos: box2_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  interval1Text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval1Text_3',
    text: 'Pair 1',
    font: 'Arial',
    units: 'pix', 
    pos: text1_position, height: text1_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -4.0 
  });
  
  interval2Text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval2Text_3',
    text: 'Pair 2',
    font: 'Arial',
    units: 'pix', 
    pos: text2_position, height: text2_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -5.0 
  });
  
  cross_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_3',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -6.0 
  });
  
  // Initialize components for Routine "prepareTrial"
  prepareTrialClock = new util.Clock();
  // Initialize components for Routine "stimulus"
  stimulusClock = new util.Clock();
  blob1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blob1', units : 'pix', 
    image : 'white_blob.png', mask : undefined,
    ori : 0, pos : [(- 404), 0], size : 200,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  blob2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blob2', units : 'pix', 
    image : 'white_blob.png', mask : undefined,
    ori : 0, pos : [(- 404), 0], size : 200,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  blob3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blob3', units : 'pix', 
    image : 'white_blob.png', mask : undefined,
    ori : 0, pos : [404, 0], size : 200,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  blob4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blob4', units : 'pix', 
    image : 'white_blob.png', mask : undefined,
    ori : 0, pos : [404, 0], size : 200,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  wait_for_arrow = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: 'Which pair of stimuli was separated by the longest duration?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: 70, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  interval1Box = new visual.Rect ({
    win: psychoJS.window, name: 'interval1Box', units : 'pix', 
    width: box1_size[0], height: box1_size[1],
    ori: 0, pos: box1_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  interval2Box = new visual.Rect ({
    win: psychoJS.window, name: 'interval2Box', units : 'pix', 
    width: box2_size[0], height: box2_size[1],
    ori: 0, pos: box2_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  interval1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval1Text',
    text: 'Pair 1',
    font: 'Arial',
    units: 'pix', 
    pos: text1_position, height: text1_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -8.0 
  });
  
  interval2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval2Text',
    text: 'Pair 2',
    font: 'Arial',
    units: 'pix', 
    pos: text2_position, height: text2_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -9.0 
  });
  
  cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  feedbackText = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbackText',
    text: 'default text',
    font: 'Arial',
    units: 'pix', 
    pos: fbText_position, height: fbText_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  tempIndex = 0;
  
  instruction_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_2',
    text: 'Which pair of stimuli was separated by the longest duration?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.05,  wrapWidth: 70, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -5.0 
  });
  
  interval1Box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'interval1Box_2', units : 'pix', 
    width: box1_size[0], height: box1_size[1],
    ori: 0, pos: box1_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  interval2Box_2 = new visual.Rect ({
    win: psychoJS.window, name: 'interval2Box_2', units : 'pix', 
    width: box2_size[0], height: box2_size[1],
    ori: 0, pos: box2_position,
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color(1.0),
    opacity: 1, depth: -7, interpolate: true,
  });
  
  interval1Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval1Text_2',
    text: 'Pair 1',
    font: 'Arial',
    units: 'pix', 
    pos: text1_position, height: text1_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -8.0 
  });
  
  interval2Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'interval2Text_2',
    text: 'Pair 2',
    font: 'Arial',
    units: 'pix', 
    pos: text2_position, height: text2_size,  wrapWidth: undefined, ori: 0,
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: 1,
    depth: -9.0 
  });
  
  cross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'cross_2',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "endBlock"
  endBlockClock = new util.Clock();
  blockFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'blockFeedback',
    text: 'default text',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 100, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  wait_for_next_block = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "endSession"
  endSessionClock = new util.Clock();
  ThankYou = new visual.TextStim({
    win: psychoJS.window,
    name: 'ThankYou',
    text: 'End of Experiment\n\nWell done!\n\nThank you very much, the experiment is now over.\n\nPlease call the experimenter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _wait_for_anykey_allKeys;
var startSessionComponents;
function startSessionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'startSession'-------
    t = 0;
    startSessionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wait_for_anykey.keys = undefined;
    wait_for_anykey.rt = undefined;
    _wait_for_anykey_allKeys = [];
    // keep track of which components have finished
    startSessionComponents = [];
    startSessionComponents.push(wait_for_anykey);
    startSessionComponents.push(welcomeText);
    
    for (const thisComponent of startSessionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function startSessionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'startSession'-------
    // get current time
    t = startSessionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wait_for_anykey* updates
    if (t >= 0.0 && wait_for_anykey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait_for_anykey.tStart = t;  // (not accounting for frame time here)
      wait_for_anykey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wait_for_anykey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wait_for_anykey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wait_for_anykey.clearEvents(); });
    }

    if (wait_for_anykey.status === PsychoJS.Status.STARTED) {
      let theseKeys = wait_for_anykey.getKeys({keyList: ['space', 'left', 'right', 'd'], waitRelease: false});
      _wait_for_anykey_allKeys = _wait_for_anykey_allKeys.concat(theseKeys);
      if (_wait_for_anykey_allKeys.length > 0) {
        wait_for_anykey.keys = _wait_for_anykey_allKeys[_wait_for_anykey_allKeys.length - 1].name;  // just the last key pressed
        wait_for_anykey.rt = _wait_for_anykey_allKeys[_wait_for_anykey_allKeys.length - 1].rt;
        // was this correct?
        if (wait_for_anykey.keys == 'd') {
            wait_for_anykey.corr = 1;
        } else {
            wait_for_anykey.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *welcomeText* updates
    if (t >= 0.0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
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
    for (const thisComponent of startSessionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function startSessionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'startSession'-------
    for (const thisComponent of startSessionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((wait_for_anykey.corr === 1)) {
        trials_per_block = 10;
        blocks_per_session = 2;
    }
    
    // the Routine "startSession" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blocks;
var currentLoop;
function blocksLoopBegin(blocksLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  blocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: blocks_per_session, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'blocks'
  });
  psychoJS.experiment.addLoop(blocks); // add the loop to the experiment
  currentLoop = blocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of blocks) {
    const snapshot = blocks.getSnapshot();
    blocksLoopScheduler.add(importConditions(snapshot));
    blocksLoopScheduler.add(prepareBlockRoutineBegin(snapshot));
    blocksLoopScheduler.add(prepareBlockRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(prepareBlockRoutineEnd(snapshot));
    const mytrialsLoopScheduler = new Scheduler(psychoJS);
    blocksLoopScheduler.add(mytrialsLoopBegin, mytrialsLoopScheduler);
    blocksLoopScheduler.add(mytrialsLoopScheduler);
    blocksLoopScheduler.add(mytrialsLoopEnd);
    blocksLoopScheduler.add(endBlockRoutineBegin(snapshot));
    blocksLoopScheduler.add(endBlockRoutineEachFrame(snapshot));
    blocksLoopScheduler.add(endBlockRoutineEnd(snapshot));
    blocksLoopScheduler.add(endLoopIteration(blocksLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var mytrials;
function mytrialsLoopBegin(mytrialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  mytrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: trials_per_block, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'mytrials'
  });
  psychoJS.experiment.addLoop(mytrials); // add the loop to the experiment
  currentLoop = mytrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisMytrial of mytrials) {
    const snapshot = mytrials.getSnapshot();
    mytrialsLoopScheduler.add(importConditions(snapshot));
    mytrialsLoopScheduler.add(prepareTrialRoutineBegin(snapshot));
    mytrialsLoopScheduler.add(prepareTrialRoutineEachFrame(snapshot));
    mytrialsLoopScheduler.add(prepareTrialRoutineEnd(snapshot));
    mytrialsLoopScheduler.add(stimulusRoutineBegin(snapshot));
    mytrialsLoopScheduler.add(stimulusRoutineEachFrame(snapshot));
    mytrialsLoopScheduler.add(stimulusRoutineEnd(snapshot));
    mytrialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
    mytrialsLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    mytrialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
    mytrialsLoopScheduler.add(endLoopIteration(mytrialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function mytrialsLoopEnd() {
  psychoJS.experiment.removeLoop(mytrials);

  return Scheduler.Event.NEXT;
}


function blocksLoopEnd() {
  psychoJS.experiment.removeLoop(blocks);

  return Scheduler.Event.NEXT;
}


var comparison_values;
var longer_count;
var prepareBlockComponents;
function prepareBlockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prepareBlock'-------
    t = 0;
    prepareBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    comparison_values = multiplyArray(comparison_list, max_appearance);
    comparison_values = shuffleArray(comparison_values);
    console.log(comparison_values);
    longer_count = {};
    for (var x, _pj_c = 0, _pj_a = comparison_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        x = _pj_a[_pj_c];
        longer_count[x] = 0;
    }
    
    // keep track of which components have finished
    prepareBlockComponents = [];
    prepareBlockComponents.push(instruction_3);
    prepareBlockComponents.push(interval1Box_3);
    prepareBlockComponents.push(interval2Box_3);
    prepareBlockComponents.push(interval1Text_3);
    prepareBlockComponents.push(interval2Text_3);
    prepareBlockComponents.push(cross_3);
    
    for (const thisComponent of prepareBlockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function prepareBlockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prepareBlock'-------
    // get current time
    t = prepareBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_3* updates
    if (t >= 0 && instruction_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_3.tStart = t;  // (not accounting for frame time here)
      instruction_3.frameNStart = frameN;  // exact frame index
      
      instruction_3.setAutoDraw(true);
    }

    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((instruction_3.status === PsychoJS.Status.STARTED || instruction_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      instruction_3.setAutoDraw(false);
    }
    
    // *interval1Box_3* updates
    if (t >= 0 && interval1Box_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Box_3.tStart = t;  // (not accounting for frame time here)
      interval1Box_3.frameNStart = frameN;  // exact frame index
      
      interval1Box_3.setAutoDraw(true);
    }

    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval1Box_3.status === PsychoJS.Status.STARTED || interval1Box_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval1Box_3.setAutoDraw(false);
    }
    
    // *interval2Box_3* updates
    if (t >= 0.0 && interval2Box_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Box_3.tStart = t;  // (not accounting for frame time here)
      interval2Box_3.frameNStart = frameN;  // exact frame index
      
      interval2Box_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval2Box_3.status === PsychoJS.Status.STARTED || interval2Box_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval2Box_3.setAutoDraw(false);
    }
    
    // *interval1Text_3* updates
    if (t >= 0.0 && interval1Text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Text_3.tStart = t;  // (not accounting for frame time here)
      interval1Text_3.frameNStart = frameN;  // exact frame index
      
      interval1Text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval1Text_3.status === PsychoJS.Status.STARTED || interval1Text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval1Text_3.setAutoDraw(false);
    }
    
    // *interval2Text_3* updates
    if (t >= 0.0 && interval2Text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Text_3.tStart = t;  // (not accounting for frame time here)
      interval2Text_3.frameNStart = frameN;  // exact frame index
      
      interval2Text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval2Text_3.status === PsychoJS.Status.STARTED || interval2Text_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval2Text_3.setAutoDraw(false);
    }
    
    // *cross_3* updates
    if (t >= 0.0 && cross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_3.tStart = t;  // (not accounting for frame time here)
      cross_3.frameNStart = frameN;  // exact frame index
      
      cross_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cross_3.status === PsychoJS.Status.STARTED || cross_3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cross_3.setAutoDraw(false);
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
    for (const thisComponent of prepareBlockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prepareBlockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prepareBlock'-------
    for (const thisComponent of prepareBlockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var cv;
var interval1;
var interval2;
var total;
var correctString;
var duration_s;
var silence_before_s;
var silence_after_s;
var silence_between_s;
var t_standard_s;
var cv_s;
var marker;
var blob1_start;
var blob2_start;
var blob3_start;
var blob4_start;
var prepareTrialComponents;
function prepareTrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'prepareTrial'-------
    t = 0;
    prepareTrialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    cv = comparison_values.shift();
    console.log(("cv : " + cv.toString()));
    interval1 = t_standard;
    interval2 = cv;
    total = 0;
    
    if ((interval1 > interval2)) {
        correctString = "left";
    } else {
        correctString = "right";
    }
    console.log(("correct = " + correctString));
    
    duration_s = (duration / 1000.0);
    silence_before_s = (silence_before / 1000.0);
    silence_after_s = (silence_after / 1000.0);
    silence_between_s = (silence_between / 1000.0);
    t_standard_s = (t_standard / 1000.0);
    cv_s = (cv / 1000.0);
    marker = 0;
    marker += silence_before_s;
    blob1_start = marker;
    marker += duration_s;
    marker += t_standard_s;
    blob2_start = marker;
    marker += duration_s;
    marker += silence_between_s;
    blob3_start = marker;
    marker += duration_s;
    marker += cv_s;
    blob4_start = marker;
    marker += duration_s;
    total = marker;
    
    // keep track of which components have finished
    prepareTrialComponents = [];
    
    for (const thisComponent of prepareTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function prepareTrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'prepareTrial'-------
    // get current time
    t = prepareTrialClock.getTime();
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
    for (const thisComponent of prepareTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function prepareTrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'prepareTrial'-------
    for (const thisComponent of prepareTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "prepareTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _wait_for_arrow_allKeys;
var stimulusComponents;
function stimulusRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'stimulus'-------
    t = 0;
    stimulusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    wait_for_arrow.keys = undefined;
    wait_for_arrow.rt = undefined;
    _wait_for_arrow_allKeys = [];
    // keep track of which components have finished
    stimulusComponents = [];
    stimulusComponents.push(blob1);
    stimulusComponents.push(blob2);
    stimulusComponents.push(blob3);
    stimulusComponents.push(blob4);
    stimulusComponents.push(wait_for_arrow);
    stimulusComponents.push(instruction);
    stimulusComponents.push(interval1Box);
    stimulusComponents.push(interval2Box);
    stimulusComponents.push(interval1Text);
    stimulusComponents.push(interval2Text);
    stimulusComponents.push(cross);
    
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function stimulusRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'stimulus'-------
    // get current time
    t = stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blob1* updates
    if (t >= blob1_start && blob1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blob1.tStart = t;  // (not accounting for frame time here)
      blob1.frameNStart = frameN;  // exact frame index
      
      blob1.setAutoDraw(true);
    }

    frameRemains = blob1_start + duration_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((blob1.status === PsychoJS.Status.STARTED || blob1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      blob1.setAutoDraw(false);
    }
    
    // *blob2* updates
    if (t >= blob2_start && blob2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blob2.tStart = t;  // (not accounting for frame time here)
      blob2.frameNStart = frameN;  // exact frame index
      
      blob2.setAutoDraw(true);
    }

    frameRemains = blob2_start + duration_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((blob2.status === PsychoJS.Status.STARTED || blob2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      blob2.setAutoDraw(false);
    }
    
    // *blob3* updates
    if (t >= blob3_start && blob3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blob3.tStart = t;  // (not accounting for frame time here)
      blob3.frameNStart = frameN;  // exact frame index
      
      blob3.setAutoDraw(true);
    }

    frameRemains = blob3_start + duration_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((blob3.status === PsychoJS.Status.STARTED || blob3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      blob3.setAutoDraw(false);
    }
    
    // *blob4* updates
    if (t >= blob4_start && blob4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blob4.tStart = t;  // (not accounting for frame time here)
      blob4.frameNStart = frameN;  // exact frame index
      
      blob4.setAutoDraw(true);
    }

    frameRemains = blob4_start + duration_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((blob4.status === PsychoJS.Status.STARTED || blob4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      blob4.setAutoDraw(false);
    }
    
    // *wait_for_arrow* updates
    if (t >= total && wait_for_arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait_for_arrow.tStart = t;  // (not accounting for frame time here)
      wait_for_arrow.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wait_for_arrow.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wait_for_arrow.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wait_for_arrow.clearEvents(); });
    }

    if (wait_for_arrow.status === PsychoJS.Status.STARTED) {
      let theseKeys = wait_for_arrow.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _wait_for_arrow_allKeys = _wait_for_arrow_allKeys.concat(theseKeys);
      if (_wait_for_arrow_allKeys.length > 0) {
        wait_for_arrow.keys = _wait_for_arrow_allKeys[_wait_for_arrow_allKeys.length - 1].name;  // just the last key pressed
        wait_for_arrow.rt = _wait_for_arrow_allKeys[_wait_for_arrow_allKeys.length - 1].rt;
        // was this correct?
        if (wait_for_arrow.keys == correctString) {
            wait_for_arrow.corr = 1;
        } else {
            wait_for_arrow.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instruction* updates
    if (t >= 0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }

    
    // *interval1Box* updates
    if (t >= 0.0 && interval1Box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Box.tStart = t;  // (not accounting for frame time here)
      interval1Box.frameNStart = frameN;  // exact frame index
      
      interval1Box.setAutoDraw(true);
    }

    
    // *interval2Box* updates
    if (t >= 0.0 && interval2Box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Box.tStart = t;  // (not accounting for frame time here)
      interval2Box.frameNStart = frameN;  // exact frame index
      
      interval2Box.setAutoDraw(true);
    }

    
    // *interval1Text* updates
    if (t >= 0.0 && interval1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Text.tStart = t;  // (not accounting for frame time here)
      interval1Text.frameNStart = frameN;  // exact frame index
      
      interval1Text.setAutoDraw(true);
    }

    
    // *interval2Text* updates
    if (t >= 0.0 && interval2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Text.tStart = t;  // (not accounting for frame time here)
      interval2Text.frameNStart = frameN;  // exact frame index
      
      interval2Text.setAutoDraw(true);
    }

    
    // *cross* updates
    if (t >= 0.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
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
    for (const thisComponent of stimulusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function stimulusRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'stimulus'-------
    for (const thisComponent of stimulusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (wait_for_arrow.keys === undefined) {
      if (['None','none',undefined].includes(correctString)) {
         wait_for_arrow.corr = 1;  // correct non-response
      } else {
         wait_for_arrow.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('wait_for_arrow.keys', wait_for_arrow.keys);
    psychoJS.experiment.addData('wait_for_arrow.corr', wait_for_arrow.corr);
    if (typeof wait_for_arrow.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('wait_for_arrow.rt', wait_for_arrow.rt);
        routineTimer.reset();
        }
    
    wait_for_arrow.stop();
    // the Routine "stimulus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_text;
var feedBackColor;
var box1Color;
var box2Color;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    if ((wait_for_arrow.corr === 1)) {
        feedback_text = "Correct";
        feedBackColor = "Green";
    } else {
        feedback_text = "Incorrect";
        feedBackColor = "Red";
    }
    box1Color = "white";
    box2Color = "white";
    if ((wait_for_arrow.keys === "left")) {
        box1Color = "Blue";
    } else {
        box2Color = "Blue";
    }
    
    feedbackText.setColor(new util.Color(feedBackColor));
    feedbackText.setText(feedback_text);
    interval1Box_2.setFillColor(new util.Color(box1Color));
    interval2Box_2.setFillColor(new util.Color(box2Color));
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedbackText);
    feedbackComponents.push(instruction_2);
    feedbackComponents.push(interval1Box_2);
    feedbackComponents.push(interval2Box_2);
    feedbackComponents.push(interval1Text_2);
    feedbackComponents.push(interval2Text_2);
    feedbackComponents.push(cross_2);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbackText* updates
    if (t >= 0.0 && feedbackText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackText.tStart = t;  // (not accounting for frame time here)
      feedbackText.frameNStart = frameN;  // exact frame index
      
      feedbackText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedbackText.status === PsychoJS.Status.STARTED || feedbackText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedbackText.setAutoDraw(false);
    }
    
    // *instruction_2* updates
    if (t >= 0 && instruction_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_2.tStart = t;  // (not accounting for frame time here)
      instruction_2.frameNStart = frameN;  // exact frame index
      
      instruction_2.setAutoDraw(true);
    }

    frameRemains = 0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((instruction_2.status === PsychoJS.Status.STARTED || instruction_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      instruction_2.setAutoDraw(false);
    }
    
    // *interval1Box_2* updates
    if (t >= 0.0 && interval1Box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Box_2.tStart = t;  // (not accounting for frame time here)
      interval1Box_2.frameNStart = frameN;  // exact frame index
      
      interval1Box_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval1Box_2.status === PsychoJS.Status.STARTED || interval1Box_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval1Box_2.setAutoDraw(false);
    }
    
    // *interval2Box_2* updates
    if (t >= 0.0 && interval2Box_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Box_2.tStart = t;  // (not accounting for frame time here)
      interval2Box_2.frameNStart = frameN;  // exact frame index
      
      interval2Box_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval2Box_2.status === PsychoJS.Status.STARTED || interval2Box_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval2Box_2.setAutoDraw(false);
    }
    
    // *interval1Text_2* updates
    if (t >= 0.0 && interval1Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval1Text_2.tStart = t;  // (not accounting for frame time here)
      interval1Text_2.frameNStart = frameN;  // exact frame index
      
      interval1Text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval1Text_2.status === PsychoJS.Status.STARTED || interval1Text_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval1Text_2.setAutoDraw(false);
    }
    
    // *interval2Text_2* updates
    if (t >= 0.0 && interval2Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      interval2Text_2.tStart = t;  // (not accounting for frame time here)
      interval2Text_2.frameNStart = frameN;  // exact frame index
      
      interval2Text_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((interval2Text_2.status === PsychoJS.Status.STARTED || interval2Text_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      interval2Text_2.setAutoDraw(false);
    }
    
    // *cross_2* updates
    if (t >= 0.0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cross_2.status === PsychoJS.Status.STARTED || cross_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cross_2.setAutoDraw(false);
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
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var prob_longer;
function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    mytrials.addData("correct_answer", correctString);
    if ((wait_for_arrow.corr === 1)) {
        mytrials.addData("answer", "C");
    } else {
        mytrials.addData("answer", "IC");
    }
    mytrials.addData("cv", cv);
    
    if ((wait_for_arrow.keys === "right")) {
        longer_count[cv] += 1;
        longer_count_session[cv] += 1;
        mytrials.addData("count_as_longer", 1);
    }
    
    console.log(tempIndex);
    if ((tempIndex === (trials_per_block - 1))) {
        console.log("adding prob_longer");
        prob_longer = [];
        for (var x, _pj_c = 0, _pj_a = comparison_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            x = _pj_a[_pj_c];
            prob_longer.push(((longer_count[x] * 1.0) / max_appearance));
        }
        mytrials.addData("prob_longer", prob_longer);
    }
    tempIndex = ((tempIndex + 1) % trials_per_block);
    
    return Scheduler.Event.NEXT;
  };
}


var block_feedback;
var _wait_for_next_block_allKeys;
var endBlockComponents;
function endBlockRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'endBlock'-------
    t = 0;
    endBlockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    block_feedback = "Take a break if needed.\nPress RIGHT ARROW to start the next block.";
    
    blockFeedback.setText(block_feedback);
    wait_for_next_block.keys = undefined;
    wait_for_next_block.rt = undefined;
    _wait_for_next_block_allKeys = [];
    // keep track of which components have finished
    endBlockComponents = [];
    endBlockComponents.push(blockFeedback);
    endBlockComponents.push(wait_for_next_block);
    
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endBlockRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'endBlock'-------
    // get current time
    t = endBlockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blockFeedback* updates
    if (t >= 0.0 && blockFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blockFeedback.tStart = t;  // (not accounting for frame time here)
      blockFeedback.frameNStart = frameN;  // exact frame index
      
      blockFeedback.setAutoDraw(true);
    }

    
    // *wait_for_next_block* updates
    if (t >= 0.0 && wait_for_next_block.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait_for_next_block.tStart = t;  // (not accounting for frame time here)
      wait_for_next_block.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { wait_for_next_block.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { wait_for_next_block.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { wait_for_next_block.clearEvents(); });
    }

    if (wait_for_next_block.status === PsychoJS.Status.STARTED) {
      let theseKeys = wait_for_next_block.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _wait_for_next_block_allKeys = _wait_for_next_block_allKeys.concat(theseKeys);
      if (_wait_for_next_block_allKeys.length > 0) {
        wait_for_next_block.keys = _wait_for_next_block_allKeys[_wait_for_next_block_allKeys.length - 1].name;  // just the last key pressed
        wait_for_next_block.rt = _wait_for_next_block_allKeys[_wait_for_next_block_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
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
    for (const thisComponent of endBlockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endBlockRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'endBlock'-------
    for (const thisComponent of endBlockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "endBlock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var prob_longer_session;
var endSessionComponents;
function endSessionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'endSession'-------
    t = 0;
    endSessionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    prob_longer_session = [];
    for (var x, _pj_c = 0, _pj_a = comparison_list, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        x = _pj_a[_pj_c];
        prob_longer_session.push(((longer_count_session[x] * 1.0) / (max_appearance * blocks_per_session)));
    }
    
    psychoJS.experiment.addData("prob_longer_session", prob_longer_session);
    
    // keep track of which components have finished
    endSessionComponents = [];
    endSessionComponents.push(ThankYou);
    
    for (const thisComponent of endSessionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endSessionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'endSession'-------
    // get current time
    t = endSessionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ThankYou* updates
    if (t >= 0 && ThankYou.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ThankYou.tStart = t;  // (not accounting for frame time here)
      ThankYou.frameNStart = frameN;  // exact frame index
      
      ThankYou.setAutoDraw(true);
    }

    frameRemains = 0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((ThankYou.status === PsychoJS.Status.STARTED || ThankYou.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      ThankYou.setAutoDraw(false);
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
    for (const thisComponent of endSessionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endSessionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'endSession'-------
    for (const thisComponent of endSessionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
