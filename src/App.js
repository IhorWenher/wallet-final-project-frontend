import React, { useEffect, lazy, Suspense } from 'react';
import { Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import Container from './components/Container';
import AppBar from './components/AppBar';
import Loader from './components/Loader';

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
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Routes>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/login">
                <LoginView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/transactions"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/transactions" redirectTo="/login">
                <MainView />
              </PrivateRoute>
              <PrivateRoute path="/statistic" redirectTo="/login">
                <StatisticView />
              </PrivateRoute>
              <PrivateRoute path="/logout" redirectTo="/login">
                <LogoutView />
              </PrivateRoute>
            </Suspense>
          </Routes>
        </>
      )}
    </Container>
  );
}

export default App;
