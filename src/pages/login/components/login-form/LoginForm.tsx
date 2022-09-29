import { ChangeEvent, ReactNode, useState } from 'react';
import TextInput from '../../../../components/text-input/TextInput';
import { isEmailValid, isPasswordValid } from '../../../../validations/FormValidations';
import './LoginForm.css';

interface LoginProps {
  children?: ReactNode
  onSubmit: () => void
}

interface LoginFormFields {
  email: string,
  password: string,
}

const LoginForm = ({ onSubmit }: LoginProps) => {
  const [form, setForm] = useState<LoginFormFields>({
    email: "",
    password: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }

  const isFormValid = () => {
    const { email, password } = form;
    return isEmailValid(email) && isPasswordValid(password);
  }

  const commonInputAttributes = {
    onChange: handleFormChange,
    required: true,
    maxLength: 100,
    className: "input",
  }

  return (
    <form className="form">

      <div className="form__input-wrapper form__input-wrapper--spaced">
        <label htmlFor="email" className="form__input-label">Email</label>
        <TextInput 
          value={form?.email}
          type="email"
          name="email"
          placeholder="usuario@email.com"
          validation={isEmailValid}
          {...commonInputAttributes}
        />
      </div>

      <div className="form__input-wrapper form__input-wrapper--spaced">
        <label htmlFor="password" className="form__input-label">Password</label>
        <TextInput 
          value={form?.password}
          type="password"
          name="password"
          placeholder="*****************"
          validation={isPasswordValid}
          {...commonInputAttributes}
        />
      </div>

      <div className="form__input-wrapper">
        <button 
          className="button button--primary width-75" 
          onClick={onSubmit} 
          disabled={!isFormValid()}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;