import Container from './components/Container';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const RegisterView = lazy(() => import('./views/RegisterView/RegisterView.js'));
const LoginView = lazy(() => import('./views/LoginView/LoginView.js'));
const MainView = lazy(() => import('./views/MainView/MainView.js'));

function App() {
  return (
    <Container>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route
            path="/login"
            // redirectTo="/"
            element={<LoginView />}
            restricted
          ></Route>

          <Route
            exact
            path="/register"
            // redirectTo="/"
            element={<RegisterView />}
            restricted
          ></Route>

          <Route path="/" exact element={<MainView />}></Route>
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
