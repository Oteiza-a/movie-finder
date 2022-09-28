import { useRoutes } from 'react-router-dom';

import { Login, MoviesIndex } from './pages/index';
import ProtectedRoute from './components/protected-route/ProtectedRoute';

import './App.css';
import AuthProvider from './context/auth/AuthProvider';

function App() {
  const routes = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/movies", element: <ProtectedRoute> <MoviesIndex/> </ProtectedRoute> },
  ])

  return (
    <AuthProvider>
      {routes}
    </AuthProvider>
  );
}

export default App;
