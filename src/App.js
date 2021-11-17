import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
//import { Switch } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

const StatisticView = lazy(() => import('./views/RegisterView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MainView = lazy(() => import('./views/MainView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
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
              <Route
                path="/statistic"
                exact
                element={<StatisticView />}
              ></Route>
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default App;
