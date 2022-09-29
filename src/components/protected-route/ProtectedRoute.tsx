import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

type routeType = "public-only" | "public" | "protected";

interface Props {
  children?: ReactNode
  routeType: routeType
}

const ProtectedRoute = ({ children, routeType }: Props): JSX.Element => {
  const { user } = useAuth();
  const { id } = user;

  if (routeType === "public-only" && id) return <Navigate to="/movies" />
  if (routeType === "protected" && !id) return <Navigate to="/login" />
  return <>{ children }</>;
};

export default ProtectedRoute;