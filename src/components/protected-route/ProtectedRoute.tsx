import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface Props {
  children?: ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  return <>{ children }</>;
};

export default ProtectedRoute;