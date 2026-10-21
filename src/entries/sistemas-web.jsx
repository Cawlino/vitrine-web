import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { SmoothScrollProvider } from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor';
import { SistemasWebService } from '../pages/SistemasWebService';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollProvider>
      <CustomCursor />
      <SistemasWebService />
    </SmoothScrollProvider>
  </StrictMode>
);
