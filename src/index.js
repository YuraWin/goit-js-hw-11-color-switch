import './styles.css';

const SWITCH_DELAY = 1000;
let intervalId = null;
let isActive = false;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const QUANTITY_COLORS = colors.length - 1;

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body')
}


refs.btnStart.addEventListener('click', () => {
  if (isActive) return;
  intervalId = setInterval(() => {
    setColorBody();
    isActive = true;
  }, SWITCH_DELAY)

});

refs.btnStop.addEventListener('click', () => {
  clearInterval(intervalId);
  isActive = false;
});

function setColorBody() {
  const setColor = randomIntegerFromInterval(0, QUANTITY_COLORS);
  refs.body.style.backgroundColor = colors[setColor];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};