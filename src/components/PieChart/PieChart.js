import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
import styled from 'styled-components';

const getCathegoryColor = () => {
  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  const r = randomInteger(0, 70);
  const g = randomInteger(0, 50);
  const b = randomInteger(0, 254);
  return `rgb(${r}, ${g}, ${b})`;
};

const PieChartComponent = ({
  cathegories = [
    { title: 'main', value: 13, color: '#FED057' },
    { title: 'food', value: 36, color: '#FFD8D0' },
    { title: 'car', value: 9, color: '#FD9498' },
    { title: 'selfCare', value: 6, color: '#C5BAFF' },
    { title: 'childrenCare', value: 6, color: '#6E78E8' },
    { title: 'homeGoods', value: 1, color: '#4A56E2' },
    { title: 'edacation', value: 14, color: '#81E1FF' },
    { title: 'hobbies', value: 9, color: '#24CCA7' },
    { title: 'other', value: 6, color: '#00AD84' },
  ],
  total = 24000,
}) => (
  <PieChartWrapper>
    <PieChart
      style={{ width: '320px', height: '320px' }}
      lineWidth={25}
      animate
      radius={50}
      data={cathegories}
    />
    <Total>₴ {total}</Total>
  </PieChartWrapper>
);

export default PieChartComponent;

const Total = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;
const PieChartWrapper = styled.div`
  position: relative;

  width: 320px;
  height: 320px;
`;
