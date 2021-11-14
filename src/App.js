import Container from './components/Container';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import StatisticView from './views/StatisticView';

const MainView = lazy(() => import('./views/MainView/MainView.js'));

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" exact element={<MainView />}></Route>
          <Route path="/statistic" exact element={<StatisticView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
