function normalizeAnswer(text) {
  return (text || "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[ё]/g, "е")
    .replace(/[.,!?;:()"']/g, "")
    .replace(/\s+/g, " ");
}

function getTeamId() {
  return localStorage.getItem("teamId");
}

function getDisplayName() {
  return localStorage.getItem("displayName") || "—";
}

function getStartTime() {
  return parseInt(localStorage.getItem("startTime") || "0", 10);
}

function saveStartTime(ts) {
  localStorage.setItem("startTime", String(ts));
}

function remainingSeconds() {
  const start = getStartTime();
  if (!start) return window.GAME.durationSeconds;
  const passed = Math.floor((Date.now() - start) / 1000);
  return Math.max(0, window.GAME.durationSeconds - passed);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, "0");
  const s = (sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

async function ensureTeamTimer() {
  if (!getStartTime()) {
    saveStartTime(Date.now());
  }
}

async function getTeamData() {
  const teamId = getTeamId();
  const { db, ref, get } = window.FB;
  const snap = await get(ref(db, "teams/" + teamId));
  return snap.val();
}

async function updateTeamStats(teamId, addScore = 0, addFound = 0, addCorrect = 0, addWrong = 0) {
  const { db, ref, get, update } = window.FB;
  const teamRef = ref(db, "teams/" + teamId);
  const snap = await get(teamRef);
  const data = snap.val() || {};

  await update(teamRef, {
    score: (data.score || 0) + addScore,
    found: (data.found || 0) + addFound,
    correct: (data.correct || 0) + addCorrect,
    wrong: (data.wrong || 0) + addWrong,
    lastUpdated: Date.now()
  });
}

async function markerAlreadyDone(teamId, markerId) {
  const { db, ref, get } = window.FB;
  const snap = await get(ref(db, "attempts/" + teamId + "_" + markerId));
  return snap.exists();
}

async function saveMarkerAttempt(teamId, markerId, payload) {
  const { db, ref, set } = window.FB;
  await set(ref(db, "attempts/" + teamId + "_" + markerId), payload);
}

function renderMedia(container, marker) {
  container.innerHTML = "";
  if (!marker.mediaUrl) return;

  if (marker.mediaType === "video") {
    container.innerHTML = `<video controls autoplay playsinline src="${marker.mediaUrl}" style="width:100%;border-radius:12px;"></video>`;
  } else if (marker.mediaType === "audio") {
    container.innerHTML = `<audio controls autoplay src="${marker.mediaUrl}" style="width:100%;"></audio>`;
  } else if (marker.mediaType === "image") {
    container.innerHTML = `<img src="${marker.mediaUrl}" alt="${marker.title}" style="width:100%;border-radius:12px;">`;
  }
}

function playSound(id) {
  const el = document.getElementById(id);
  if (el) el.play().catch(() => {});
}

function startCountdown(timerEl, onFinish) {
  const tick = () => {
    const sec = remainingSeconds();
    timerEl.textContent = formatTime(sec);
    if (sec <= 0) {
      clearInterval(timerInterval);
      onFinish();
    }
  };
  tick();
  const timerInterval = setInterval(tick, 1000);
  return timerInterval;
}

function makeEntity(shape, color, label) {
  if (shape === "sphere") {
    return `
      <a-sphere color="${color}" position="0 0.5 0" radius="0.24"
        animation="property: scale; from: 0 0 0; to: 1 1 1; dur: 800"></a-sphere>
      <a-text value="${label}" position="0 1 0" align="center" color="yellow"></a-text>
    `;
  }
  if (shape === "cone") {
    return `
      <a-cone color="${color}" position="0 0.45 0" radius-bottom="0.25" height="0.5"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 2400"></a-cone>
      <a-text value="${label}" position="0 1 0" align="center" color="yellow"></a-text>
    `;
  }
  if (shape === "torus") {
    return `
      <a-torus color="${color}" position="0 0.5 0" radius="0.28" radius-tubular="0.06"
        animation="property: rotation; to: 360 360 0; loop: true; dur: 1800"></a-torus>
      <a-text value="${label}" position="0 1 0" align="center" color="yellow"></a-text>
    `;
  }
  if (shape === "octahedron") {
    return `
      <a-octahedron color="${color}" position="0 0.5 0" radius="0.32"
        animation="property: rotation; to: 0 360 360; loop: true; dur: 2100"></a-octahedron>
      <a-text value="${label}" position="0 1 0" align="center" color="yellow"></a-text>
    `;
  }
  return `
    <a-box color="${color}" position="0 0.5 0" depth="0.32" height="0.32" width="0.32"
      animation="property: rotation; to: 0 360 0; loop: true; dur: 2600"></a-box>
    <a-text value="${label}" position="0 1 0" align="center" color="yellow"></a-text>
  `;
}

function isAccepted(userInput, acceptedAnswers) {
  const n = normalizeAnswer(userInput);
  return acceptedAnswers.some(a => normalizeAnswer(a) === n);
}

window.App = {
  normalizeAnswer,
  getTeamId,
  getDisplayName,
  ensureTeamTimer,
  getTeamData,
  updateTeamStats,
  markerAlreadyDone,
  saveMarkerAttempt,
  renderMedia,
  playSound,
  startCountdown,
  formatTime,
  remainingSeconds,
  makeEntity,
  isAccepted
};