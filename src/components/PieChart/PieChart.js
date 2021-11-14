import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
import styled from 'styled-components';
import getCathegoryColor from './getCathegoryColor';

const PieChartComponent = ({
  cathegories = [
    { title: 'main', value: 13 },
    { title: 'food', value: 36 },
    { title: 'car', value: 9 },
    { title: 'selfCare', value: 6 },
    { title: 'childrenCare', value: 6 },
    { title: 'homeGoods', value: 1 },
    { title: 'edacation', value: 14 },
    { title: 'hobbies', value: 9 },
    { title: 'other', value: 6 },
  ],
  total = 24000,
}) => (
  <PieChartWrapper>
    <PieChart
      style={{ width: '320px', height: '320px' }}
      lineWidth={25}
      animate
      radius={50}
      data={cathegories.map(cathegory => ({
        ...cathegory,
        color: getCathegoryColor(),
      }))}
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
