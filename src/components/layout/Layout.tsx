import { ReactNode } from 'react';
import './Layout.css';

interface LayoutProps {
  children?: ReactNode
}

const Card = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      { children }
    </div>
  );
};

export default Card;