import { StrictMode } from 'react';
import { mountPage } from './mountPage.jsx';
import '../index.css';
import { SmoothScrollProvider } from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor';
import { ErpService } from '../pages/ErpService';

mountPage(
  <StrictMode>
    <SmoothScrollProvider>
      <CustomCursor />
      <ErpService />
    </SmoothScrollProvider>
  </StrictMode>
);
