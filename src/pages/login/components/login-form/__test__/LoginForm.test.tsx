import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '../LoginForm';

const mockOnSubmit = jest.fn();

const getEmailField = () => screen.getByLabelText(/Email/);
const getPasswordField = () => screen.getByLabelText("Password");
const getSubmitButton = () => screen.getByRole("button", { name: /Login/ });

describe("LoginForm", () => {
  test("should render login form with email and password fields, and submit button", () => {
    render(
      <LoginForm onSubmit={mockOnSubmit} />
    )

    const emailInputElement = getEmailField()
    const passwordInputElement = getPasswordField()
    const submitButtonElement = getSubmitButton()

    expect(emailInputElement).toBeInTheDocument()
    expect(passwordInputElement).toBeInTheDocument()
    expect(submitButtonElement).toBeInTheDocument()
  })

  test("login submit button should be disabled on mount", () => {
    render(
      <LoginForm onSubmit={mockOnSubmit} />
    )
    const submitButtonElement = screen.getByRole("button", { name: /Login/ });
    expect(submitButtonElement).toBeDisabled();
  })

  test("login submit button should turn enabled after filling the form", () => {
    render(
      <LoginForm onSubmit={mockOnSubmit} />
    )

    const emailInputElement = getEmailField()
    const passwordInputElement = getPasswordField()
    const submitButtonElement = getSubmitButton()

    userEvent.type(emailInputElement, "dummy@gmail.com");
    userEvent.type(passwordInputElement, "12345678");

    expect(submitButtonElement).toBeEnabled();
  })
})