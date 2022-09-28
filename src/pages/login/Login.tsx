import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = (): JSX.Element => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const onLogin = () => {
    login();
    navigate('/movies');
  }

  return (
    <div>
      LOGIN WORKS!
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Login;
