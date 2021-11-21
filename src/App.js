import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';
import CurrencyRatesPanel from './components/CurrencyRatesPanel';
import Wrap from './components/Wrap';

const StatisticView = lazy(() => import('./views/StatisticView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MainView = lazy(() => import('./views/MainView'));
const LogoutView = lazy(() => import('./views/LogoutView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser &&
        <>
          <AppBar />
          <Suspense fallback={<Loader/>}>
            <Routes>
              {/* <Route
                  path="/"
                  element={
                    <PrivateRoute redirectTo="/login" restricted>
                      <MainView />
                    </PrivateRoute>
                  }
                  /> */}
              <Route
                exact
                path="/"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Wrap>
                      <MainView />
                    </Wrap>
                  </PrivateRoute>
                }
              />

              <Route
                path="/register"
                exact
                element={
                  <PublicRoute redirectTo="/login" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                exact
                element={
                  <PublicRoute redirectTo="/" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/statistic"
                element={
                  <PrivateRoute redirectTo="/login">
                    <Wrap>
                      <StatisticView />
                    </Wrap>
                  </PrivateRoute>
                }
              />

              <Route
                path="/diagram"
                element={
                  <PrivateRoute redirectTo="/login">
                    <CurrencyRatesPanel />
                  </PrivateRoute>
                }
              />

              <Route
                path="/logout"
                element={
                  <PrivateRoute redirectTo="/login">
                    <LogoutView />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </>
      }
    </Container>
  )
}

export default App;
