import { Navigate, useRoutes } from 'react-router-dom';

import { Login, MoviesIndex, MovieDetail } from './pages/index';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

import './App.css';
import AuthProvider from './context/auth/AuthProvider';
import MoviesProvider from './context/movies/MoviesProvider';
import Favorites from './pages/favorites/Favorites';

function App() {
  const routes = useRoutes([
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
  ])

  return (
    <MoviesProvider>
      <AuthProvider>
        {routes}
      </AuthProvider>
    </MoviesProvider>
  );
}

export default App;
