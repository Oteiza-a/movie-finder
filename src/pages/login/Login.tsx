import { useAuth } from "../../hooks/useAuth";
import { AuthCredentials } from "../../interfaces/AuthCredentials";
import Layout from "../../components/layout/Layout";
import Card from "../../components/card/Card";
import LoginForm from "./components/login-form/LoginForm";
import Logo from "../../components/logo/Logo";
import { transition } from "../../constants/transition";
import { motion } from 'framer-motion';
import './Login.css';

const Login = (): JSX.Element => {
  const { login } = useAuth();
  
  const onLogin = (form: AuthCredentials) => {
    login(form);
  }

  return (
    <motion.div {...transition}>
      <div className="bg-gradient">
        <Layout>
          <div className="login-card-container">
            <Card>
              <div className="login-card__logo">
                <Logo fontSize="32px"/>
              </div>
              <LoginForm onSubmit={onLogin}/>
            </Card>
          </div>
        </Layout>
      </div>
    </motion.div>
  );
};

export default Login;
