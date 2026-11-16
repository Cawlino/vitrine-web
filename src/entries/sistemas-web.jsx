import { StrictMode } from 'react';
import { mountPage } from './mountPage.jsx';
import '../index.css';
import { SmoothScrollProvider } from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor';
import { SistemasWebService } from '../pages/SistemasWebService';

mountPage(
  <StrictMode>
    <SmoothScrollProvider>
      <CustomCursor />
      <SistemasWebService />
    </SmoothScrollProvider>
  </StrictMode>
);
