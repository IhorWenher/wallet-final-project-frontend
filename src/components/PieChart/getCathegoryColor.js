const getCathegoryColor = () => {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  const r = randomInteger(0, 255);
  const g = randomInteger(0, 255);
  const b = randomInteger(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

export default getCathegoryColor;
