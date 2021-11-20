import { PieChart } from 'react-minimal-pie-chart';
import React from 'react';
import styled from 'styled-components';

const tableItem = [
  {
    title: 'Основные расходы',
    value: 8700,
  },
  {
    title: 'Продукты',
    value: 1300,
  },
  {
    title: 'Машина',
    value: 100,
  },
  {
    title: 'Забота о себе',
    value: 500,
  },
  {
    title: 'Забота о детях',
    value: 7500,
  },
  {
    title: 'Товары для дома',
    value: 1300,
  },
  {
    title: 'Образование',
    value: 20,
  },
  {
    title: 'Досуг',
    value: 7000,
  },
  {
    title: 'Другие расходы',
    value: 40,
  },
];
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

const total = tableItem.reduce((acc, item) => acc + item.value, 0);
const categories = tableItem.map((item, index) => ({
  title: item.title,
  value: (item.value * 100) / total,
  color: colors[index],
}));

const formatBalance = balance =>
  balance
    .toLocaleString('ru-RU', { minimumFractionDigits: 2 })
    .replace(',', '.');

const PieChartComponent = () => (
  <Wrapper style={{ marginTop: '20px' }}>
    <Title>Статистика</Title>
    <PieChartWrapper>
      <CustomPieChart lineWidth={25} animate radius={50} data={categories} />
      <Total>₴ {formatBalance(total)}</Total>
    </PieChartWrapper>
  </Wrapper>
);

export default PieChartComponent;

const Wrapper = styled.div``;
const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;

  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
`;
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
