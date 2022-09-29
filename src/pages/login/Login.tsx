import { useAuth } from "../../hooks/useAuth";
import { AuthCredentials } from "../../interfaces/AuthCredentials";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import LoginForm from "./components/login-form/LoginForm";
import './Login.css';

const Login = (): JSX.Element => {
  const { login } = useAuth();
  
  const onLogin = (form: AuthCredentials) => {
    login(form);
  }

  return (
    <div className="bg-gradient">
      <Layout>
        <div className="login-card-container">
          <Card>
            <LoginForm onSubmit={onLogin}/>
          </Card>
        </div>
      </Layout>
    </div>
  );
};

export default Login;
