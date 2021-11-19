import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
import styled from 'styled-components';

const colors = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
];

const PieChartComponent = ({
  categories = [
    { title: 'main', value: 13 },
    { title: 'food', value: 36 },
    { title: 'car', value: 9 },
    { title: 'selfCare', value: 6 },
    { title: 'childrenCare', value: 6 },
    { title: 'homeGoods', value: 1 },
    { title: 'education', value: 14 },
    { title: 'hobbies', value: 9 },
    { title: 'other', value: 6 },
  ],
  total = 24000,
}) => (
  <div>
    <h2 style={{ marginBottom: 10 }}>Статистика</h2>
    <PieChartWrapper>
      <CustomPieChart
        lineWidth={25}
        animate
        radius={50}
        data={categories.map((category, idx) => ({
          ...category,
          color: colors[idx],
        }))}
      />
      <Total>₴ {total}</Total>
    </PieChartWrapper>
  </div>
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

  @media screen and (max-width: 320px) {
    width: 280px;
    height: 280px;
  }
`;
const CustomPieChart = styled(PieChart)`
  width: 320px;
  height: 320px;

  @media screen and (max-width: 320px) {
    width: 280px;
    height: 280px;
  }
`;
