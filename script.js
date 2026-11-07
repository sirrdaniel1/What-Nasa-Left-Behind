/* ===== Space Explorers: what NASA left behind ===== */
const $ = s => document.querySelector(s);
const STATUS = {
  asleep:   ['😴 Sleeping', 'asleep'],
  active:   ['📡 Still calling home', 'active'],
  farewell: ['🎬 Final mission', 'farewell'],
  stay:     ['📍 Still parked there', 'stay']
};
 
/* Every place you can visit. x/y = where the glowing spots sit on the planet (%). */
const PLACES = {
  moon: {
    name: 'The Moon', g: 'radial-gradient(circle at 30% 30%,#f6f6f1,#b9b9b4 50%,#6d6d6a)', c: '#ddd',
    items: [
      { e: '🦅', n: "Eagle's Legs", x: 32, y: 34, year: '1969', st: 'stay',
        story: 'Apollo 11 landed in the Sea of Tranquility. When the astronauts blasted home, the lander split in two: the top half flew up, and the bottom half stayed behind as a launch pad.',
        fact: 'A plaque on its leg says: "We came in peace for all mankind."' },
      { e: '🚙', n: 'Moon Buggies', x: 66, y: 40, year: '1971–72', st: 'stay',
        story: 'Apollo 15, 16 and 17 each carried a folded-up electric car, the Lunar Roving Vehicle. Astronauts drove it to faraway rocks, then parked it for good.',
        fact: 'Three buggies are parked on the Moon right now. No parking tickets!' },
      { e: '🔦', n: 'Laser Mirrors', x: 50, y: 64, year: '1969–71', st: 'active',
        story: 'Apollo astronauts placed special mirrors called retroreflectors on the surface. Scientists on Earth still shoot lasers at them to measure the exact distance to the Moon.',
        fact: 'Thanks to these mirrors, we know the Moon drifts about 3.8 cm farther away every year.' },
      { e: '📷', n: 'Surveyor 3', x: 24, y: 66, year: '1967', st: 'stay',
        story: 'This robot scout landed before any person did. Two years later, Apollo 12 astronauts landed nearby, walked over to it, and brought its camera home to study!',
        fact: 'It was the first time humans visited a spacecraft on another world.' },
      { e: '⛳', n: 'Golf Balls', x: 74, y: 70, year: '1971', st: 'stay',
        story: 'Apollo 14 astronaut Alan Shepard smuggled a golf club head to the Moon and hit two golf balls. With low gravity, they flew far!',
        fact: 'Both golf balls are still up there, probably never to be found by a caddie.' }
    ]
  },
  mars: {
    name: 'Mars', g: 'radial-gradient(circle at 30% 30%,#ffb38a,#d1552b 55%,#7a2a12)', c: '#ff7a4a',
    note: 'Curiosity and Perseverance are still exploring Mars today!',
    items: [
      { e: '🚜', n: 'Sojourner', x: 30, y: 30, year: '1997', st: 'asleep',
        story: 'Sojourner was the first rover to roll on Mars. It was about the size of a microwave oven and drove around its lander, Pathfinder, sniffing rocks with a tiny science tool.',
        fact: 'It only drove about 100 meters in total, yet it proved wheels could work on Mars.' },
      { e: '🔭', n: 'Spirit', x: 68, y: 26, year: '2004–2010', st: 'asleep',
        story: 'Spirit was built to work for 90 Mars days. It worked for years! Then it got stuck in soft sand. It kept doing science from where it sat until it fell silent in 2010.',
        fact: 'Spirit found rocks that were shaped by hot water long ago.' },
      { e: '🌅', n: 'Opportunity', x: 76, y: 56, year: '2004–2019', st: 'asleep',
        story: 'Opportunity also had a 90-day plan, but it kept going for nearly 15 years of Earth time! A giant dust storm in 2018 blocked its sunlight, and it never woke up.',
        fact: 'Its last message is often described as: "My battery is low and it\'s getting dark."' },
      { e: '🛸', n: 'Viking 1', x: 24, y: 62, year: '1976–1982', st: 'asleep',
        story: 'Viking 1 landed in July 1976 and sent back some of the first color pictures from Mars. It carried a tiny lab to look for signs of life in the soil.',
        fact: 'It worked for over six years, much longer than planned.' },
      { e: '👂', n: 'InSight', x: 50, y: 78, year: '2018–2022', st: 'asleep',
        story: 'InSight listened to the inside of Mars, like a doctor with a stethoscope. It heard over a thousand marsquakes. Dust slowly covered its solar panels until its power ran out.',
        fact: 'Mars shakes too, just not as much as Earth.' },
      { e: '🚁', n: 'Ingenuity', x: 50, y: 46, year: '2021–2024', st: 'farewell',
        story: 'This little helicopter made the first powered flight on another planet. It was only supposed to fly five times. It flew 72 times before a rotor was damaged in 2024.',
        fact: 'Its first flight lasted about 39 seconds, a bit like the Wright brothers on Earth.' }
    ]
  },
  jupiter: {
    name: 'Jupiter', c: '#e9b27a',
    g: 'repeating-linear-gradient(0deg,#e7c9a0 0 7%,#c98f5c 7% 14%,#f4e4c8 14% 20%,#b3744a 20% 28%)',
    items: [
      { e: '🛰️', n: 'Galileo', x: 30, y: 30, year: '1995–2003', st: 'farewell',
        story: 'Galileo circled Jupiter for eight years and studied its moons. At the end, scientists steered it into Jupiter on purpose, so it could never crash into moons that might hold life.',
        fact: 'It was a space hero: it chose a fiery ending to protect other worlds.' },
      { e: '🪂', n: 'Galileo Probe', x: 64, y: 54, year: '1995', st: 'farewell',
        story: 'Before the main spacecraft arrived, a small probe was dropped into Jupiter. It parachuted down through the clouds and sent us data for about an hour before the heat and pressure were too much.',
        fact: 'It is the only spacecraft ever to dive into Jupiter’s atmosphere to take a sample.' }
    ]
  },
  saturn: {
    name: 'Saturn', c: '#f0dca8', ring: true,
    g: 'repeating-linear-gradient(0deg,#f0dca8 0 9%,#d8b878 9% 18%,#f7ecc9 18% 24%)',
    items: [
      { e: '🛰️', n: 'Cassini', x: 34, y: 30, year: '2004–2017', st: 'farewell',
        story: 'Cassini toured Saturn for 13 years. It discovered geysers shooting water from the moon Enceladus. For its Grand Finale, it dove between the planet and its rings, then into Saturn itself.',
        fact: 'It sent pictures and data right up to its final seconds.' },
      { e: '🪂', n: 'Huygens', x: 66, y: 62, year: '2005', st: 'stay',
        story: 'Cassini carried a little lander built by our friends at the European Space Agency. It dropped to Saturn’s giant moon Titan and landed on its surface.',
        fact: 'That is the farthest from Earth any spacecraft has ever landed.' }
    ]
  },
  deep: {
    name: 'Deep Space', c: '#7fe3ff',
    g: 'radial-gradient(circle at 40% 35%,#2a3a8a,#0b1030 70%)',
    items: [
      { e: '💿', n: 'Voyager 1', x: 30, y: 36, year: '1977–now', st: 'active',
        story: 'Voyager 1 left the Sun’s bubble and flew into interstellar space in 2012. It carries a golden record with greetings, music and sounds of Earth, just in case someone finds it.',
        fact: 'It is the farthest human-made object from Earth, and still calling home.' },
      { e: '🌌', n: 'Voyager 2', x: 68, y: 30, year: '1977–now', st: 'active',
        story: 'Voyager 2 is the only spacecraft to have visited Uranus and Neptune. It entered interstellar space in 2018 and keeps sending data.',
        fact: 'Its power is so tiny that it runs on less than a few light bulbs.' },
      { e: '🖼️', n: 'Pioneer 10', x: 50, y: 70, year: '1972–2003', st: 'asleep',
        story: 'Pioneer 10 was the first spacecraft to cross the asteroid belt and visit Jupiter. It carries a metal plaque showing a man, a woman, and where Earth is.',
        fact: 'Its last faint signal reached Earth in January 2003, and it is still gliding into the dark.' }
    ]
  }
};
 
/* What you see on the first screen. x/y = screen %, s = size */
const LAYOUT = [
  { deco: true, cls: 'sun', s: '48vmin', x: '-2%', y: '50%', g: 'radial-gradient(circle,#fff6b0,#ffb300 50%,#ff6a00)', lbl: 'The Sun' },
  { deco: true, id: 'earth', s: '12vmin', x: '14%', y: '76%', g: 'radial-gradient(circle at 30% 30%,#8fe0ff,#2a6fdb 50%,#0b2e6b)', lbl: 'Earth (home!)', c: '#4aa8ff' },
  { id: 'moon', s: '9vmin', x: '27%', y: '58%', d: '.4s' },
  { id: 'mars', s: '13vmin', x: '44%', y: '30%', d: '1s' },
  { id: 'jupiter', s: '24vmin', x: '62%', y: '66%', d: '.2s' },
  { id: 'saturn', s: '17vmin', x: '82%', y: '28%', d: '.8s' },
  { id: 'deep', s: '10vmin', x: '90%', y: '80%', d: '1.3s', probe: true }
];
 
const found = new Set();
const total = Object.values(PLACES).reduce((n, p) => n + p.items.length, 0);
$('#total').textContent = total;
 
/* ---------- starfield + shooting stars ---------- */
const cv = $('#stars'), cx = cv.getContext('2d');
let stars = [], mx = 0, my = 0;
function resize() {
  cv.width = innerWidth; cv.height = innerHeight;
  stars = Array.from({ length: 240 }, () => ({ x: Math.random() * cv.width, y: Math.random() * cv.height, r: Math.random() * 1.6 + .3, d: Math.random() * .9 + .1, t: Math.random() * 6 }));
}
function draw(t) {
  cx.clearRect(0, 0, cv.width, cv.height);
  cx.fillStyle = '#fff';
  for (const s of stars) {
    cx.globalAlpha = .5 + .5 * Math.sin(t / 700 + s.t);
    cx.beginPath();
    cx.arc((s.x + mx * s.d * 40 + cv.width) % cv.width, (s.y + my * s.d * 40 + cv.height) % cv.height, s.r, 0, 7);
    cx.fill();
  }
  requestAnimationFrame(draw);
}
resize(); addEventListener('resize', resize); requestAnimationFrame(draw);
setInterval(() => {
  const s = document.createElement('div');
  s.className = 'shoot';
  s.style.left = 40 + Math.random() * 60 + '%'; s.style.top = Math.random() * 40 + '%';
  document.body.append(s); setTimeout(() => s.remove(), 1200);
}, 5000);
 
/* ---------- rocket follows the pointer ---------- */
const rocket = $('#rocket');
let rx = 0, ry = 0, tx = 0, ty = 0, ang = 0;
addEventListener('pointermove', e => {
  tx = e.clientX; ty = e.clientY;
  mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5;
});
(function fly() {
  const dx = tx - rx, dy = ty - ry;
  rx += dx * .12; ry += dy * .12;
  if (Math.hypot(dx, dy) > 6) ang = Math.atan2(dy, dx) * 180 / Math.PI + 45;
  rocket.style.transform = `translate(${rx + 14}px,${ry + 14}px) rotate(${ang}deg)`;
  requestAnimationFrame(fly);
})();
 
/* ---------- first screen: the solar system ---------- */
const sys = $('#system');
LAYOUT.forEach(p => {
  const el = document.createElement(p.deco ? 'div' : 'button');
  const place = PLACES[p.id];
  el.className = 'body' + (p.cls ? ' ' + p.cls : '') + (place && place.ring ? ' ring' : '') + (p.probe ? ' probe' : '');
  el.style.cssText = `--s:${p.s};--x:${p.x};--y:${p.y};--g:${p.g || place.g};--c:${p.c || (place && place.c)};--d:${p.d || 0}`;
  if (p.probe) el.textContent = '🛰️';
  const lbl = document.createElement('span');
  lbl.className = 'lbl';
  lbl.innerHTML = p.deco ? p.lbl : `${place.name}<small id="prog-${p.id}">0 / ${place.items.length}</small>`;
  el.append(lbl);
  if (!p.deco) { el.id = 'p-' + p.id; el.setAttribute('aria-label', 'Fly to ' + place.name); el.onclick = () => visit(p.id); }
  sys.append(el);
});
 
function visit(id) {
  const r = $('#p-' + id).getBoundingClientRect();
  sys.style.transformOrigin = `${r.left + r.width / 2}px ${r.top + r.height / 2}px`;
  document.body.classList.add('warp');
  setTimeout(() => openScene(id), 650);
}
 
/* ---------- a planet up close ---------- */
function openScene(id) {
  const P = PLACES[id], world = $('#world'), card = $('#card');
  world.className = P.ring ? 'ring' : '';
  world.style.cssText = `--g:${P.g};--c:${P.c}`;
  world.innerHTML = '';
  P.items.forEach((it, i) => {
    const b = document.createElement('button');
    b.className = 'relic' + (found.has(id + i) ? ' done' : '');
    b.style.cssText = `--x:${it.x}%;--y:${it.y}%`;
    b.textContent = it.e;
    b.setAttribute('aria-label', it.n);
    b.onclick = () => showItem(id, i, b);
    world.append(b);
  });
  card.className = '';
  card.innerHTML = `<h2>Welcome to ${P.name}! 🌟</h2><p>Tap the <b>glowing spots</b> to discover what NASA sent here.</p>
    <p>${P.note || 'Find them all to earn every star!'}</p>`;
  document.body.classList.add('inside');
  $('#scene').hidden = false;
}
 
function showItem(id, i, btn) {
  const it = PLACES[id].items[i], card = $('#card');
  document.querySelectorAll('.relic.on').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const [label, cls] = STATUS[it.st];
  card.className = '';
  void card.offsetWidth;
  card.className = 'swap';
  card.innerHTML = `<h2>${it.e} ${it.n}</h2>
    <span class="tag">📅 ${it.year}</span><span class="tag ${cls}">${label}</span>
    <p>${it.story}</p><div class="fact">🤩 <b>Wow:</b> ${it.fact}</div>`;
  if (!found.has(id + i)) {
    found.add(id + i);
    btn.classList.add('done');
    updateScore(id);
    burst(btn);
  }
}
 
function updateScore(id) {
  $('#count').textContent = found.size;
  const sc = $('#score'); sc.classList.remove('pop'); void sc.offsetWidth; sc.classList.add('pop');
  const n = PLACES[id].items.filter((_, i) => found.has(id + i)).length;
  $('#prog-' + id).textContent = `${n} / ${PLACES[id].items.length}` + (n === PLACES[id].items.length ? ' ✅' : '');
  if (found.size === total) {
    $('#card').insertAdjacentHTML('beforeend', '<p><b>🏆 You found everything! You are a Super Space Explorer!</b></p>');
    for (let k = 0; k < 4; k++) setTimeout(() => burst($('#score')), k * 350);
  }
}
 
function burst(el) {
  const r = el.getBoundingClientRect();
  for (let k = 0; k < 14; k++) {
    const s = document.createElement('span');
    s.className = 'burst';
    s.textContent = ['⭐', '✨', '🌟', '💫'][k % 4];
    s.style.left = r.left + r.width / 2 + 'px'; s.style.top = r.top + r.height / 2 + 'px';
    s.style.setProperty('--dx', (Math.random() - .5) * 360 + 'px');
    s.style.setProperty('--dy', (Math.random() - .5) * 360 + 'px');
    document.body.append(s); setTimeout(() => s.remove(), 1700);
  }
}
 
/* ---------- back to space ---------- */
function goBack() {
  $('#scene').hidden = true;
  document.body.classList.remove('inside', 'warp');
}
$('#back').onclick = goBack;
addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#scene').hidden) goBack(); });
 