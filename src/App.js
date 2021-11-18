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
import Balance from './components/Balance';

const StatisticView = lazy(() => import('./views/StatisticView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const MainView = lazy(() => import('./views/MainView'));
const LogoutView = lazy(() => import('./views/LogoutView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  const isLogin = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLogin) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, isLogin]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          {!isLogin && (
            <>
              <Balance />
              <CurrencyRatesPanel />
            </>
          )}

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path="/register"
                element={
                  <PublicRoute redirectTo="/login" restricted>
                    <RegisterView />
                  </PublicRoute>
                }
              />

              <Route
                path="/login"
                element={
                  <PublicRoute redirectTo="/home" restricted>
                    <LoginView />
                  </PublicRoute>
                }
              />

              <Route
                path="/home"
                element={
                  <PrivateRoute redirectTo="/login">
                    <MainView />
                  </PrivateRoute>
                }
              />

              <Route
                path="/statistic"
                element={
                  <PrivateRoute redirectTo="/login">
                    <StatisticView />
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
      )}
    </Container>
  );
}

export default App;
