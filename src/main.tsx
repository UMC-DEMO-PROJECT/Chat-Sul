import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { OwnerProvider } from './context/OwnerContext.tsx';
import { AuthProvider } from 'context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <OwnerProvider>
        <App />
      </OwnerProvider>
    </AuthProvider>
  </StrictMode>
);
