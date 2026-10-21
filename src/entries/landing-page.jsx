import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import { SmoothScrollProvider } from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor';
import { LandingPageService } from '../pages/LandingPageService';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SmoothScrollProvider>
      <CustomCursor />
      <LandingPageService />
    </SmoothScrollProvider>
  </StrictMode>
);
