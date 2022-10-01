import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Login, MoviesIndex, MovieDetail } from './pages/index';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

import AuthProvider from './context/auth/AuthProvider';
import MoviesProvider from './context/movies/MoviesProvider';
import Favorites from './pages/favorites/Favorites';
import './App.css';
import NavigationBar from './components/nav-bar/NavigationBar';

function App() {
  const location = useLocation();
  const routes = [
    { 
      path: "/login", 
      element: <ProtectedRoute routeType="public-only"><Login /></ProtectedRoute>
    },
    { 
      path: "/movies", 
      element: <ProtectedRoute routeType="protected"><MoviesIndex /></ProtectedRoute>,
    },
    { 
      path: "/movie/:id", 
      element: <ProtectedRoute routeType="protected"><MovieDetail /></ProtectedRoute>,
    },
    { 
      path: "/favorites", 
      element: <ProtectedRoute routeType="protected"><Favorites /></ProtectedRoute>,
    },
    { 
      path: "*", 
      element: <Navigate to="/login" />,
    },
  ]

  return (
    <MoviesProvider>
      <AuthProvider>
        <NavigationBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element }) => <Route path={path} element={element} key={path}></Route>)}
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </MoviesProvider>
  );
}

export default App;
