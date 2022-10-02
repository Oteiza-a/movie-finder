import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../../context/auth/AuthProvider';
import { useAuth } from '../../../hooks/useAuth';
import NavigationBar from '../NavigationBar';

describe("NavigationBar", () => {

  const TestComponent = () => {
    const { login } = useAuth();

    useEffect(() => {
      loginMockUser()
    }, [])

    const loginMockUser = async () => await act(() => login({ email: "dummy@gmail.com", password: "12345678" })) 

    return (
      <NavigationBar />
    );
  };

  test("should render navigation bar after user is logged in", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      </BrowserRouter>
    )

    const navBarElement = await screen.findByTestId("nav-bar");
    expect(navBarElement).toBeInTheDocument();
  })
})