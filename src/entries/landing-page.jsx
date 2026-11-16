import { StrictMode } from 'react';
import { mountPage } from './mountPage.jsx';
import '../index.css';
import { SmoothScrollProvider } from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor';
import { LandingPageService } from '../pages/LandingPageService';

mountPage(
  <StrictMode>
    <SmoothScrollProvider>
      <CustomCursor />
      <LandingPageService />
    </SmoothScrollProvider>
  </StrictMode>
);
