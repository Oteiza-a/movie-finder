import { Navigate, useRoutes } from 'react-router-dom';

import { Login, MoviesIndex } from './pages/index';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

import './App.css';
import AuthProvider from './context/auth/AuthProvider';

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
      path: "/", 
      element: <Navigate to="/login" />,
    },
  ])

  return (
    <AuthProvider>
      {routes}
    </AuthProvider>
  );
}

export default App;
