import { ChangeEvent, ReactNode, useState, MouseEvent } from 'react';
import TextInput from '../../../../components/text-input/TextInput';
import { AuthCredentials } from '../../../../interfaces/AuthCredentials';
import { isEmailValid, isPasswordValid } from '../../../../validations/FormValidations';
import './LoginForm.css';

interface LoginProps {
  children?: ReactNode
  onSubmit: (form: AuthCredentials) => void
}

const LoginForm = ({ onSubmit }: LoginProps) => {
  const [form, setForm] = useState<AuthCredentials>({
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

  const onFormSubmit = (e: MouseEvent) => {
    e.preventDefault();
    onSubmit(form)
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
        <label id="email-label" htmlFor="email" className="form__input-label">Email</label>
        <TextInput 
          value={form?.email}
          type="email"
          name="email"
          placeholder="user@email.com"
          validation={isEmailValid}
          aria-labelledby="email-label"
          {...commonInputAttributes}
        />
      </div>

      <div className="form__input-wrapper form__input-wrapper--spaced">
        <label id="password-label" htmlFor="password" className="form__input-label">Password</label>
        <TextInput 
          value={form?.password}
          type="password"
          name="password"
          placeholder="*****************"
          validation={isPasswordValid}
          aria-labelledby="password-label"
          {...commonInputAttributes}
        />
      </div>

      <div className="form__input-wrapper">
        <button 
          className="button button--primary width-75" 
          onClick={onFormSubmit} 
          disabled={!isFormValid()}
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;