import { useAuth } from "../../hooks/useAuth";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import './Login.css';
import LoginForm from "./components/login-form/LoginForm";
import { AuthCredentials } from "../../interfaces/AuthCredentials";

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
