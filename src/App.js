import Container from './components/Container';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainView = lazy(() => import('./views/MainView/MainView.js'));

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" exact element={<MainView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
