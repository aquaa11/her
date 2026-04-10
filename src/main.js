import { gsap } from "gsap";

import "./styles/index.css";

import { backgroundLayer } from "./components/backgroundLayer.js";
import { openingScreen } from "./components/openingScreen.js";
import { quizScreen } from "./components/quizScreen.js";
import { doneScreen } from "./components/doneScreen.js";
import { questions } from "./data/questions.js";
import { getRightMessage, getWrongMessage } from "./data/feedbackMessages.js";

import bgSky from "./assets/bg2.jpg";
import mem1 from "./assets/freyacrop.png";
import mem2 from "./assets/freya3crop.png";
import mem3 from "./assets/freya4crop.png";
import mem4 from "./assets/freya5crop.png";

import duo from "./assets/char/duo.png";
import kenjud from "./assets/char/kenjud.png";
import mortyHug from "./assets/char/morty_hug.png";
import mortyHappy from "./assets/char/morty_happy.png";
import mortySad from "./assets/char/morty_sad.png";
import mortyCry from "./assets/char/morty_cry.png";
import mortySalt from "./assets/char/morty_salt.png";
import stickerCuteLove from "./assets/char/cute_love.png";
import stickerCuteFlower from "./assets/char/cute_flower.png";
import stickerCatFlower from "./assets/char/cat_flower.png";
import stickerCatBucket from "./assets/char/cat_bucket.png";

import monyetBunga from "./assets/char/monyet_bunga.png";
import monyetFlirt from "./assets/char/monyet_flirt.png";
import monyetIde from "./assets/char/monyet_ide.png";
import monyetKaget from "./assets/char/monyet_kaget.png";
import monyetPrincess from "./assets/char/monyet_princess.png";
import monyetSedih from "./assets/char/monyet_sedih.png";

import balloonA from "./assets/random/baloon1.png";
import balloonB from "./assets/random/baloon2.png";
import balloonC from "./assets/random/baloon3.png";
import chatCelebrate from "./assets/random/chat_celebrate.png";
import chatCheers from "./assets/random/chat_cheers.png";
import chatHbd from "./assets/random/chat_hbd.png";
import heartSprite from "./assets/random/heart.png";
import starA from "./assets/random/stars.png";
import starB from "./assets/random/stars2.png";
import gift from "./assets/random/gift.png";
import propCake from "./assets/random/cake2.png";
import propHat from "./assets/random/hat2.png";
import particleCircle from "./assets/random/particlecircle.png";
import particlePlus from "./assets/random/particleplus.png";
import candleCake from "./assets/random/for_candle_cake.png";
import candleSprite from "./assets/random/sprite_candle.png";

import wrongSound from "./assets/sound/fah.mp3";
import rightSound from "./assets/sound/wi.mp3";
import successSound from "./assets/sound/happy-happy-happy-song.mp3";
import bgmTrack from "./assets/sound/hbd.mp3";
import brainFartSound from "./assets/sound/brain-fart.mp3";
import candleBlowingSound from "./assets/sound/candle-blowing.mp3";
import candleBgmTrack from "./assets/sound/metal-happy-birthday.mp3";
import sfx1 from "./assets/sound/sfx1.mp3";
import sfx2 from "./assets/sound/sfx2.mp3";
import sfx3 from "./assets/sound/sfx3.mp3";
import sfx4 from "./assets/sound/sfx4.mp3";
import sfx5 from "./assets/sound/sfx5.mp3";
import sfx6 from "./assets/sound/sfx6.mp3";

const assets = {
  bgSky,
  mem1,
  mem2,
  mem3,
  mem4,
  duo,
  kenjud,
  mortyHug,
  mortyHappy,
  mortySad,
  mortyCry,
  mortySalt,
  stickerCuteLove,
  stickerCuteFlower,
  stickerCatFlower,
  stickerCatBucket,
  monyetBunga,
  monyetFlirt,
  monyetIde,
  monyetKaget,
  monyetPrincess,
  monyetSedih,
  balloonA,
  balloonB,
  balloonC,
  chatCelebrate,
  chatCheers,
  chatHbd,
  heartSprite,
  starA,
  starB,
  gift,
  propCake,
  propHat,
  candleCake,
  candleSprite,
  particleCircle,
  particlePlus,
  wrongSound,
  rightSound,
  successSound,
  bgmTrack,
  brainFartSound,
  candleBlowingSound,
  candleBgmTrack,
  sfx1,
  sfx2,
  sfx3,
  sfx4,
  sfx5,
  sfx6,
  propChatCheers: chatCheers
};

document.querySelector("#app").innerHTML = `
  <div class="pixel-app">
    ${backgroundLayer(assets)}
    ${openingScreen(assets)}
    ${quizScreen(assets)}
    ${doneScreen(assets)}
    <div id="fxLayer" class="fx-layer" aria-hidden="true"></div>
  </div>
`;

const refs = {
  opening: document.getElementById("openingScreen"),
  quiz: document.getElementById("quizScreen"),
  done: document.getElementById("doneScreen"),
  startBtn: document.getElementById("startBtn"),
  openingLine1: document.getElementById("openingLine1"),
  openingLine2: document.getElementById("openingLine2"),
  progressText: document.getElementById("progressText"),
  questionText: document.getElementById("questionText"),
  optionsWrap: document.getElementById("optionsWrap"),
  feedbackText: document.getElementById("feedbackText"),
  quizCard: document.getElementById("quizCard"),
  quizCharacter: document.getElementById("quizCharacter"),
  moodText: document.getElementById("moodText"),
  fxLayer: document.getElementById("fxLayer"),
  freyaFloatLeft: document.getElementById("freyaFloatLeft"),
  freyaFloatRight: document.getElementById("freyaFloatRight"),
  doneCard: document.getElementById("doneCard"),
  doneStepMonkey: document.getElementById("doneStepMonkey"),
  doneStepCandle: document.getElementById("doneStepCandle"),
  doneStepLetter: document.getElementById("doneStepLetter"),
  monyetPicker: document.getElementById("monyetPicker"),
  monyetResult: document.getElementById("monyetResult"),
  monkeyNextBtn: document.getElementById("monkeyNextBtn"),
  micHint: document.getElementById("micHint"),
  micBtn: document.getElementById("micBtn"),
  micLevelFill: document.getElementById("micLevelFill"),
  candleFlames: Array.from(document.querySelectorAll(".candle-flame")),
  candleNextBtn: document.getElementById("candleNextBtn"),
  letterScroll: document.getElementById("letterScroll")
};

const state = {
  currentQuestion: 0,
  isLocked: false,
  attemptsByQuestion: {},
  freyaSwapTimer: null,
  selectedMonkeyMood: null,
  doneStep: "monkey",
  candleFrameTimer: null,
  micStream: null,
  audioContext: null,
  analyser: null,
  micRaf: null,
  blowScore: 0,
  candleFrame: 1,
  extinguishedCandles: 0,
  lastBlowAt: 0,
  letterAnimated: false,
  quizOrder: [],
  totalWrongAnswers: 0,
  lastLetterSfxAt: 0
};

const NEXT_QUESTION_DELAY = 1900;
const CANDLE_ACTIVE_START = 1;
const CANDLE_ACTIVE_END = 7;
const BLOW_THRESHOLD = 0.064;

const freyaPool = [assets.mem1, assets.mem2, assets.mem3, assets.mem4];

const monkeyReplies = {
  monyet_bunga: "bunga: heyy maniss.",
  monyet_flirt: "flirt: mo nyenyen.",
  monyet_ide: "happy: HAPPYY HAPPY HAPPY.",
  monyet_kaget: "kaget: OMAGAAAA.",
  monyet_princess: "princess: HMMMM.",
  monyet_sedih: "sedih: monyet terharu🥲."
};

const audio = {
  wrong: new Audio(assets.wrongSound),
  right: new Audio(assets.rightSound),
  success: new Audio(assets.successSound),
  bgm: new Audio(assets.bgmTrack),
  brainFart: new Audio(assets.brainFartSound),
  candleBlow: new Audio(assets.candleBlowingSound),
  candleBgm: new Audio(assets.candleBgmTrack),
  monyetSfx: [
    new Audio(assets.sfx1),
    new Audio(assets.sfx2),
    new Audio(assets.sfx3),
    new Audio(assets.sfx4),
    new Audio(assets.sfx5),
    new Audio(assets.sfx6)
  ]
};

audio.wrong.volume = 0.58;
audio.right.volume = 0.62;
audio.success.volume = 0.76;
audio.bgm.volume = 0.22;
audio.bgm.loop = true;
audio.brainFart.volume = 0.9;
audio.candleBlow.volume = 0.72;
audio.candleBgm.volume = 0.48;
audio.candleBgm.loop = true;

function playAudio(sound, shouldReset = true) {
  if (!sound) return;
  if (shouldReset) {
    sound.currentTime = 0;
  }
  sound.play().catch(() => {
    // Ignore blocked autoplay errors until user interacts.
  });
}

function startBackgroundMusic() {
  if (audio.bgm.paused) {
    playAudio(audio.bgm, false);
  }
}

function stopBackgroundMusic() {
  audio.bgm.pause();
}

function startCandleMusic() {
  audio.candleBgm.currentTime = 0;
  playAudio(audio.candleBgm, false);
}

function playRandomFrom(list, reset = true) {
  if (!list || !list.length) return;
  const sound = list[Math.floor(Math.random() * list.length)];
  playAudio(sound, reset);
}

function shuffleIndices(length) {
  const arr = Array.from({ length }, (_, i) => i);
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetQuizRun() {
  state.currentQuestion = 0;
  state.isLocked = false;
  state.attemptsByQuestion = {};
  state.totalWrongAnswers = 0;
  state.quizOrder = shuffleIndices(questions.length).slice(0, 5);
}

function showScreen(target) {
  [refs.opening, refs.quiz, refs.done].forEach((screen) => {
    screen.classList.remove("active");
  });
  target.classList.add("active");
}

function typeLine(el, text, speed = 36) {
  return new Promise((resolve) => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      el.textContent = text.slice(0, index);
      if (index >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

async function runOpeningText() {
  await typeLine(refs.openingLine1, "HAYHAYYY FEYAA😍");
  await typeLine(refs.openingLine2, "ini kalo gbisa jawab sih cepok ya.");
}

function spawnPixelBurst(count = 14) {
  const sprites = [assets.heartSprite, assets.starA, assets.particleCircle, assets.particlePlus];
  for (let i = 0; i < count; i += 1) {
    const sprite = document.createElement("img");
    sprite.src = sprites[i % sprites.length];
    sprite.className = "burst-pixel";
    sprite.style.left = `${30 + Math.random() * 40}%`;
    sprite.style.top = `${24 + Math.random() * 44}%`;
    sprite.style.setProperty("--dx", `${(Math.random() - 0.5) * 240}px`);
    sprite.style.setProperty("--dy", `${-28 - Math.random() * 220}px`);
    sprite.style.setProperty("--rot", `${(Math.random() - 0.5) * 140}deg`);
    refs.fxLayer.appendChild(sprite);
    setTimeout(() => sprite.remove(), 1060);
  }
}

function setFreyaPair() {
  if (!refs.freyaFloatLeft || !refs.freyaFloatRight) return;

  const first = freyaPool[Math.floor(Math.random() * freyaPool.length)];
  let second = first;
  while (second === first) {
    second = freyaPool[Math.floor(Math.random() * freyaPool.length)];
  }

  gsap.to([refs.freyaFloatLeft, refs.freyaFloatRight], {
    autoAlpha: 0.25,
    duration: 0.2,
    onComplete: () => {
      refs.freyaFloatLeft.src = first;
      refs.freyaFloatRight.src = second;
      gsap.to([refs.freyaFloatLeft, refs.freyaFloatRight], { autoAlpha: 1, duration: 0.22 });
    }
  });
}

function startFreyaSwap() {
  if (!refs.freyaFloatLeft || !refs.freyaFloatRight) return;
  setFreyaPair();
  if (state.freyaSwapTimer) {
    clearInterval(state.freyaSwapTimer);
  }
  state.freyaSwapTimer = setInterval(setFreyaPair, 3000);
}

function stopFreyaSwap() {
  if (!state.freyaSwapTimer) return;
  clearInterval(state.freyaSwapTimer);
  state.freyaSwapTimer = null;
}

function renderQuestion() {
  const currentQuestionIndex = state.quizOrder[state.currentQuestion];
  const item = questions[currentQuestionIndex];
  refs.quizCard.classList.remove("nexting");
  refs.progressText.textContent = `Pertanyaan ${state.currentQuestion + 1}/${state.quizOrder.length}`;
  refs.questionText.textContent = item.question;
  refs.feedbackText.textContent = "";
  refs.feedbackText.className = "feedback";
  refs.optionsWrap.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(index, button));
    refs.optionsWrap.appendChild(button);
  });
}

function markShake() {
  refs.quizCard.classList.remove("shake", "wrong-hit");
  void refs.quizCard.offsetWidth;
  refs.quizCard.classList.add("shake", "wrong-hit");
  setTimeout(() => refs.quizCard.classList.remove("wrong-hit"), 340);
}

function applyWrongMood(attemptCount) {
  if (attemptCount <= 1) {
    refs.quizCharacter.src = assets.mortySad;
    refs.moodText.textContent = "heyy santai, coba sekali lagi ya.";
    return;
  }

  if (attemptCount === 2) {
    refs.quizCharacter.src = assets.mortySalt;
    refs.moodText.textContent = "ihhh maless, kok nyaris terus sih. fokus bentar.";
    return;
  }

  if (attemptCount === 3) {
    refs.quizCharacter.src = assets.mortyCry;
    refs.moodText.textContent = "yahh salah lagi, aku manyun dulu deh.";
    return;
  }

  refs.quizCharacter.src = assets.mortyCry;
  refs.moodText.textContent = "ayo dongg, ini harus bener sekarang yaa.";
}

function initializeDoneFlow() {
  state.selectedMonkeyMood = null;
  state.letterAnimated = false;
  state.lastLetterSfxAt = 0;

  audio.candleBgm.pause();
  audio.candleBgm.currentTime = 0;
  startBackgroundMusic();

  resetMonyetPicker();
  resetCandleFlow();
  setDoneStep("monkey");

  gsap.fromTo(
    refs.doneCard,
    { autoAlpha: 0, y: 24, scale: 0.97 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
  );
}

function setDoneStep(step) {
  const map = {
    monkey: refs.doneStepMonkey,
    candle: refs.doneStepCandle,
    letter: refs.doneStepLetter
  };

  Object.values(map).forEach((el) => {
    if (!el) return;
    el.classList.remove("active");
  });

  const target = map[step];
  if (!target) return;

  state.doneStep = step;
  target.classList.add("active");
  gsap.fromTo(target, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.42, ease: "power2.out" });

  if (step === "candle") {
    stopBackgroundMusic();
    if (audio.candleBgm.paused) {
      startCandleMusic();
    }
    startCandleFireAnimation();
  } else {
    audio.candleBgm.pause();
    audio.candleBgm.currentTime = 0;
    startBackgroundMusic();
  }

  if (step === "letter") {
    animateLetterStep();
  }
}

function resetMonyetPicker() {
  if (!refs.monyetPicker || !refs.monyetResult || !refs.monkeyNextBtn) return;

  refs.monyetPicker.querySelectorAll(".monyet-btn").forEach((button) => {
    button.classList.remove("active");
  });

  refs.monyetResult.textContent = "pilih satu dulu yaa, nanti lanjut ke tiup lilin.";
  refs.monkeyNextBtn.disabled = true;
}

function setFlameFrame(flameEl, frameIndex) {
  if (!flameEl) return;
  const frameWidth = flameEl.getBoundingClientRect().width || 32;
  flameEl.style.backgroundPositionX = `${-Math.round(frameIndex * frameWidth)}px`;
}

function initializeCandleFlames() {
  refs.candleFlames.forEach((flame) => {
    flame.dataset.lit = "1";
    flame.style.opacity = "1";
    setFlameFrame(flame, CANDLE_ACTIVE_START);
  });

  state.candleFrame = CANDLE_ACTIVE_START;
  state.extinguishedCandles = 0;
  state.lastBlowAt = 0;
}

function updateFlamesFrame(frameIndex) {
  refs.candleFlames.forEach((flame) => {
    if (flame.dataset.lit === "1") {
      setFlameFrame(flame, frameIndex);
    } else {
      setFlameFrame(flame, 0);
    }
  });
}

function extinguishOneCandle() {
  const litFlames = refs.candleFlames.filter((flame) => flame.dataset.lit === "1");
  if (!litFlames.length) {
    handleAllCandlesBlown();
    return;
  }

  const target = litFlames[litFlames.length - 1];
  target.dataset.lit = "0";
  state.extinguishedCandles += 1;
  setFlameFrame(target, 0);
  playAudio(audio.candleBlow);

  gsap.fromTo(
    target,
    { autoAlpha: 1, y: 0, scale: 1.05 },
    { autoAlpha: 0.5, y: 5, scale: 0.82, duration: 0.22, yoyo: true, repeat: 1 }
  );

  if (refs.micHint) {
    refs.micHint.textContent = `wihh satu padam! ${state.extinguishedCandles}/${refs.candleFlames.length} lilin udah mati.`;
  }

  if (state.extinguishedCandles >= refs.candleFlames.length) {
    handleAllCandlesBlown();
  }
}

function startCandleFireAnimation() {
  stopCandleFireAnimation();
  initializeCandleFlames();

  state.candleFrameTimer = setInterval(() => {
    state.candleFrame += 1;
    if (state.candleFrame > CANDLE_ACTIVE_END) {
      state.candleFrame = CANDLE_ACTIVE_START;
    }
    updateFlamesFrame(state.candleFrame);
  }, 120);
}

function stopCandleFireAnimation() {
  if (!state.candleFrameTimer) return;
  clearInterval(state.candleFrameTimer);
  state.candleFrameTimer = null;
}

function stopMicDetection() {
  if (state.micRaf) {
    cancelAnimationFrame(state.micRaf);
    state.micRaf = null;
  }

  if (state.micStream) {
    state.micStream.getTracks().forEach((track) => track.stop());
    state.micStream = null;
  }

  if (state.audioContext) {
    state.audioContext.close().catch(() => {
      // Ignore close errors.
    });
    state.audioContext = null;
  }

  state.analyser = null;
  state.blowScore = 0;
}

function resetCandleFlow() {
  stopMicDetection();
  stopCandleFireAnimation();

  if (refs.micLevelFill) refs.micLevelFill.style.width = "0%";
  if (refs.micHint) refs.micHint.textContent = "klik tombol mic dulu, izinin akses, terus tiup ke arah mic.";
  if (refs.micBtn) {
    refs.micBtn.disabled = false;
    refs.micBtn.textContent = "Izinin mic & tiup";
  }
  if (refs.candleNextBtn) refs.candleNextBtn.disabled = true;

  initializeCandleFlames();
}

function handleAllCandlesBlown() {
  if (refs.candleNextBtn && !refs.candleNextBtn.disabled) return;

  stopMicDetection();
  stopCandleFireAnimation();
  refs.candleFlames.forEach((flame) => {
    flame.dataset.lit = "0";
    setFlameFrame(flame, 0);
  });

  if (refs.micLevelFill) refs.micLevelFill.style.width = "100%";
  if (refs.micHint) refs.micHint.textContent = "WOOH semua lilin mati! kamu jago banget tiupnya ✨";
  if (refs.micBtn) {
    refs.micBtn.disabled = true;
    refs.micBtn.textContent = "Mic berhasil dipakai";
  }
  if (refs.candleNextBtn) refs.candleNextBtn.disabled = false;

  playAudio(audio.success);
  spawnPixelBurst(30);

  gsap.fromTo(
    refs.candleNextBtn,
    { autoAlpha: 0.35, scale: 0.92 },
    { autoAlpha: 1, scale: 1, duration: 0.32, ease: "back.out(1.6)" }
  );

  setTimeout(() => {
    if (state.doneStep === "candle") {
      setDoneStep("letter");
    }
  }, 1500);
}

function startMicDetection() {
  if (!refs.micHint || !refs.micLevelFill) return;
  if (!state.analyser) return;

  const data = new Uint8Array(state.analyser.fftSize);

  const loop = () => {
    if (!state.analyser) return;

    state.analyser.getByteTimeDomainData(data);
    let sumSquares = 0;
    for (let i = 0; i < data.length; i += 1) {
      const norm = (data[i] - 128) / 128;
      sumSquares += norm * norm;
    }

    const rms = Math.sqrt(sumSquares / data.length);
    const meter = Math.min(1, rms * 9.1);
    refs.micLevelFill.style.width = `${Math.round(meter * 100)}%`;

    if (rms > BLOW_THRESHOLD) {
      state.blowScore += 1;
    } else {
      state.blowScore = Math.max(0, state.blowScore - 0.8);
    }

    const now = Date.now();
    if (state.blowScore > 4.6 && now - state.lastBlowAt > 760) {
      state.lastBlowAt = now;
      state.blowScore = 0;
      extinguishOneCandle();

      if (refs.candleNextBtn && !refs.candleNextBtn.disabled) {
        return;
      }
    }

    state.micRaf = requestAnimationFrame(loop);
  };

  loop();
}

async function enableMicAndListen() {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    refs.micHint.textContent = "browser ini belum support mic. klik next aja buat lanjut.";
    refs.candleNextBtn.disabled = false;
    return;
  }

  try {
    refs.micBtn.disabled = true;
    refs.micBtn.textContent = "Nunggu izin mic...";

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioContext = new window.AudioContext();
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 1024;
    analyser.smoothingTimeConstant = 0.8;

    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);

    state.micStream = stream;
    state.audioContext = audioContext;
    state.analyser = analyser;
    state.blowScore = 0;
    state.lastBlowAt = 0;

    refs.micHint.textContent = `mic aktif, tiup pelan-pelan berkali-kali ya. target: ${refs.candleFlames.length} lilin padam.`;
    refs.micBtn.textContent = "Mic aktif";

    startMicDetection();
  } catch {
    refs.micHint.textContent = "izin mic belum kebuka. klik lagi terus pilih Allow ya.";
    refs.micBtn.disabled = false;
    refs.micBtn.textContent = "Coba izinin mic lagi";
  }
}

function animateLetterStep() {
  if (state.letterAnimated || !refs.letterScroll) return;

  const blocks = refs.letterScroll.querySelectorAll(".letter-block, .wish-list li, .letter-chat");
  const freyaPhotos = refs.doneStepLetter.querySelectorAll(".corner-freya");

  gsap.fromTo(
    blocks,
    { autoAlpha: 0, y: 22 },
    { autoAlpha: 1, y: 0, duration: 0.58, ease: "power2.out", stagger: 0.08 }
  );

  gsap.fromTo(
    freyaPhotos,
    { autoAlpha: 0, y: 16, scale: 0.92 },
    { autoAlpha: 1, y: 0, scale: 1, duration: 0.52, ease: "back.out(1.7)", stagger: 0.11 }
  );

  gsap.to(freyaPhotos, {
    y: -6,
    duration: 2.2,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.2,
      from: "random"
    }
  });

  state.letterAnimated = true;
}

function bindLetterScrollSfx() {
  window.addEventListener("scroll", () => {
    if (state.doneStep !== "letter") return;

    const now = Date.now();
    if (now - state.lastLetterSfxAt < 900) return;

    state.lastLetterSfxAt = now;
    playRandomFrom(audio.monyetSfx);
  });
}

function bindDoneFlow() {
  if (refs.monyetPicker) {
    refs.monyetPicker.addEventListener("click", (event) => {
      const target = event.target.closest(".monyet-btn");
      if (!target) return;

      const mood = target.dataset.mood;
      state.selectedMonkeyMood = mood;

      refs.monyetPicker.querySelectorAll(".monyet-btn").forEach((button) => {
        button.classList.remove("active");
      });
      target.classList.add("active");

      refs.monyetResult.textContent = monkeyReplies[mood] || "heyy, mood random tapi tetep gemes.";
      refs.monkeyNextBtn.disabled = false;
      playRandomFrom(audio.monyetSfx);
    });
  }

  if (refs.monkeyNextBtn) {
    refs.monkeyNextBtn.addEventListener("click", () => {
      if (!state.selectedMonkeyMood) return;
      startCandleMusic();
      setDoneStep("candle");
    });
  }

  if (refs.micBtn) {
    refs.micBtn.addEventListener("click", () => {
      enableMicAndListen();
    });
  }

  if (refs.candleNextBtn) {
    refs.candleNextBtn.addEventListener("click", () => {
      setDoneStep("letter");
    });
  }
}

function checkAnswer(selectedIndex, selectedButton) {
  if (state.isLocked) return;

  const currentQuestionIndex = state.quizOrder[state.currentQuestion];
  const item = questions[currentQuestionIndex];
  if (selectedIndex !== item.answer) {
    const key = String(currentQuestionIndex);
    const attempts = (state.attemptsByQuestion[key] || 0) + 1;
    state.attemptsByQuestion[key] = attempts;
    state.totalWrongAnswers += 1;

    refs.feedbackText.textContent = getWrongMessage(attempts);
    refs.feedbackText.className = "feedback wrong";
    applyWrongMood(attempts);

    if (selectedButton) {
      selectedButton.classList.add("wrong-pick");
      setTimeout(() => selectedButton.classList.remove("wrong-pick"), 280);
    }

    markShake();

    if (state.totalWrongAnswers >= 3) {
      state.isLocked = true;
      refs.feedbackText.textContent = "yahh kalah 3x, ulang dari awal yaa.";
      refs.feedbackText.className = "feedback wrong";
      playAudio(audio.brainFart);

      refs.optionsWrap.querySelectorAll(".option-btn").forEach((button) => {
        button.disabled = true;
        button.classList.add("disabled");
      });

      setTimeout(() => {
        resetQuizRun();
        refs.quizCharacter.src = assets.mortyHug;
        refs.moodText.textContent = "okeee kita mulai lagi dari awal, fokus dikit ya.";
        renderQuestion();
      }, 1250);
    } else {
      playAudio(audio.wrong);
    }

    return;
  }

  state.isLocked = true;
  refs.optionsWrap.querySelectorAll(".option-btn").forEach((button) => {
    button.disabled = true;
    button.classList.add("disabled");
  });

  if (selectedButton) {
    selectedButton.classList.add("correct-pick");
  }

  refs.quizCard.classList.remove("nexting");
  void refs.quizCard.offsetWidth;
  refs.quizCard.classList.add("nexting");

  refs.feedbackText.textContent = getRightMessage();
  refs.feedbackText.className = "feedback right";
  refs.quizCharacter.src = assets.mortyHappy;
  refs.moodText.textContent = "nahh gitu dong, cakepp banget jawabannya.";

  playAudio(audio.right);
  spawnPixelBurst();

  setTimeout(() => {
    state.currentQuestion += 1;
    if (state.currentQuestion >= state.quizOrder.length) {
      showScreen(refs.done);
      stopFreyaSwap();
      initializeDoneFlow();
      playAudio(audio.success);
      return;
    }

    refs.quizCharacter.src = assets.mortyHug;
    refs.moodText.textContent = "lanjut yaa, heyy semangattt.";
    state.isLocked = false;
    renderQuestion();
  }, NEXT_QUESTION_DELAY);
}

refs.startBtn.addEventListener("click", () => {
  startBackgroundMusic();
  resetQuizRun();
  showScreen(refs.quiz);
  startFreyaSwap();
  refs.quizCharacter.src = assets.mortyHug;
  refs.moodText.textContent = "heyy, jawab santai aja. kamu pasti bisa.";
  renderQuestion();
});

bindDoneFlow();
bindLetterScrollSfx();
resetQuizRun();
runOpeningText();
